import type { Metadata, Viewport } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contactData } from "@/data/contact";
import { profileData } from "@/data/profile";

const siteUrl = "https://portfolio-vituinho.vercel.app/";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profileData.name,
  url: siteUrl,
  image: new URL(profileData.avatarUrl, siteUrl).toString(),
  jobTitle: profileData.title.en,
  worksFor: { "@type": "Organization", name: "Givova Transportes", url: "https://givovatransportes.com.br" },
  address: { "@type": "PostalAddress", addressCountry: "BR" },
  knowsLanguage: ["pt-BR", "en"],
  knowsAbout: ["Backend engineering", "Cloud infrastructure", "APIs", "Automation", "Node.js", "NestJS", "TypeScript", "Python", "FastAPI", "PostgreSQL", "AWS"],
  sameAs: [contactData.linkedin, contactData.github],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor Emanuel | Software Engineer",
  description:
    "Software Engineer specializing in backend engineering, cloud infrastructure, APIs and automation with Node.js, NestJS, TypeScript, Python, FastAPI, PostgreSQL and AWS.",
  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Victor Emanuel | Software Engineer",
    description:
      "Software Engineer specializing in backend engineering, cloud infrastructure, APIs and automation with Node.js, NestJS, TypeScript, Python, FastAPI, PostgreSQL and AWS.",
    url: siteUrl,
    siteName: "Victor Emanuel Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Victor Emanuel — Software Engineer / Engenheiro de Software",
      },
    ],
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Victor Emanuel | Software Engineer",
    description:
      "Software Engineer specializing in backend engineering, cloud infrastructure, APIs and automation with Node.js, NestJS, TypeScript, Python, FastAPI, PostgreSQL and AWS.",
    images: ["/opengraph-image"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${schibsted.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>
          <Navbar />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
