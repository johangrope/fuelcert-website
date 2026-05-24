import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/assets/fuelcert-logo-white.png";

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.65.11.35-.02.76-.25 1.02l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconInfo({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconCloud({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Image
              src={logoWhite}
              alt="FuelCert"
              fill
              className="site-footer__logo"
              sizes="(max-width: 900px) 55vw, min(280px, 28vw)"
            />
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Kontakt</h2>
            <p className="site-footer__company">FuelCert Sailer &amp; Grope GbR</p>
            <p className="site-footer__address">
              Bismarckstraße 65
              <br />
              10627 Berlin
            </p>
            <ul className="site-footer__list">
              <li>
                <a href="tel:+4915233560411" className="site-footer__link">
                  <IconPhone className="site-footer__icon" />
                  <span>+49 (0) 152 33560411</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@fuelcert.com" className="site-footer__link">
                  <IconMail className="site-footer__icon" />
                  <span>info@fuelcert.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading">Weiteres</h2>
            <ul className="site-footer__list site-footer__list--links">
              <li>
                <Link href="/ueber-uns" className="site-footer__link">
                  <IconUser className="site-footer__icon" />
                  <span>Über uns</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="site-footer__link">
                  <IconInfo className="site-footer__icon" />
                  <span>Impressum</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="site-footer__link">
                  <IconCloud className="site-footer__icon" />
                  <span>Datenschutz</span>
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="site-footer__link">
                  <IconCalendar className="site-footer__icon" />
                  <span>Erstgespräch buchen</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="site-footer__copyright">Copyright © 2025 FuelCert Sailer &amp; Grope GbR</p>
      </div>
    </footer>
  );
}
