import logging, smtplib
from email.message import EmailMessage
from .config import settings
from .db import SessionLocal
from .models import Enquiry

log = logging.getLogger("rawmin.mail")


def notify_enquiry(enquiry_id: int) -> None:
    """Runs after the enquiry is committed, so a mail failure never loses data."""
    with SessionLocal() as db:
        e = db.get(Enquiry, enquiry_id)
        if not e:
            return
        if not (settings.smtp_host and settings.notify_email):
            e.email_status = "skipped"
        else:
            try:
                m = EmailMessage()
                m["Subject"] = f"New enquiry #{e.id}: {e.company} ({e.service_type})"
                m["From"] = settings.smtp_from or settings.smtp_user
                m["To"] = settings.notify_email
                m["Reply-To"] = e.email
                m.set_content(f"{e.full_name} · {e.company}\n{e.email} · {e.phone}\n"
                              f"{e.product_category} / {e.service_type}\nQuantity: {e.quantity or '-'}\n\n{e.message}")
                with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=15) as s:
                    s.starttls()
                    if settings.smtp_user:
                        s.login(settings.smtp_user, settings.smtp_password)
                    s.send_message(m)
                e.email_status = "sent"
            except Exception:  # noqa: BLE001
                log.exception("Enquiry %s saved but notification failed", e.id)
                e.email_status = "failed"
        db.commit()
