import type { Metadata } from "next";
import "./globals.css";
import { brand, hero } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${brand.workshopTitle} | ${brand.company}`,
  description: hero.subcopy,
  openGraph: {
    title: `${brand.workshopTitle} — ${brand.subtitle}`,
    description: hero.subcopy,
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBFAF7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
