import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/personal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personal.name} — Full-Stack Engineer`,
  description: personal.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
