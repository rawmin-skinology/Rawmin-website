import { PRODUCTS, type Product } from "./site";
const API = process.env.API_URL || "http://localhost:8000";

export type Cert = { id: number; title: string; standard: string; scope: string; certificate_no: string | null;
  document_url: string | null; preview_url: string | null; issue_date: string | null; expiry_date: string | null };

async function get<T>(path: string, fallback: T): Promise<T> {
  try {
    const r = await fetch(`${API}${path}`, { next: { revalidate: 300 } });
    return r.ok ? ((await r.json()) as T) : fallback;
  } catch { return fallback; }
}
export const getCertificates = () => get<Cert[]>("/api/certificates", []);
export const getProducts = () => get<Product[]>("/api/products", PRODUCTS).then((p) => (p.length ? p : PRODUCTS));
