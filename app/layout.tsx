import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EBKGJ4N3H7"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EBKGJ4N3H7');
            `,
          }}
        />
      </body>
    </html>
  );
}
