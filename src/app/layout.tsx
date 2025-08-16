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
  description: "MACROM is a modern marketing agency based in Iraq, bridging the gap in the local market with high-quality, effective marketing solutions. Redefining how brands communicate, grow, and connect with audiences.",
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
