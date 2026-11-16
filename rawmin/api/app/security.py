import time
from collections import defaultdict, deque
from datetime import datetime, timedelta, timezone
import bcrypt, jwt
from fastapi import Cookie, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from .config import settings
from .db import get_db
from .models import AdminUser

COOKIE = "rawmin_admin"


def hash_password(p: str) -> str:
    return bcrypt.hashpw(p.encode(), bcrypt.gensalt()).decode()


def verify_password(p: str, h: str) -> bool:
    try:
        return bcrypt.checkpw(p.encode(), h.encode())
    except ValueError:
        return False


def make_token(user: AdminUser) -> str:
    exp = datetime.now(timezone.utc) + timedelta(hours=8)
    return jwt.encode({"sub": str(user.id), "role": user.role, "exp": exp}, settings.jwt_secret, "HS256")


def current_admin(request: Request, token: str | None = Cookie(default=None, alias=COOKIE),
                  db: Session = Depends(get_db)) -> AdminUser:
    # Cookies are SameSite=Lax; also reject cross-origin state-changing requests.
    if request.method not in ("GET", "HEAD", "OPTIONS"):
        origin = request.headers.get("origin")
        if origin and origin not in settings.allowed_origins.split(","):
            raise HTTPException(403, "Origin not allowed")
    try:
        data = jwt.decode(token or "", settings.jwt_secret, ["HS256"])
        user = db.get(AdminUser, int(data["sub"]))
    except (jwt.PyJWTError, KeyError, ValueError):
        user = None
    if not user or not user.is_active:
        raise HTTPException(401, "Sign in required")
    return user


_hits: dict[str, deque] = defaultdict(deque)


def rate_limit(key: str, limit: int, window: int = 60):
    """In-memory sliding window. Per process: swap for Redis if you run several workers."""
    def dep(request: Request):
        ip = request.client.host if request.client else "unknown"
        q = _hits[f"{key}:{ip}"]
        now = time.monotonic()
        while q and now - q[0] > window:
            q.popleft()
        if len(q) >= limit:
            raise HTTPException(429, "Too many requests. Please wait a minute and try again.")
        q.append(now)
    return dep
