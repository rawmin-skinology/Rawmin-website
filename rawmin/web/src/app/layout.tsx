import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderBrandMarquee from "@/components/layout/header-brand-marquee";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { InquiryModalProvider } from "@/components/ui/inquiry-modal-context";
import InquiryModal from "@/components/ui/inquiry-modal";
import ClientGuard from "@/components/providers/client-guard";
import ScrollRevealManager from "@/components/animation/scroll-reveal-manager";
import "./globals.css";


const aeonik = localFont({
  src: [
    {
      path: "../public/fonts/Aeonik-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const defaultTitle = "RAWMIN SKINOLOGY | Cosmetic Manufacturer in India";
const defaultDescription =
  "Explore RAWMIN SKINOLOGY's cosmetic manufacturing, private-label, and custom product development capabilities in Faridabad, India.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE.url),
  title: {
    default: defaultTitle,
    template: "%s | RAWMIN Skinology",
  },
  description: defaultDescription,
  applicationName: "RAWMIN Skinology",
  authors: [{ name: "RAWMIN SKINOLOGY PRIVATE LIMITED" }],
  generator: "Next.js",
  keywords: [
    "Cosmetic manufacturer India",
    "Private label skincare manufacturer",
    "Custom cosmetic formulation",
    "Korean cosmetics R&D India",
    "Contract cosmetics manufacturing",
    "GMP certified cosmetic plant",
    "ISO 22716 cosmetics",
    "B2B skincare manufacturing",
  ],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE.url}/images/home-01-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "RAWMIN Skinology: Private Label & Custom Cosmetic Manufacturing",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${SITE.url}/images/home-01-hero.jpg`],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${aeonik.variable} ${manrope.variable} notranslate`}
      translate="no"
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-[#EDF8F9] text-[#16393C] selection:bg-[#2CB6C4]/30 selection:text-[#104850]"
        suppressHydrationWarning
      >
        <ClientGuard />
        <ScrollRevealManager />
        <script
          type="application/ld+json"
          id="organization-jsonld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          id="website-jsonld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd()) }}
        />
        <InquiryModalProvider>
          <HeaderBrandMarquee />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <InquiryModal />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
