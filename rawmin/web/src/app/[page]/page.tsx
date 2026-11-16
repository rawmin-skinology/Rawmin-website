import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CertGallery from "@/components/CertGallery";
import JsonLd from "@/components/JsonLd";
import Marquee from "@/components/Marquee";
import { getCertificates, getProducts } from "@/lib/api";
import { PAGES, SITE, STAGES } from "@/lib/site";

export const revalidate = 300;
type P = { params: Promise<{ page: string }> };
export const generateStaticParams = () => Object.keys(PAGES).map((page) => ({ page }));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const d = PAGES[(await params).page];
  if (!d) return {};
  return { title: d.title, description: d.description, alternates: { canonical: `/${d.slug}` }, openGraph: { title: d.title, description: d.description, url: `/${d.slug}` } };
}

const SERVICE_PAGES = ["services", "private-label", "custom-formulation"];

export default async function Page({ params }: P) {
  const d = PAGES[(await params).page];
  if (!d) notFound();
  const [certs, products] = await Promise.all([
    d.slug === "quality" ? getCertificates() : [],
    d.slug === "products" ? getProducts() : [],
  ]);
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: d.nav, item: `${SITE.url}/${d.slug}` },
    ],
  };

  const getPagePhoto = (slug: string) => {
    switch (slug) {
      case "custom-formulation": return "/facility/lab-formulation.jpg";
      case "private-label": return "/facility/cleanroom-manufacturing.jpg";
      case "services": return "/facility/packaging-design.jpg";
      case "quality": return "/facility/cosmetic-texture.jpg";
      case "about": return "/facility/cleanroom-manufacturing.jpg";
      default: return null;
    }
  };

  const heroPhoto = getPagePhoto(d.slug);

  return (
    <>
      <section className="sec" id="content" style={{ paddingTop: "clamp(120px,14vw,180px)" }}>
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> / {d.nav}
          </nav>
          <span className="section-eyebrow">{d.nav}</span>
          <h1 style={{ maxWidth: "18ch" }}>{d.h1}</h1>
          <p style={{ fontSize: "1.3rem" }}>{d.lead}</p>
        </div>
      </section>

      {/* Rich Products Directory with Photos & Animations */}
      {d.slug === "products" && (
        <>
          <Marquee label="Product categories" items={products.map((p) => ({ label: p.name, href: `#${p.slug}` }))} />

          <section className="sec" style={{ paddingTop: "40px" }}>
            <div className="wrap cat-rich-grid">
              {products.map((p) => {
                const img = p.image || `/products/${p.slug}.jpg`;
                return (
                  <article key={p.slug} id={p.slug} className="cat-rich-item">
                    <div className="cat-rich-photo-box">
                      <Image
                        src={img}
                        alt={`${p.name} manufacturing & packaging options`}
                        width={600}
                        height={450}
                        className="cat-rich-photo"
                        loading="lazy"
                      />
                    </div>
                    <div className="cat-rich-body">
                      <span className="section-eyebrow">Formulation Range</span>
                      <h2>{p.name}</h2>
                      <p>{p.description}</p>
                      
                      <div className="pc-range" style={{ marginBottom: "24px" }}>
                        <span className="pc-range-label">Available Product Variations:</span>
                        <div className="pc-pills">
                          {p.range_items.map((r) => (
                            <span key={r} className="pc-pill">{r}</span>
                          ))}
                        </div>
                      </div>

                      <div className="actions" style={{ marginTop: "16px" }}>
                        <Link className="btn" href={`/contact?cat=${encodeURIComponent(p.name)}#enquiry`}>
                          Enquire about {p.name.toLowerCase()}
                        </Link>
                        <Link className="btn ghost" href="/custom-formulation">
                          Custom Formulation Brief
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="sec dark">
            <div className="wrap">
              <span className="section-eyebrow">Custom R&amp;D &amp; Scaling</span>
              <h2>Looking for a proprietary formulation?</h2>
              <p className="lead">
                Our lab formulates active botanicals, clinically-tested actives, peptides, and natural extracts tailored to your brand’s benchmarks.
              </p>
              <div className="actions">
                <Link className="btn" href="/contact#enquiry">Submit a Formulation Brief</Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Content Sections with Visual Enhancement */}
      {d.sections.length > 0 && (
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            {heroPhoto && (
              <div style={{ marginBottom: "64px", position: "relative", aspectRatio: "21/9", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--line)" }}>
                <Image
                  src={heroPhoto}
                  alt={`${d.h1} facility overview`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            )}

            {d.sections.map((s) => (
              <article key={s.h} className="cat split">
                <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>{s.h}</h2>
                <div>
                  <p>{s.p}</p>
                  {s.list && (
                    <ul style={{ columns: 2, paddingLeft: "1.1em", maxWidth: "520px" }}>
                      {s.list.map((i) => <li key={i}>{i}</li>)}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {d.slug === "quality" && (
        <section className="sec sage">
          <div className="wrap">
            <span className="section-eyebrow">Compliance &amp; Standards</span>
            <h2>Certificates</h2>
            <p>Each certificate opens as the original document. Certificates are listed only after the company has approved them for publication.</p>
            <CertGallery certs={certs} />
          </div>
        </section>
      )}

      {d.slug === "custom-formulation" && (
        <Marquee reverse label="Development stages" items={["Brief", "Ingredients", "Formulation", "Testing", "Sample", "Approval"].map((label) => ({ label }))} />
      )}
      {d.slug === "about" && (
        <Marquee reverse label="Product development stages" items={STAGES.map((label) => ({ label }))} />
      )}

      <section className="sec dark">
        <div className="wrap">
          <h2>{d.cta}.</h2>
          <p>Tell us what you are building and our team will help you explore the next steps.</p>
          <div className="actions">
            <Link className="btn" href="/contact#enquiry">Start an enquiry</Link>
          </div>
        </div>
      </section>

      <JsonLd data={crumbs} />
      {SERVICE_PAGES.includes(d.slug) && (
        <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: d.h1, description: d.description, provider: { "@type": "Organization", name: SITE.name, url: SITE.url }, areaServed: "IN" }} />
      )}
    </>
  );
}
