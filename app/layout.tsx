import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/app/footer";
import { Header } from "@/app/header";
import { AppAnalytics } from "@/app/analytics";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  title: "Julio César's Blog",
  description: "Code, research and poetry by Julio César.",
  metadataBase: new URL("https://juliocesar.io"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Julio César's Blog",
    description: "Code, research and poetry by Julio César.",
    url: "https://juliocesar.io",
    siteName: "Julio César",
    images: ["/banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@juliocesar_io",
    creator: "@juliocesar_io",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <main className="container">
          <Header />
          <section className="content">{children}</section>
          <Footer />
        </main>
        <AppAnalytics />
      </body>
    </html>
  );
}
