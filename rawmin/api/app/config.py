from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")
    database_url: str = "postgresql+psycopg://rawmin:rawmin@localhost:5432/rawmin"
    jwt_secret: str = "change-me"          # MUST be overridden in production
    allowed_origins: str = "http://localhost:3000"
    cookie_secure: bool = False            # True in production (HTTPS)
    notify_email: str = ""                 # RAWMIN team inbox
    smtp_host: str = ""
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    smtp_from: str = ""


settings = Settings()
