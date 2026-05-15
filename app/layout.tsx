import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FuelCert – Zertifizierung für erneuerbare Kraft- und Brennstoffe",
  description:
    "FuelCert unterstützt Unternehmen bei Zertifizierung, Nachweisführung und regulatorischen Fragen rund um RFNBO, grünen Wasserstoff, Biomethan und Compliance.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
