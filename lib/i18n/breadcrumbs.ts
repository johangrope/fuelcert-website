import { getTranslations } from "next-intl/server";

export async function homeCrumb() {
  const t = await getTranslations("nav");
  return { label: t("home"), href: "/" as const };
}

export async function leistungenBreadcrumbs(currentLabel: string) {
  const tNav = await getTranslations("nav");
  return [
    { label: tNav("home"), href: "/" },
    { label: tNav("services") },
    { label: currentLabel },
  ];
}

export async function wissenBreadcrumbs(currentLabel: string) {
  const tNav = await getTranslations("nav");
  return [
    { label: tNav("home"), href: "/" },
    { label: tNav("knowledge") },
    { label: currentLabel },
  ];
}

export async function anwendungenBreadcrumbs(currentLabel: string) {
  const tNav = await getTranslations("nav");
  return [
    { label: tNav("home"), href: "/" },
    { label: tNav("applications") },
    { label: currentLabel },
  ];
}

export async function newsOverviewBreadcrumbs() {
  const tNav = await getTranslations("nav");
  return [
    { label: tNav("home"), href: "/" },
    { label: tNav("knowledge") },
    { label: tNav("news") },
  ];
}

export async function newsArticleBreadcrumbs(currentLabel: string) {
  const tNav = await getTranslations("nav");
  return [
    { label: tNav("home"), href: "/" },
    { label: tNav("knowledge") },
    { label: tNav("news"), href: "/news" },
    { label: currentLabel },
  ];
}
