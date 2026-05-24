"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import fuelcertLogo from "@/assets/fuelcert-logo.png";
import { isNavSectionActive, MAIN_NAV_LINKS, NAV_DROPDOWNS } from "@/lib/site-navigation";
import type { NavDropdownConfig } from "@/lib/types";

const MQ_MAX_MOBILE = "(max-width: 960px)";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

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

  function toggleDropdown(id: string) {
    setOpenDropdownId((current) => (current === id ? null : id));
  }

  function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (pathname !== "/" || !href.includes("#")) return;
    const id = href.split("#")[1];
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      closeMobileNav();
    }
  }

  function isDropdownActive(dd: NavDropdownConfig) {
    return isNavSectionActive(pathname, dd.href);
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

            {NAV_DROPDOWNS.map((dd) => (
              <li
                key={dd.id}
                className={`nav__item nav__item--dropdown nav__item--has-section${
                  openDropdownId === dd.id ? " is-open-dropdown" : ""
                }${dd.variant === "grouped" ? " nav__item--grouped" : ""}${
                  dd.id === "wissen" ? " nav__item--wide-dropdown" : ""
                }`}
              >
                <div className="nav__dropdown-head">
                  <Link
                    href={dd.href}
                    className={`nav__link nav__dropdown-label${
                      isDropdownActive(dd) ? " nav__link--active" : ""
                    }`}
                    onClick={(e) => {
                      if (dd.href.includes("#")) scrollToSection(e, dd.href);
                      if (mobile) closeMobileNav();
                    }}
                  >
                    {dd.label}
                    <span className="nav__chevron nav__chevron--label" aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    className="nav__link nav__dropdown-toggle nav__dropdown-toggle--chevron"
                    aria-expanded={openDropdownId === dd.id}
                    aria-label={`${dd.label} Untermenü`}
                    onClick={() => {
                      if (mobile) toggleDropdown(dd.id);
                    }}
                  >
                    <span className="nav__chevron" aria-hidden="true" />
                  </button>
                </div>

                <div className="nav__dropdown-panel">
                  {dd.variant === "flat" ? (
                    <ul className="nav__dropdown">
                      {dd.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={pathname === item.href ? "is-active" : undefined}
                            onClick={() => mobile && closeMobileNav()}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    dd.groups.map((group) => (
                      <div key={group.groupLabel} className="nav__dropdown-group">
                        <p className="nav__dropdown-group-label">{group.groupLabel}</p>
                        <ul className="nav__dropdown">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={pathname === item.href ? "is-active" : undefined}
                                onClick={() => mobile && closeMobileNav()}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
                </div>
              </li>
            ))}

            {MAIN_NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav__link${pathname === link.href ? " nav__link--active" : ""}`}
                  onClick={() => mobile && closeMobileNav()}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
