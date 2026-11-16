import Link from "next/link";
export const metadata = { title: "Page not found | RAWMIN SKINOLOGY", robots: { index: false } };
export default function NotFound() {
  return (<section className="sec" id="content"><div className="wrap"><h1>We could not find that page.</h1>
    <p>The link may be old or mistyped. Try one of these instead.</p>
    <div className="actions"><Link className="btn" href="/">Go to the homepage</Link><Link className="btn ghost" href="/products">See products</Link><Link className="btn ghost" href="/contact">Contact us</Link></div></div></section>);
}
