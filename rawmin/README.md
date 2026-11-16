# RAWMIN SKINOLOGY website

Next.js 15 (frontend) + FastAPI (API) + PostgreSQL. Helvetica only, no web-font imports.

## Run locally
```bash
docker compose up -d db                      # PostgreSQL (dev password only)

cd api && python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env                         # set JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD (12+ chars)
alembic upgrade head                         # create tables
python -m app.seed                           # portfolio content, certificates, first admin
uvicorn app.main:app --port 8000 --proxy-headers

cd ../web && cp .env.example .env.local && npm install && npm run dev
```
Site: http://localhost:3000  ·  Admin: http://localhost:3000/admin

## Structure
- `web/src/lib/site.ts`: **all contact details, address, page copy, FAQ**. Edit here.
- `web/src/components/Header.tsx`: the logo travels from the centre of the first screen to the header slot over the first 60% of a viewport of scroll (transform only, one rAF-throttled listener). Reduced-motion users get the header state and no intro.
- `api/app/main.py`: public and admin routes. `models.py`: schema. `seed.py`: content.
- Contacts: primary 9910393383 (also WhatsApp, as in the brochure), secondary 9311422855.

## Needs your decision before launch
1. **Address conflict.** Certificates and the brief use *2nd Floor, Plot No. 2, Site No. 2, 14/3 Main Mathura Road, Sector 31*. The brochure's contact page uses *Plot 2, Site No. 2, NH-19, Block A, DLF Industrial Area, Sector 32*. The site uses the certificate address. Change `SITE.address` if wrong. The map follows it.
2. **Map pin.** Without `NEXT_PUBLIC_MAPS_EMBED_URL` the map searches the address text. Paste the "Embed a map" src from your official Google listing for an exact pin.
3. **Email.** `info@rawminskinology.com` appears in brackets in the brochure and the phone `98765 43210` is clearly a placeholder (not used). Email is shown only if `NEXT_PUBLIC_CONTACT_EMAIL` is set.
4. **Certificates** are seeded **hidden and "pending"**. GMP and ISO 9001 numbers end in `XXX`, and I could not verify the issuer (International Standards Certification / "Euro UK") or its accreditation. Verify with the issuer, then switch each on in `/admin`. ISO 22716 says `DRAFT`: it is kept out of the public folder (`internal/`) and the API refuses to make drafts public. No FDA certificate was supplied, so none is shown.
5. **Logo resolution.** The supplied PNG is 346×133 px after trimming transparent margin. It will look soft at intro size on large screens. Supply an SVG or 2000px+ file and replace `web/public/logo/rawmin-logo.png` (keep the 346:133 ratio or update `RATIO` in Header.tsx).
6. **Not used on purpose:** "15+ years of expertise" (conflicts with founding in 2023), Korean R&D claims, client logos, the third-party Anaquil / Amedria Labs product, and brochure photos (no confirmed rights). The site is type-led until you supply real photography.

## Security notes
Passwords bcrypt-hashed; admin session is an httpOnly SameSite=Lax cookie (set `COOKIE_SECURE=true` and `ALLOWED_ORIGINS=https://your-domain` in production); admin routes require the cookie and reject foreign origins; enquiry form has honeypot plus rate limiting; email failure never loses an enquiry. Rate limiting is in-memory per process: use Redis if you run several workers. Run uvicorn with `--proxy-headers` so limits see the visitor IP, not the Next.js server.

## Status: what was and was not run
Run: logo and certificate asset processing; Python syntax check on all backend files.
**Not run** (no network in my build environment, so nothing could be installed): `npm install`, TypeScript, `next build`, FastAPI, Alembic, PostgreSQL, email, Lighthouse. Expect to fix small errors on first run. Start with `npm run lint` and `alembic upgrade head`.

## Not built
Admin UI for product editing (the API endpoints exist), service editing, reference-file upload on the form, automated tests, Docker for the app itself, deployment config.
