import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderDetailLayout } from "@/components/PlaceholderDetailLayout";
import { ALL_ANWENDUNG_SLUGS, getAnwendung, type AnwendungSlug } from "@/lib/anwendungsbereiche";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ALL_ANWENDUNG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getAnwendung(slug);
  if (!data) return { title: "Seite nicht gefunden" };
  return {
    title: `${data.title} | FuelCert`,
    description: data.metaDescription,
  };
}

export default async function AnwendungDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = getAnwendung(slug);
  if (!data || !ALL_ANWENDUNG_SLUGS.includes(slug as AnwendungSlug)) {
    notFound();
  }

  return (
    <PlaceholderDetailLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Anwendungsbereiche", href: "/anwendungsbereiche" },
        { label: data.menuLabel },
      ]}
      kicker="Anwendungsbereiche"
      title={data.title}
      intro={data.intro}
      sections={data.sections}
      backHref="/anwendungsbereiche"
      backLabel="Zurück zur Übersicht Anwendungsbereiche"
    />
  );
}
