import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "./components/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPages ? "/Auramatics" : "";

export const metadata: Metadata = {
  title: "AURAMATICS - Data & AI Solutions",
  description:
    "Transforming businesses with intelligent technology. AURAMATICS specializes in data engineering, AI, and custom software development.",
  keywords:
    "data engineering, AI, artificial intelligence, data science, BI analytics, agentic AI, automation, Azure, Databricks",
  authors: [{ name: "AURAMATICS Team" }],
  creator: "AURAMATICS",
  publisher: "AURAMATICS",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: `${basePath}/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: `${basePath}/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${basePath}/favicon-64x64.png`,
        sizes: "64x64",
        type: "image/png",
      },
      { url: `${basePath}/favicon.ico`, sizes: "any" },
    ],
    shortcut: `${basePath}/favicon-32x32.png`,
    apple: `${basePath}/favicon-64x64.png`,
  },
  openGraph: {
    title: "AURAMATICS - Data & AI Solutions",
    description: "Transforming businesses with intelligent technology",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicon-16x16.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="64x64"
          href={`${basePath}/favicon-64x64.png`}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
