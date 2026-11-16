import Link from "next/link";
import { PRODUCTS, SITE } from "@/lib/site";

export default function Footer() {
  const a = SITE.address;
  return (
    <footer>
      <div className="wrap foot">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/rawmin-logo.png" width={173} height={67} alt="RAWMIN SKINOLOGY" className="foot-logo" />
          <p>Private label, custom cosmetics and contract manufacturing for skin and personal-care brands.</p>
        </div>
        <nav aria-label="Company"><h2>Company</h2><Link href="/about">About</Link><Link href="/quality">Quality and certifications</Link><Link href="/contact">Contact</Link></nav>
        <nav aria-label="Solutions"><h2>Solutions</h2><Link href="/services">Services</Link><Link href="/private-label">Private label</Link><Link href="/custom-formulation">Custom formulation</Link></nav>
        <nav aria-label="Products"><h2>Products</h2>{PRODUCTS.slice(0, 7).map((p) => <Link key={p.slug} href={`/products#${p.slug}`}>{p.name}</Link>)}</nav>
        <address>
          <h2>Contact</h2>
          {SITE.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.label}: {p.display}</a>)}
          <a href={`https://wa.me/${SITE.whatsapp}`} rel="noopener">WhatsApp</a>
          {SITE.email && <a href={`mailto:${SITE.email}`}>{SITE.email}</a>}
          <span>{a.street}, {a.city}, {a.region} {a.postal}</span>
        </address>
      </div>
      <p className="wrap legal">© {new Date().getFullYear()} {SITE.legal}. Product claims, certificates and contact details on this site are published only as supplied by the company.</p>
    </footer>
  );
}
