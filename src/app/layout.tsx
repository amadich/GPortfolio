import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["400"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MACROM - Fuel your imagination",
  description:
    "MACROM is a modern marketing agency based in Iraq, bridging the gap in the local market with high-quality, effective marketing solutions. Redefining how brands communicate, grow, and connect with audiences.",

  openGraph: {
    title: "MACROM - Fuel your imagination",
    description:
      "MACROM is a modern marketing agency based in Iraq, bridging the gap in the local market with high-quality, effective marketing solutions. Redefining how brands communicate, grow, and connect with audiences.",
    url: "https://macromco.com",
    siteName: "MACROM",
    images: [
      {
        url: "https://macromco.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "MACROM Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MACROM - Fuel your imagination",
    description:
      "MACROM is a modern marketing agency based in Iraq, bridging the gap in the local market with high-quality, effective marketing solutions.",
    images: ["https://macromco.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
