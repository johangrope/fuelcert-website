import { getTranslations } from "next-intl/server";

export async function homeCrumb() {
  const t = await getTranslations("nav");
  return { label: t("home"), href: "/" as const };
}

export async function leistungenBreadcrumbs(currentLabel: string) {
  const tNav = await getTranslations("nav");
  const t = await getTranslations("leistungen");
  return [
    { label: tNav("home"), href: "/" },
    { label: t("kicker"), href: "/leistungen" },
    { label: currentLabel },
  ];
}

export async function wissenBreadcrumbs(currentLabel: string) {
  const tNav = await getTranslations("nav");
  const t = await getTranslations("wissen");
  return [
    { label: tNav("home"), href: "/" },
    { label: t("breadcrumb"), href: "/wissen" },
    { label: currentLabel },
  ];
}

export async function anwendungenBreadcrumbs(currentLabel: string) {
  const tNav = await getTranslations("nav");
  const t = await getTranslations("anwendungsbereiche");
  return [
    { label: tNav("home"), href: "/" },
    { label: t("breadcrumb"), href: "/anwendungsbereiche" },
    { label: currentLabel },
  ];
}
