import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { routing, type Locale } from "@/i18n/routing";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  buildAlternates,
} from "@/lib/seo";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = (routing.locales.includes(locale as Locale) ? locale : routing.defaultLocale) as Locale;
  const description = DEFAULT_DESCRIPTION[loc];

  return {
    metadataBase: new URL(SITE_URL),
    // Kein Title-Template: die bestehenden Seitentitel enthalten die Marke
    // bereits ("… | FuelCert"), ein Template würde zu Dopplungen führen.
    title: SITE_NAME,
    description,
    alternates: buildAlternates(loc, ""),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: loc === "en" ? "en_US" : "de_DE",
      url: `${SITE_URL}/${loc}`,
      title: SITE_NAME,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd(locale as Locale)]} />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
