"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("common");

  function switchLocale(next: Locale) {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="lang-switcher" role="group" aria-label={t("languageLabel")}>
      <button
        type="button"
        className={`lang-switcher__btn${locale === "de" ? " lang-switcher__btn--active" : ""}`}
        onClick={() => switchLocale("de")}
        aria-pressed={locale === "de"}
        aria-current={locale === "de" ? "true" : undefined}
      >
        DE
      </button>
      <span className="lang-switcher__sep" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        className={`lang-switcher__btn${locale === "en" ? " lang-switcher__btn--active" : ""}`}
        onClick={() => switchLocale("en")}
        aria-pressed={locale === "en"}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </button>
    </div>
  );
}
