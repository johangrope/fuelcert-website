import type { Metadata } from "next";
import { PlaceholderDetailLayout } from "@/components/PlaceholderDetailLayout";
import { UEBER_UNS } from "@/lib/static-pages";

export const metadata: Metadata = {
  title: `${UEBER_UNS.title} | FuelCert`,
  description: UEBER_UNS.metaDescription,
};

export default function UeberUnsPage() {
  return (
    <PlaceholderDetailLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: UEBER_UNS.menuLabel },
      ]}
      kicker="FuelCert"
      title={UEBER_UNS.title}
      intro={UEBER_UNS.intro}
      sections={UEBER_UNS.sections}
      backHref="/"
      backLabel="Zur Startseite"
    />
  );
}
