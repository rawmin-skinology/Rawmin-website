"""python -m app.seed  — loads portfolio content and creates the first admin.
ADMIN_EMAIL / ADMIN_PASSWORD are read from the environment (never hard-coded)."""
import os
from datetime import date
from sqlalchemy import select
from .db import SessionLocal
from .models import AdminUser, Certificate, Product, Service
from .security import hash_password

SCOPE = "Manufacturing of high quality cosmetic products related to skin care and personal care."
PRODUCTS = [
    ("Skin Care & Skin Protection", "skin-care", "Skin Care", "Skin care and skin-protection products for everyday care and targeted concerns.", ["Serums", "Moisturizers", "Sunscreens", "Face masks", "Scrubs", "Skin treatments"], "/products/skin-care.jpg"),
    ("Skin Cleansers", "skin-cleansers", "Skin Care", "Cleansing products for different skin types and product requirements.", ["Face cleansers", "Face wash", "Cleansing products"], "/products/skin-cleansers.jpg"),
    ("Hair Care & Hair Protection", "hair-care", "Hair Care", "Hair-care products for nourishment, conditioning and targeted hair and scalp care.", ["Hair conditioners", "Hair masks", "Hair serums", "Hair treatments"], "/products/hair-care.jpg"),
    ("Hair Cleansers", "hair-cleansers", "Hair Care", "Hair-cleansing products for different hair-care requirements.", ["Shampoos", "Hair cleansers", "Specialised cleansing products"], "/products/hair-cleansers.jpg"),
    ("Body Care", "body-care", "Body Care", "Body-care products for cleansing, nourishment and everyday routines.", ["Body cleansers", "Body oils", "Body lotions", "Body scrubs", "Body butters"], "/products/body-care.jpg"),
    ("Lip Care", "lip-care", "Lip Care", "Lip-care products for nourishment and protection.", ["Lip balms", "Lip oils", "Lip scrubs", "Lip masks", "Lip butters"], "/products/lip-care.jpg"),
    ("Bath & Shower", "bath-shower", "Bath & Shower", "Bath and shower products for everyday personal-care routines.", ["Bath products", "Shower products", "Body wash"], "/products/bath-shower.jpg"),
]
SERVICES = [
    ("Private Label Manufacturing", "private-label", "Start from an established formulation and develop it under your own brand."),
    ("Custom Cosmetics", "custom-formulation", "Develop a formulation around your product brief, positioning and packaging."),
    ("Packaging Support", "packaging", "Packaging selection, labelling and coordination of artwork requirements."),
    ("Quality and Regulatory Support", "quality", "Quality-focused processes, documentation and regulatory guidance."),
    ("Export Support", "export", "Documentation, specifications, COA and MSDS where required."),
]

with SessionLocal() as db:
    for n, slug, cat, d, r, img in PRODUCTS:
        p = db.scalar(select(Product).where(Product.slug == slug))
        if not p:
            db.add(Product(name=n, slug=slug, category=cat, description=d, range_items=r, image=img))
        else:
            p.image = img
    for n, slug, d in SERVICES:
        if not db.scalar(select(Service).where(Service.slug == slug)):
            db.add(Service(name=n, slug=slug, description=d))
    if not db.scalars(select(Certificate)).first():
        db.add_all([
            Certificate(title="Good Manufacturing Practice", standard="GMP", scope=SCOPE, certificate_no="GMP/092020/XXX",
                        document_url="/certificates/gmp.pdf", preview_url="/certificates/gmp.png",
                        issue_date=date(2026, 4, 2), expiry_date=date(2029, 4, 1), verification_status="pending", is_public=False,
                        verification_notes="Certificate number ends in XXX and issuer not independently verified. Approve only after confirming with issuer."),
            Certificate(title="Quality Management System", standard="ISO 9001:2015", scope=SCOPE, certificate_no="QMS/230620/XXX",
                        document_url="/certificates/iso-9001-2015.pdf", preview_url="/certificates/iso-9001-2015.png",
                        issue_date=date(2026, 4, 2), expiry_date=date(2029, 4, 1), verification_status="pending", is_public=False,
                        verification_notes="Certificate number ends in XXX and issuer not independently verified. Approve only after confirming with issuer."),
            Certificate(title="Cosmetics GMP", standard="ISO 22716:2007", scope=SCOPE, certificate_no="DRAFT",
                        verification_status="draft", is_public=False, issue_date=date(2025, 12, 1),
                        verification_notes="Supplied document says DRAFT. Never public until a final certificate is supplied."),
        ])
    email, pw = os.environ.get("ADMIN_EMAIL"), os.environ.get("ADMIN_PASSWORD")
    if email and pw and len(pw) >= 12 and not db.scalar(select(AdminUser).where(AdminUser.email == email.lower())):
        db.add(AdminUser(email=email.lower(), password_hash=hash_password(pw), role="admin"))
    db.commit()
print("Seed complete.")
