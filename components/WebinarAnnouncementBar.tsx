"use client";

import { useLocale } from "next-intl";
import * as DE from "@/lib/webinar-announcement";
import * as EN from "@/lib/i18n/en/webinar-announcement";

function CalendarIcon() {
  return (
    <svg className="webinar-bar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 3.5v3M16 3.5v3M3.5 10h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="15" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function AnnouncementText({
  label,
  title,
  date,
  time,
  format,
}: {
  label: string;
  title: string;
  date: string;
  time: string;
  format: string;
}) {
  return (
    <>
      <strong className="webinar-bar__label">{label}</strong>
      <span className="webinar-bar__title">„{title}"</span>
      <span className="webinar-bar__meta">
        {date}, {time}, {format}
      </span>
    </>
  );
}

export function WebinarAnnouncementBar() {
  const locale = useLocale();
  const config = locale === "en" ? EN.WEBINAR_ANNOUNCEMENT : DE.WEBINAR_ANNOUNCEMENT;

  if (!config.enabled) return null;

  const textProps = {
    label: config.label,
    title: config.title,
    date: config.date,
    time: config.time,
    format: config.format,
  };

  return (
    <aside className="webinar-bar" aria-label={locale === "en" ? "Webinar announcement" : "Webinar-Hinweis"}>
      <div className="webinar-bar__inner container">
        <CalendarIcon />

        <div className="webinar-bar__marquee" aria-live="polite">
          <div className="webinar-bar__track">
            <p className="webinar-bar__text">
              <AnnouncementText {...textProps} />
            </p>
            <p className="webinar-bar__text" aria-hidden="true">
              <AnnouncementText {...textProps} />
            </p>
          </div>
        </div>

        <p className="webinar-bar__static">
          <AnnouncementText {...textProps} />
        </p>

        <a
          className="webinar-bar__cta"
          href={config.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {config.ctaLabel}
        </a>
      </div>
    </aside>
  );
}
