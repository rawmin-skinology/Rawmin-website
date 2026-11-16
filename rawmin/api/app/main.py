from datetime import datetime, timezone
from fastapi import APIRouter, BackgroundTasks, Depends, FastAPI, HTTPException, Query, Response
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import func, or_, select
from sqlalchemy.orm import Session
from . import schemas as s
from .config import settings
from .db import get_db
from .mailer import notify_enquiry
from .models import STATUSES, AdminUser, Certificate, Enquiry, Product, Service
from .security import COOKIE, current_admin, make_token, rate_limit, verify_password

app = FastAPI(title="RAWMIN SKINOLOGY API", docs_url=None, redoc_url=None, openapi_url=None)
app.add_middleware(CORSMiddleware, allow_origins=settings.allowed_origins.split(","),
                   allow_credentials=True, allow_methods=["GET", "POST", "PATCH", "DELETE"],
                   allow_headers=["Content-Type"])
pub = APIRouter(prefix="/api")
adm = APIRouter(prefix="/api/admin")


@pub.get("/health")
def health(db: Session = Depends(get_db)):
    db.execute(select(1))
    return {"ok": True}


@pub.post("/enquiries", status_code=201, dependencies=[Depends(rate_limit("enquiry", 5, 600))])
def create_enquiry(body: s.EnquiryIn, bg: BackgroundTasks, db: Session = Depends(get_db)):
    if body.website:  # honeypot tripped: pretend success, store nothing
        return {"ok": True}
    data = body.model_dump(exclude={"website"})
    e = Enquiry(**data)
    db.add(e); db.commit()
    bg.add_task(notify_enquiry, e.id)
    return {"ok": True, "reference": f"RWM-{e.id:05d}"}


@pub.get("/products", response_model=list[s.ProductOut])
def products(db: Session = Depends(get_db)):
    return db.scalars(select(Product).where(Product.is_published).order_by(Product.id)).all()


@pub.get("/services", response_model=list[s.ServiceOut])
def services(db: Session = Depends(get_db)):
    return db.scalars(select(Service).where(Service.is_published).order_by(Service.id)).all()


@pub.get("/certificates", response_model=list[s.CertificateOut])
def certificates(db: Session = Depends(get_db)):
    # Only certificates that are both approved and switched on are ever public.
    q = select(Certificate).where(Certificate.is_public, Certificate.verification_status != "draft").order_by(Certificate.id)
    return db.scalars(q).all()


# ---------- admin ----------
@adm.post("/auth/login", dependencies=[Depends(rate_limit("login", 8, 300))])
def login(body: s.LoginIn, response: Response, db: Session = Depends(get_db)):
    u = db.scalar(select(AdminUser).where(AdminUser.email == body.email.lower()))
    if not u or not u.is_active or not verify_password(body.password, u.password_hash):
        raise HTTPException(401, "Email or password is incorrect")
    u.last_login = datetime.now(timezone.utc); db.commit()
    response.set_cookie(COOKIE, make_token(u), httponly=True, samesite="lax",
                        secure=settings.cookie_secure, max_age=8 * 3600, path="/")
    return {"email": u.email, "role": u.role}


@adm.post("/auth/logout")
def logout(response: Response):
    response.delete_cookie(COOKIE, path="/")
    return {"ok": True}


@adm.get("/me")
def me(u: AdminUser = Depends(current_admin)):
    return {"email": u.email, "role": u.role}


@adm.get("/stats")
def stats(_: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    rows = dict(db.execute(select(Enquiry.status, func.count()).group_by(Enquiry.status)).all())
    return {"total": sum(rows.values()), "by_status": {k: rows.get(k, 0) for k in STATUSES}}


@adm.get("/enquiries", response_model=list[s.EnquiryOut])
def list_enquiries(q: str = "", status: str = "", limit: int = Query(50, le=200), offset: int = 0,
                   _: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    stmt = select(Enquiry).order_by(Enquiry.created_at.desc()).limit(limit).offset(offset)
    if status in STATUSES:
        stmt = stmt.where(Enquiry.status == status)
    if q.strip():
        like = f"%{q.strip()}%"
        stmt = stmt.where(or_(Enquiry.full_name.ilike(like), Enquiry.company.ilike(like), Enquiry.email.ilike(like)))
    return db.scalars(stmt).all()


def _get(db, model, id_):
    obj = db.get(model, id_)
    if not obj:
        raise HTTPException(404, "Not found")
    return obj


@adm.get("/enquiries/{id}", response_model=s.EnquiryOut)
def get_enquiry(id: int, _: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    return _get(db, Enquiry, id)


@adm.patch("/enquiries/{id}", response_model=s.EnquiryOut)
def patch_enquiry(id: int, body: s.EnquiryPatch, _: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    e = _get(db, Enquiry, id)
    for k, v in body.model_dump(exclude_unset=True).items():
        setattr(e, k, v)
    db.commit()
    return e


@adm.get("/products", response_model=list[s.ProductOut])
def admin_products(_: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    return db.scalars(select(Product).order_by(Product.id)).all()


@adm.post("/products", response_model=s.ProductOut, status_code=201)
def add_product(body: s.ProductIn, _: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    if db.scalar(select(Product).where(Product.slug == body.slug)):
        raise HTTPException(409, "That slug is already in use")
    p = Product(**body.model_dump()); db.add(p); db.commit()
    return p


@adm.patch("/products/{id}", response_model=s.ProductOut)
def edit_product(id: int, body: s.ProductIn, _: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    p = _get(db, Product, id)
    for k, v in body.model_dump().items():
        setattr(p, k, v)
    db.commit()
    return p


@adm.delete("/products/{id}", status_code=204)
def delete_product(id: int, _: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    db.delete(_get(db, Product, id)); db.commit()


@adm.get("/certificates", response_model=list[s.CertificateAdminOut])
def admin_certs(_: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    return db.scalars(select(Certificate).order_by(Certificate.id)).all()


@adm.patch("/certificates/{id}", response_model=s.CertificateAdminOut)
def patch_cert(id: int, body: s.CertificatePatch, _: AdminUser = Depends(current_admin), db: Session = Depends(get_db)):
    c = _get(db, Certificate, id)
    for k, v in body.model_dump(exclude_unset=True).items():
        setattr(c, k, v)
    if c.verification_status == "draft":
        c.is_public = False  # a draft can never be public
    db.commit()
    return c


app.include_router(pub)
app.include_router(adm)
