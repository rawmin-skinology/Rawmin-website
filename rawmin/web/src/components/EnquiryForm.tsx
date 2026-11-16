"use client";
import { useState } from "react";

const CATS = ["Skin Care", "Hair Care", "Body Care", "Bath & Shower", "Lip Care", "Other"];
const SVCS = ["Custom Formulation", "Private Label", "Product Manufacturing", "Product Development", "Packaging Support", "Regulatory Support", "Other"];
type Errs = Record<string, string>;

export default function EnquiryForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errs, setErrs] = useState<Errs>({});
  const [ref, setRef] = useState("");
  const [note, setNote] = useState("");

  async function submit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (state === "sending") return; // duplicate-submit guard
    const f = new FormData(ev.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const e: Errs = {};
    if (v("full_name").length < 2) e.full_name = "Enter your full name.";
    if (v("company").length < 2) e.company = "Enter your company or brand name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) e.email = "Enter a valid business email, like name@company.com.";
    if (v("phone").replace(/\D/g, "").length < 7) e.phone = "Enter a phone number with at least 7 digits.";
    if (!v("product_category")) e.product_category = "Choose a product category.";
    if (!v("service_type")) e.service_type = "Choose what you are looking for.";
    if (v("message").length < 10) e.message = "Describe your project in at least 10 characters.";
    if (!f.get("consent")) e.consent = "Please agree so we can contact you about this enquiry.";
    setErrs(e);
    if (Object.keys(e).length) { (document.querySelector("[aria-invalid=true]") as HTMLElement | null)?.focus(); return; }

    setState("sending"); setNote("");
    const body = { ...Object.fromEntries(["full_name", "company", "email", "phone", "country", "product_category", "service_type", "quantity", "message", "website"].map((k) => [k, v(k)])),
      country: v("country") || null, quantity: v("quantity") || null, consent: true };
    try {
      const r = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (r.status === 201) { setRef((await r.json()).reference ?? ""); setState("done"); return; }
      if (r.status === 422) {
        const d = (await r.json()).detail as { loc: string[]; msg: string }[];
        setErrs(Object.fromEntries(d.map((x) => [x.loc[x.loc.length - 1], x.msg.replace(/^Value error, /, "")])));
        setNote("Some fields need attention. Check the messages below."); setState("idle"); return;
      }
      setNote(r.status === 429 ? "Too many attempts. Wait a few minutes, or call us on the numbers above." : "We could not send your enquiry. Try again, or call us on the numbers above.");
      setState("error");
    } catch { setNote("Connection problem. Check your internet and try again."); setState("error"); }
  }

  if (state === "done") return (
    <div className="ok" role="status" tabIndex={-1} ref={(n) => n?.focus()}>
      <h3>Thank you for contacting RAWMIN SKINOLOGY.</h3>
      <p>Our team will review your enquiry and get back to you.{ref && <> Your reference is <strong>{ref}</strong>.</>}</p>
    </div>
  );

  const Field = ({ id, label, type = "text", req = true, children }: { id: string; label: string; type?: string; req?: boolean; children?: React.ReactNode }) => (
    <div className="field" key={id}>
      <label htmlFor={id}>{label}{req ? "" : " (optional)"}</label>
      {children ?? <input id={id} name={id} type={type} required={req} aria-invalid={!!errs[id]} aria-describedby={errs[id] ? `${id}-e` : undefined} autoComplete={id === "email" ? "email" : id === "phone" ? "tel" : id === "full_name" ? "name" : id === "company" ? "organization" : undefined} />}
      {errs[id] && <p className="err" id={`${id}-e`}>{errs[id]}</p>}
    </div>
  );
  const Select = ({ id, label, opts }: { id: string; label: string; opts: string[] }) => (
    Field({ id, label, children: (
      <select id={id} name={id} required defaultValue="" aria-invalid={!!errs[id]} aria-describedby={errs[id] ? `${id}-e` : undefined}>
        <option value="" disabled>Select</option>{opts.map((o) => <option key={o}>{o}</option>)}
      </select>) })
  );

  return (
    <form onSubmit={submit} noValidate id="enquiry" aria-label="Enquiry form">
      <h2>Start your enquiry</h2>
      {note && <p className="err" role="alert">{note}</p>}
      {Field({ id: "full_name", label: "Full name" })}{Field({ id: "company", label: "Company or brand name" })}
      {Field({ id: "email", label: "Business email", type: "email" })}{Field({ id: "phone", label: "Phone number", type: "tel" })}
      {Field({ id: "country", label: "Country", req: false })}
      {Select({ id: "product_category", label: "Product category", opts: CATS })}
      {Select({ id: "service_type", label: "What are you looking for?", opts: SVCS })}
      {Field({ id: "quantity", label: "Estimated quantity", req: false })}
      {Field({ id: "message", label: "Project description", children: <textarea id="message" name="message" rows={5} required aria-invalid={!!errs.message} aria-describedby={errs.message ? "message-e" : undefined} /> })}
      <div className="hp" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="field check">
        <input id="consent" name="consent" type="checkbox" aria-invalid={!!errs.consent} aria-describedby={errs.consent ? "consent-e" : undefined} />
        <label htmlFor="consent">I agree that RAWMIN SKINOLOGY may use these details to respond to my enquiry.</label>
        {errs.consent && <p className="err" id="consent-e">{errs.consent}</p>}
      </div>
      <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send enquiry"}</button>
    </form>
  );
}
