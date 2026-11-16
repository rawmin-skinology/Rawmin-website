import type { Metadata } from "next";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import MapEmbed from "@/components/MapEmbed";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact RAWMIN SKINOLOGY | Cosmetic Manufacturer in Faridabad",
  description: "Call, WhatsApp or send an enquiry to RAWMIN SKINOLOGY in Faridabad, Haryana. Discuss private label, custom formulation or manufacturing for your brand.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const a = SITE.address;
  return (
    <>
      <section className="sec" id="content" style={{ paddingTop: "clamp(120px,14vw,180px)" }}><div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / Contact</nav>
        <h1 style={{ maxWidth: "14ch" }}>Let&rsquo;s build your next product.</h1>
        <p style={{ fontSize: "1.3rem" }}>Whether you are launching a new beauty brand, developing a product or looking for a reliable manufacturing partner, share your requirements with us.</p>
      </div></section>

      <section className="sec" style={{ paddingTop: 0 }}><div className="wrap contact">
        <address className="details">
          {SITE.phones.map((p) => <div key={p.tel}><small>{p.label} phone</small><a href={`tel:${p.tel}`}>{p.display}</a></div>)}
          <div><small>WhatsApp (primary number)</small><a href={`https://wa.me/${SITE.whatsapp}`} rel="noopener">Message on WhatsApp</a></div>
          {SITE.email && <div><small>Email</small><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>}
          <div><small>Address</small><span>{SITE.legal}<br />{a.street}<br />{a.city}, {a.region} {a.postal}, India</span></div>
        </address>
        <EnquiryForm />
      </div></section>

      <section className="sec sage"><div className="wrap">
        <h2>Find us.</h2>
        <MapEmbed />
      </div></section>

      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact RAWMIN SKINOLOGY", url: `${SITE.url}/contact` }} />
    </>
  );
}
