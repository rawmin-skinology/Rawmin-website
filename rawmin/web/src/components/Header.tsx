"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV = [["About", "/about"], ["Products", "/products"], ["Services", "/services"], ["Private Label", "/private-label"], ["Contact", "/contact"]];
const RATIO = 133 / 346; // height / width of the approved logo artwork

/** The logo is one fixed element. Scroll progress drives its position and scale from
 *  centred (intro) to the header slot, so it never disappears and reappears. */
export default function Header() {
  const path = usePathname();
  const home = path === "/";
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLElement>(null);
  const logo = useRef<HTMLAnchorElement>(null);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    const b = bar.current!, l = logo.current!;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    const apply = () => {
      raf = 0;
      const vw = window.innerWidth, vh = window.innerHeight, small = vw < 720;
      const endW = small ? 104 : 132, hh = small ? 64 : 76, pad = small ? 20 : 40;
      const startW = Math.min(vw * 0.72, 620);
      const p = home && !calm.matches ? Math.min(1, Math.max(0, window.scrollY / (vh * 0.6))) : 1;
      const e = p * p * (3 - 2 * p);
      const sx = (vw - startW) / 2, sy = vh * 0.44 - (startW * RATIO) / 2;
      const ex = pad, ey = (hh - endW * RATIO) / 2;
      l.style.cssText = `width:${startW}px;left:0;top:0;transform:translate3d(${sx + (ex - sx) * e}px,${sy + (ey - sy) * e}px,0) scale(${1 + (endW / startW - 1) * e})`;
      b.style.setProperty("--p", String(e));
      b.classList.toggle("ready", p > 0.6);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    calm.addEventListener("change", on);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      calm.removeEventListener("change", on);
    };
  }, [home]);

  // Keyboard users tabbing into the nav at the top of the home page skip past the intro.
  const reveal = () => { if (home && window.scrollY < window.innerHeight * 0.6) window.scrollTo({ top: window.innerHeight * 0.6 }); };

  return (
    <header ref={bar} className={`bar${open ? " open" : ""}`} onFocusCapture={reveal}>
      <Link ref={logo} href="/" className="brand" aria-label="RAWMIN SKINOLOGY, home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/rawmin-logo.png" width={346} height={133} alt="" />
      </Link>
      <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      <nav id="nav" aria-label="Main">
        {NAV.map(([t, h]) => <Link key={h} href={h} aria-current={path === h ? "page" : undefined}>{t}</Link>)}
        <Link href="/contact#enquiry" className="btn small">Start an enquiry</Link>
      </nav>
    </header>
  );
}
