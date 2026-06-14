import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/personal";
import { seo } from "@/data/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: `%s | ${personal.name}`,
  },
  description: seo.description,
  applicationName: seo.siteName,
  authors: [{ name: personal.name, url: seo.url }],
  creator: personal.name,
  publisher: personal.name,
  keywords: seo.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: seo.url,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${personal.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    creator: "@usamaashraf82",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
