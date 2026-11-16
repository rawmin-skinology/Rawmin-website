"use client";
import { useRef, useState } from "react";
import type { Cert } from "@/lib/api";

const fmt = (d: string | null) => (d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "");

export default function CertGallery({ certs }: { certs: Cert[] }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const [cur, setCur] = useState<Cert | null>(null);
  const [zoom, setZoom] = useState(100);
  if (!certs.length) return <p className="muted">Certificate documents are available on request. Contact our team and we will share them.</p>;
  const open = (c: Cert) => { setCur(c); setZoom(100); dlg.current?.showModal(); };
  return (
    <>
      <ul className="certs">
        {certs.map((c) => (
          <li key={c.id}>
            <button onClick={() => open(c)} aria-haspopup="dialog">
              <strong>{c.standard}</strong>
              <span>{c.title}</span>
              {c.expiry_date && <small>Valid until {fmt(c.expiry_date)}</small>}
              <em>View certificate</em>
            </button>
          </li>
        ))}
      </ul>
      <dialog ref={dlg} className="viewer" aria-label={cur ? `${cur.standard} certificate` : "Certificate"}
        onClick={(e) => { if (e.target === dlg.current) dlg.current?.close(); }}>
        {cur && (
          <>
            <div className="v-bar">
              <h3>{cur.standard}</h3>
              <div className="v-tools">
                <button onClick={() => setZoom((z) => Math.max(100, z - 50))} aria-label="Zoom out" disabled={zoom <= 100}>−</button>
                <span aria-live="polite">{zoom}%</span>
                <button onClick={() => setZoom((z) => Math.min(300, z + 50))} aria-label="Zoom in" disabled={zoom >= 300}>+</button>
                {cur.document_url && <a href={cur.document_url} target="_blank" rel="noopener">Open PDF</a>}
                {cur.document_url && <a href={cur.document_url} download>Download</a>}
                <button onClick={() => dlg.current?.close()}>Close</button>
              </div>
            </div>
            <div className="v-body" tabIndex={0} aria-label="Certificate image, scrollable">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cur.preview_url ?? ""} alt={`${cur.standard} certificate issued to RAWMIN SKINOLOGY PRIVATE LIMITED. Scope: ${cur.scope}`} style={{ width: `${zoom}%` }} />
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
