"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import fuelcertLogo from "@/assets/fuelcert-logo.png";

const MQ_MAX_MOBILE = "(max-width: 960px)";

const dropdowns = [
  {
    id: "leistungen",
    label: "Leistungen",
    items: [
      { label: "Überblick", href: "#" },
      { label: "Beratung", href: "#" },
      { label: "Begleitung", href: "#" },
    ],
  },
  {
    id: "anwendung",
    label: "Anwendungsbereiche",
    items: [
      { label: "RFNBO", href: "#" },
      { label: "Grüner Wasserstoff", href: "#" },
      { label: "Biomethan", href: "#" },
    ],
  },
  {
    id: "wissen",
    label: "Wissen",
    items: [
      { label: "FAQ", href: "#" },
      { label: "Publikationen", href: "#" },
    ],
  },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<(typeof dropdowns)[number]["id"] | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(MQ_MAX_MOBILE);
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!mobile) {
      setMenuOpen(false);
      setOpenDropdownId(null);
    }
  }, [mobile]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape" && mobile && menuOpen) setMenuOpen(false);
    }
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [mobile, menuOpen]);

  function closeMobileNav() {
    setMenuOpen(false);
    setOpenDropdownId(null);
  }

  function toggleDropdown(id: (typeof dropdowns)[number]["id"]) {
    setOpenDropdownId((current) => (current === id ? null : id));
  }

  return (
    <header className={`header${menuOpen ? " is-open" : ""}`}>
      <div className="header__inner container">
        <Link href="/" className="logo" onClick={() => mobile && closeMobileNav()}>
          <Image src={fuelcertLogo} alt="FuelCert" className="logo__img" priority />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() =>
            setMenuOpen((open) => {
              const next = !open;
              if (!next) setOpenDropdownId(null);
              return next;
            })
          }
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>

        <nav id="site-nav" className="nav">
          <ul className="nav__list">
            <li>
              <Link href="/" className={`nav__link${pathname === "/" ? " nav__link--active" : ""}`}>
                Home
              </Link>
            </li>
            {dropdowns.map((dd) => (
              <li
                key={dd.id}
                className={`nav__item nav__item--dropdown${
                  openDropdownId === dd.id ? " is-open-dropdown" : ""
                }`}
              >
                <button
                  type="button"
                  className="nav__link nav__dropdown-toggle"
                  aria-expanded={openDropdownId === dd.id}
                  onClick={() => {
                    if (mobile) toggleDropdown(dd.id);
                  }}
                >
                  {dd.label}
                  <span className="nav__chevron" aria-hidden="true" />
                </button>
                <ul className="nav__dropdown">
                  {dd.items.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (mobile && item.href !== "#") closeMobileNav();
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <Link href="#" className="nav__link">
                Über Uns
              </Link>
            </li>
            <li>
              <Link
                href="/#kontakt"
                className="nav__link"
                onClick={(e) => {
                  if (pathname === "/") {
                    const el = document.getElementById("kontakt");
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  closeMobileNav();
                }}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
