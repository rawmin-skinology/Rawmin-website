import re
from datetime import date, datetime
from typing import Literal
from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator

CATEGORIES = ["Skin Care", "Hair Care", "Body Care", "Bath & Shower", "Lip Care", "Other"]
SERVICES = ["Custom Formulation", "Private Label", "Product Manufacturing", "Product Development",
            "Packaging Support", "Regulatory Support", "Other"]
Status = Literal["new", "in_review", "contacted", "quotation_sent", "closed"]


class EnquiryIn(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    company: str = Field(min_length=2, max_length=160)
    email: EmailStr
    phone: str = Field(min_length=7, max_length=30)
    country: str | None = Field(default=None, max_length=80)
    product_category: Literal[tuple(CATEGORIES)]  # type: ignore[valid-type]
    service_type: Literal[tuple(SERVICES)]  # type: ignore[valid-type]
    quantity: str | None = Field(default=None, max_length=80)
    message: str = Field(min_length=10, max_length=4000)
    consent: bool
    website: str = ""  # honeypot: real users leave this empty

    @field_validator("full_name", "company", "message", "country", "quantity")
    @classmethod
    def strip(cls, v):
        return v.strip() if isinstance(v, str) else v

    @field_validator("phone")
    @classmethod
    def phone_ok(cls, v):
        v = v.strip()
        if not re.fullmatch(r"\+?[0-9 ()\-]{7,30}", v) or len(re.sub(r"\D", "", v)) < 7:
            raise ValueError("Enter a valid phone number")
        return v

    @field_validator("consent")
    @classmethod
    def consent_ok(cls, v):
        if not v:
            raise ValueError("Consent is required")
        return v


class EnquiryPatch(BaseModel):
    status: Status | None = None
    assigned_to: str | None = Field(default=None, max_length=80)
    internal_notes: str | None = Field(default=None, max_length=5000)
    quotation_sent: bool | None = None


class EnquiryOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int; full_name: str; company: str; email: str; phone: str; country: str | None
    product_category: str; service_type: str; quantity: str | None; message: str
    status: str; assigned_to: str | None; internal_notes: str | None
    quotation_sent: bool; email_status: str; created_at: datetime; updated_at: datetime


class LoginIn(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1, max_length=200)


class ProductIn(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    slug: str = Field(pattern=r"^[a-z0-9-]+$", max_length=120)
    category: str = Field(max_length=60)
    description: str
    range_items: list[str] = []
    image: str | None = None
    is_published: bool = True
    seo_title: str | None = None
    seo_description: str | None = None


class ProductOut(ProductIn):
    model_config = ConfigDict(from_attributes=True)
    id: int


class ServiceOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int; name: str; slug: str; description: str


class CertificatePatch(BaseModel):
    verification_status: Literal["pending", "verified", "draft", "rejected"] | None = None
    is_public: bool | None = None
    certificate_no: str | None = None
    verification_notes: str | None = None
    expiry_date: date | None = None


class CertificateOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int; title: str; standard: str; scope: str; certificate_no: str | None
    document_url: str | None; preview_url: str | None
    issue_date: date | None; expiry_date: date | None


class CertificateAdminOut(CertificateOut):
    verification_status: str; is_public: bool; verification_notes: str | None
