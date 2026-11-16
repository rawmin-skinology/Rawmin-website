import Link from "next/link";
import type { ReactNode } from "react";

type Item = { label: string; href?: string };
/** CSS-only loop. The second copy is hidden from assistive tech and the tab order. */
export default function Marquee({ items, reverse = false, label }: { items: Item[]; reverse?: boolean; label: string }) {
  const group = (hidden: boolean): ReactNode => (
    <ul className="m-group" aria-hidden={hidden || undefined}>
      {items.map((i) => (
        <li key={i.label}>{i.href ? <Link href={i.href} tabIndex={hidden ? -1 : undefined}>{i.label}</Link> : <span>{i.label}</span>}</li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee${reverse ? " rev" : ""}`} role="region" aria-label={label}>
      <div className="m-track">{group(false)}{group(true)}</div>
    </div>
  );
}
