import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Schibsted_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const body = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const ogImage = `${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}/Ethan_HeadShot.PNG?tr=w-1200,h-630,fo-face`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ethan Rivera — Software Engineer",
    template: "%s — Ethan Rivera",
  },
  description:
    "CS grad turning AI into working software. AI agents on ServiceNow, RAG systems in Python, and full-stack apps in Next.js and Flutter.",
  openGraph: {
    title: "Ethan Rivera — Software Engineer",
    description: "CS grad turning AI into working software.",
    url: siteUrl,
    siteName: "Ethan Rivera",
    images: [{ url: ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Rivera — Software Engineer",
    description: "CS grad turning AI into working software.",
    images: [ogImage],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: siteUrl,
  sameAs: [site.github, site.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Arizona State University",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
