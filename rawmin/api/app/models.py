from datetime import date, datetime
from sqlalchemy import JSON, Boolean, Date, DateTime, ForeignKey, Index, String, Text, func
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column
from .db import Base

Json = JSON().with_variant(JSONB, "postgresql")
STATUSES = ("new", "in_review", "contacted", "quotation_sent", "closed")


class Stamped:
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())


class AdminUser(Base):
    __tablename__ = "admin_users"
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(254), unique=True)
    password_hash: Mapped[str] = mapped_column(String(100))
    role: Mapped[str] = mapped_column(String(20), default="admin")
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    last_login: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))


class Enquiry(Stamped, Base):
    __tablename__ = "enquiries"
    __table_args__ = (Index("ix_enquiries_status_created", "status", "created_at"),)
    id: Mapped[int] = mapped_column(primary_key=True)
    full_name: Mapped[str] = mapped_column(String(120))
    company: Mapped[str] = mapped_column(String(160))
    email: Mapped[str] = mapped_column(String(254), index=True)
    phone: Mapped[str] = mapped_column(String(30))
    country: Mapped[str | None] = mapped_column(String(80))
    product_category: Mapped[str] = mapped_column(String(60))
    service_type: Mapped[str] = mapped_column(String(60))
    quantity: Mapped[str | None] = mapped_column(String(80))
    message: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(20), default="new", index=True)
    assigned_to: Mapped[str | None] = mapped_column(String(80))
    internal_notes: Mapped[str | None] = mapped_column(Text)
    quotation_sent: Mapped[bool] = mapped_column(Boolean, default=False)
    consent: Mapped[bool] = mapped_column(Boolean, default=False)
    email_status: Mapped[str] = mapped_column(String(20), default="pending")  # pending|sent|failed|skipped


class Product(Stamped, Base):
    """A product category from the RAWMIN portfolio (not an individual SKU)."""
    __tablename__ = "products"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(120))
    slug: Mapped[str] = mapped_column(String(120), unique=True)
    category: Mapped[str] = mapped_column(String(60), index=True)
    description: Mapped[str] = mapped_column(Text)
    range_items: Mapped[list] = mapped_column(Json, default=list)
    image: Mapped[str | None] = mapped_column(String(255))
    is_published: Mapped[bool] = mapped_column(Boolean, default=True)
    seo_title: Mapped[str | None] = mapped_column(String(160))
    seo_description: Mapped[str | None] = mapped_column(String(320))


class Service(Stamped, Base):
    __tablename__ = "services"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(120))
    slug: Mapped[str] = mapped_column(String(120), unique=True)
    description: Mapped[str] = mapped_column(Text)
    is_published: Mapped[bool] = mapped_column(Boolean, default=True)
    seo_title: Mapped[str | None] = mapped_column(String(160))
    seo_description: Mapped[str | None] = mapped_column(String(320))


class Certificate(Stamped, Base):
    __tablename__ = "certificates"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(120))
    standard: Mapped[str] = mapped_column(String(60))
    scope: Mapped[str] = mapped_column(Text)
    certificate_no: Mapped[str | None] = mapped_column(String(60))
    document_url: Mapped[str | None] = mapped_column(String(255))
    preview_url: Mapped[str | None] = mapped_column(String(255))
    verification_status: Mapped[str] = mapped_column(String(30), default="pending")  # pending|verified|draft|rejected
    issue_date: Mapped[date | None] = mapped_column(Date)
    expiry_date: Mapped[date | None] = mapped_column(Date)
    is_public: Mapped[bool] = mapped_column(Boolean, default=False, index=True)
    verification_notes: Mapped[str | None] = mapped_column(Text)
