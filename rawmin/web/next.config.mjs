const API = process.env.API_URL || "http://localhost:8000";
export default {
  poweredByHeader: false,
  async rewrites() { return [{ source: "/api/:path*", destination: `${API}/api/:path*` }]; },
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ] }];
  },
};
