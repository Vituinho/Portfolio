import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  metadataBase: new URL("https://portfolio-vituinho.vercel.app/"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Victor Emanuel | Software Engineer",
    description:
      "Software Engineer specializing in backend engineering, cloud infrastructure, APIs and automation with Node.js, NestJS, TypeScript, Python, FastAPI, PostgreSQL and AWS.",
    url: "https://portfolio-vituinho.vercel.app/",
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
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
