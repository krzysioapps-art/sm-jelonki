import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          {/* BRAND */}
          <div className="site-footer__brand">
            <Link
              href="/"
              className="site-footer__brand-link"
              aria-label="Strona główna"
            >
              <span className="site-footer__logo">
                <Image
                  src="/icon.svg"
                  alt="Logo SM Jelonki"
                  width={54}
                  height={54}
                />
              </span>

              <span className="site-footer__brand-content">
                <strong className="site-footer__brand-title">
                  SM Jelonki
                </strong>

                <span className="site-footer__brand-text">
                  Oficjalny serwis mieszkańców
                  i administracji.
                </span>
              </span>
            </Link>
          </div>

          {/* NAV */}
          <nav
            className="site-footer__column"
            aria-label="Nawigacja"
          >
            <p className="site-footer__label">
              Serwis
            </p>

            <Link href="/">Start</Link>
            <Link href="/o-nas">O nas</Link>
            <Link href="/aktualnosci">
              Aktualności
            </Link>
            <Link href="/kontakt">
              Kontakt
            </Link>
          </nav>

          {/* RESIDENT */}
          <nav
            className="site-footer__column"
            aria-label="Dla mieszkańca"
          >
            <p className="site-footer__label">
              Mieszkaniec
            </p>

            <Link href="/zaloguj">
              Strefa mieszkańca
            </Link>
            <Link href="/dokumenty">
              Dokumenty
            </Link>
            <Link href="/pomoc-i-awarie">
              Pomoc i awarie
            </Link>
            <Link href="/wynajem">
              Wynajem lokali
            </Link>
          </nav>

          {/* CONTACT */}
          <div className="site-footer__column">
            <p className="site-footer__label">
              Kontakt
            </p>

            <p className="site-footer__text">
              ul. Powstańców Śląskich 4A
              <br />
              01-381 Warszawa
            </p>

            <a href="tel:+48226002900">
              22 600 29 00
            </a>

            <a href="mailto:sekretariat@smjelonki.pl">
              sekretariat@smjelonki.pl
            </a>
          </div>

          {/* LEGAL */}
          <nav
            className="site-footer__column"
            aria-label="Informacje prawne"
          >
            <p className="site-footer__label">
              Informacje
            </p>

            <Link href="/polityka-prywatnosci">
              Polityka prywatności
            </Link>

            <Link href="/polityka-cookies">
              Polityka cookies
            </Link>

            <Link href="/regulamin-strony">
              Regulamin strony
            </Link>

            <Link href="/monitoring">
              Monitoring
            </Link>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} SM Jelonki. Wszelkie prawa
            zastrzeżone.
          </p>

          <p>
            Oficjalny serwis internetowy •
            Warszawa Bemowo
          </p>
        </div>
      </div>
    </footer>
  );
}