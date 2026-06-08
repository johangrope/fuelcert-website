import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

export async function getCurrentLocale(): Promise<Locale> {
  return (await getLocale()) as Locale;
}

/** Returns the English or German content module based on the active locale. */
export async function getLocaleContent<T extends object>(deModule: T, enModule: object): Promise<T> {
  const locale = await getCurrentLocale();
  return (locale === "en" ? enModule : deModule) as T;
}
