import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AnwendungsbereicheOverviewPage({ params }: Props) {
  const { locale } = await params;
  redirect({ href: "/", locale });
}
