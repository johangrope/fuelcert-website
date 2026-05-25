import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderDetailLayout } from "@/components/PlaceholderDetailLayout";
import { ALL_LEISTUNG_SLUGS, getLeistung, type LeistungSlug } from "@/lib/leistungen";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ALL_LEISTUNG_SLUGS.filter(
    (slug) =>
      slug !== "zertifizierung-redcert-iscc-certifhy" &&
      slug !== "nachweisfuehrung-und-register" &&
      slug !== "co2-und-quotenhandel" &&
      slug !== "berichterstattung-und-meldepflichten"
  ).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getLeistung(slug);
  if (!data) return { title: "Seite nicht gefunden" };
  return {
    title: `${data.title} | FuelCert`,
    description: data.metaDescription,
  };
}

export default async function LeistungDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getLeistung(slug);
  if (!data || !ALL_LEISTUNG_SLUGS.includes(slug as LeistungSlug)) {
    notFound();
  }

  return (
    <PlaceholderDetailLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Leistungen", href: "/leistungen" },
        { label: data.menuLabel },
      ]}
      kicker="Leistungen"
      title={data.title}
      intro={data.intro}
      sections={data.sections}
      backHref="/leistungen"
      backLabel="Zurück zur Leistungsübersicht"
    />
  );
}
