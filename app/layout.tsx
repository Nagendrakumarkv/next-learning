import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Learning",
  description: "Learn Next.js step by step",
} as Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav style={{ padding: 20, background: "#eee" }}>
          {/* <Link href="/">Home</Link> | <Link href="/about">About</Link> |
          <Link href="/contact"> Contact</Link> |
          <Link href="/products"> Products</Link> | */}
          <Link href="/dashboard"> Dashboard</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
