import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amar Sijercic — Senior UX/UI Designer",
  description:
    "Portfolio of Amar Sijercic, a Senior UX/UI Designer crafting intentional and human-centered digital experiences.",
  openGraph: {
    title: "Amar Sijercic — Senior UX/UI Designer",
    description:
      "Portfolio of Amar Sijercic, a Senior UX/UI Designer crafting intentional and human-centered digital experiences.",
    url: "https://sijercicamar.com",
    siteName: "Amar Sijercic",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-362739828" />
    </html>
  );
}
