"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { getLeistungenTeaserList } from "@/lib/leistungen";

const services = getLeistungenTeaserList();

/** Horizontale „Scan-Linie“ von oben (0–1): höher = Strich/Punkte starten früher, wenn Text unten ins Bild kommt */
const TIMELINE_SCANNER_VH = 0.9;

export function LeistungenSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyFull = () => {
      timeline.style.setProperty("--timeline-line-progress", "1");
      timeline.querySelectorAll(".leistungen__row").forEach((row) => {
        row.classList.add("leistungen__row--revealed");
      });
    };

    if (mqReduce.matches) {
      applyFull();
      return;
    }

    const update = () => {
      const tRect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const scannerY = vh * TIMELINE_SCANNER_VH;
      const h = tRect.height;
      const revealed = Math.min(Math.max(0, scannerY - tRect.top), h);
      const p = h > 0 ? revealed / h : 0;
      timeline.style.setProperty("--timeline-line-progress", String(p));

      timeline.querySelectorAll(".leistungen__row").forEach((row) => {
        const el = row as HTMLElement;
        const r = el.getBoundingClientRect();
        const anchor = r.top + Math.min(32, r.height * 0.2);
        el.classList.toggle(
          "leistungen__row--revealed",
          anchor <= scannerY + Math.min(48, vh * 0.05)
        );
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const onReduceChange = () => {
      if (mqReduce.matches) applyFull();
      else update();
    };
    mqReduce.addEventListener("change", onReduceChange);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mqReduce.removeEventListener("change", onReduceChange);
    };
  }, []);

  return (
    <section id="leistungen" className="leistungen" aria-labelledby="leistungen-heading">
      <div className="container">
        <h2 id="leistungen-heading" className="leistungen__title">
          Unsere Leistungen
        </h2>
        <p className="leistungen__intro">
          Die Zertifizierung erneuerbarer Kraft- und Brennstoffe ermöglicht deren Anrechnung auf regulierte
          CO2-Märkte, wie die THG-Quote oder den europäischen und nationalen Emissionshandel. Wir unterstützen
          Produzenten, Händler und Inverkehrbringer bzw. Emissionshandelspflichtige entlang der gesamten
          Wertschöpfungskette von diesen Möglichkeiten bestmöglich zu profitieren.
        </p>

        <div ref={timelineRef} className="leistungen__timeline">
          {services.map((service) => (
            <div
              key={service.sectionId}
              id={service.sectionId}
              className={`leistungen__row leistungen__row--${service.side}`}
            >
              <article className="leistungen__card">
                <h3 className="leistungen__card-title">{service.title}</h3>
                <p className="leistungen__card-text">{service.description}</p>
                <Link href={service.href} className="leistungen__link">
                  Mehr erfahren &gt;
                </Link>
              </article>
              <span className="leistungen__node" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
