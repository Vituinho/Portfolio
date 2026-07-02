import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Victor Emanuel | Full Stack Developer",
  description:
    "Full Stack Developer focused on building modern web applications with Next.js, TypeScript, PHP, and Laravel. Explore my projects, learning journey, and development experience.",
  metadataBase: new URL("https://yourdomain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Victor Emanuel | Full Stack Developer",
    description:
      "Portfolio showcasing my projects, skills, and journey as a Full Stack Developer.",
    url: "https://yourdomain.com",
    siteName: "Victor Emanuel Portfolio",
    images: [
      {
        url: "/images/avatar.jpeg",
        width: 1200,
        height: 630,
        alt: "Victor Emanuel Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Victor Emanuel | Full Stack Developer",
    description:
      "Portfolio showcasing my projects, skills, and journey as a Full Stack Developer.",
    images: ["/images/avatar.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}
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