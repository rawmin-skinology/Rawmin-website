"use client";
import { useCallback, useEffect, useState } from "react";

type Enq = { id: number; full_name: string; company: string; email: string; phone: string; country: string | null; product_category: string; service_type: string; quantity: string | null; message: string; status: string; assigned_to: string | null; internal_notes: string | null; quotation_sent: boolean; email_status: string; created_at: string };
type Cert = { id: number; standard: string; title: string; certificate_no: string | null; verification_status: string; is_public: boolean; verification_notes: string | null };
const STATUS: Record<string, string> = { new: "New", in_review: "In review", contacted: "Contacted", quotation_sent: "Quotation sent", closed: "Closed" };

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const r = await fetch(`/api/admin${path}`, { ...init, headers: { "Content-Type": "application/json" }, credentials: "same-origin" });
  if (!r.ok) throw Object.assign(new Error((await r.json().catch(() => ({}))).detail ?? "Request failed"), { status: r.status });
  return r.status === 204 ? (undefined as T) : r.json();
}

export default function Admin() {
  const [user, setUser] = useState<string | null | undefined>(undefined);
  const [err, setErr] = useState("");
  const [stats, setStats] = useState<{ total: number; by_status: Record<string, number> } | null>(null);
  const [rows, setRows] = useState<Enq[]>([]);
  const [certs, setCerts] = useState<Cert[]>([]);
  const [q, setQ] = useState(""); const [st, setSt] = useState("");
  const [sel, setSel] = useState<Enq | null>(null);

  const load = useCallback(async () => {
    try {
      const [s, e, c] = await Promise.all([api<typeof stats>("/stats"), api<Enq[]>(`/enquiries?q=${encodeURIComponent(q)}&status=${st}`), api<Cert[]>("/certificates")]);
      setStats(s); setRows(e); setCerts(c);
    } catch (x) { if ((x as { status?: number }).status === 401) setUser(null); }
  }, [q, st]);

  useEffect(() => { api<{ email: string }>("/me").then((m) => setUser(m.email)).catch(() => setUser(null)); }, []);
  useEffect(() => { if (user) load(); }, [user, load]);

  async function login(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault(); setErr("");
    const f = new FormData(ev.currentTarget);
    try { const m = await api<{ email: string }>("/auth/login", { method: "POST", body: JSON.stringify({ email: f.get("email"), password: f.get("password") }) }); setUser(m.email); }
    catch (x) { setErr((x as Error).message); }
  }
  async function save(patch: Partial<Enq>) {
    if (!sel) return;
    const u = await api<Enq>(`/enquiries/${sel.id}`, { method: "PATCH", body: JSON.stringify(patch) });
    setSel(u); load();
  }
  async function cert(id: number, patch: object) {
    try { await api(`/certificates/${id}`, { method: "PATCH", body: JSON.stringify(patch) }); load(); } catch (x) { setErr((x as Error).message); }
  }

  if (user === undefined) return <main className="wrap sec"><p>Loading…</p></main>;
  if (!user) return (
    <section className="wrap sec" id="content" style={{ maxWidth: 460 }}>
      <h1 style={{ fontSize: "2.4rem" }}>Admin sign in</h1>
      <form onSubmit={login} aria-label="Admin sign in">
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="username" /></div>
        <div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" required autoComplete="current-password" /></div>
        {err && <p className="err" role="alert">{err}</p>}
        <button className="btn">Sign in</button>
      </form>
    </section>
  );

  return (
    <section className="wrap sec" id="content" style={{ paddingTop: 110 }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <h1 style={{ fontSize: "2.4rem" }}>Enquiries</h1>
        <button className="btn ghost" onClick={async () => { await api("/auth/logout", { method: "POST" }); setUser(null); }}>Sign out {user}</button>
      </div>
      {stats && <p>{stats.total} total. {Object.entries(STATUS).map(([k, v]) => `${v}: ${stats.by_status[k] ?? 0}`).join(". ")}.</p>}
      {err && <p className="err" role="alert">{err}</p>}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "16px 0" }}>
        <input aria-label="Search name, company or email" placeholder="Search name, company or email" value={q} onChange={(e) => setQ(e.target.value)} style={{ maxWidth: 340 }} />
        <select aria-label="Filter by status" value={st} onChange={(e) => setSt(e.target.value)} style={{ maxWidth: 220 }}>
          <option value="">All statuses</option>{Object.entries(STATUS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
      </div>
      <div className="split" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "start" }}>
        <ul className="rows" style={{ maxHeight: "70vh", overflow: "auto" }}>
          {rows.length === 0 && <li>No enquiries match.</li>}
          {rows.map((r) => (
            <li key={r.id} style={{ gridTemplateColumns: "1fr" }}>
              <button onClick={() => setSel(r)} aria-pressed={sel?.id === r.id} style={{ all: "unset", cursor: "pointer", display: "block", width: "100%" }}>
                <strong>{r.company}</strong> · {r.full_name}<br /><small className="muted">{STATUS[r.status]} · {r.service_type} · {new Date(r.created_at).toLocaleDateString("en-GB")}</small>
              </button>
            </li>
          ))}
        </ul>
        <div aria-live="polite">
          {sel ? (
            <>
              <h2 style={{ fontSize: "1.6rem" }}>{sel.company}</h2>
              <p>{sel.full_name}<br /><a href={`mailto:${sel.email}`}>{sel.email}</a> · <a href={`tel:${sel.phone}`}>{sel.phone}</a>{sel.country && <> · {sel.country}</>}</p>
              <p><strong>{sel.product_category}</strong>, {sel.service_type}{sel.quantity && <>, quantity {sel.quantity}</>}</p>
              <p style={{ whiteSpace: "pre-wrap" }}>{sel.message}</p>
              <p className="muted">Email notification: {sel.email_status}</p>
              <div className="field"><label htmlFor="s">Status</label>
                <select id="s" value={sel.status} onChange={(e) => save({ status: e.target.value })}>{Object.entries(STATUS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
              <div className="field check"><input id="qs" type="checkbox" checked={sel.quotation_sent} onChange={(e) => save({ quotation_sent: e.target.checked })} /><label htmlFor="qs">Quotation sent</label></div>
              <div className="field"><label htmlFor="n">Internal notes</label>
                <textarea id="n" rows={4} defaultValue={sel.internal_notes ?? ""} key={sel.id} onBlur={(e) => e.target.value !== (sel.internal_notes ?? "") && save({ internal_notes: e.target.value })} /></div>
            </>
          ) : <p className="muted">Select an enquiry to see its details.</p>}
        </div>
      </div>

      <h2 style={{ marginTop: 72, fontSize: "2rem" }}>Certificates</h2>
      <p className="muted">A certificate is public only when it is verified and switched on. Drafts can never be public.</p>
      <ul className="rows">
        {certs.map((c) => (
          <li key={c.id} style={{ gridTemplateColumns: "1fr 1fr auto auto" }}>
            <div><strong>{c.standard}</strong><br /><small>{c.certificate_no ?? "No number"}</small></div>
            <small>{c.verification_notes}</small>
            <select aria-label={`Verification status for ${c.standard}`} value={c.verification_status} onChange={(e) => cert(c.id, { verification_status: e.target.value })}>
              {["pending", "verified", "draft", "rejected"].map((s) => <option key={s}>{s}</option>)}</select>
            <label><input type="checkbox" checked={c.is_public} disabled={c.verification_status === "draft"} onChange={(e) => cert(c.id, { is_public: e.target.checked })} /> Public</label>
          </li>
        ))}
      </ul>
    </section>
  );
}
