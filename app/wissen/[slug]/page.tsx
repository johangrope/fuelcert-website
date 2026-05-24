import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderDetailLayout } from "@/components/PlaceholderDetailLayout";
import { ALL_WISSEN_SLUGS, getWissenArticle, type WissenSlug } from "@/lib/wissen";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ALL_WISSEN_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getWissenArticle(slug);
  if (!data) return { title: "Seite nicht gefunden" };
  return {
    title: `${data.title} | FuelCert`,
    description: data.metaDescription,
  };
}

export default async function WissenArticlePage({ params }: Props) {
  const { slug } = await params;
  const data = getWissenArticle(slug);
  if (!data || !ALL_WISSEN_SLUGS.includes(slug as WissenSlug)) {
    notFound();
  }

  return (
    <PlaceholderDetailLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Wissen", href: "/wissen" },
        { label: data.menuLabel },
      ]}
      kicker="Wissen"
      title={data.title}
      intro={data.intro}
      sections={data.sections}
      backHref="/wissen"
      backLabel="Zurück zur Wissensübersicht"
    />
  );
}
