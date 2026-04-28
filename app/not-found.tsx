'use client';

import Link from 'next/link';
import { Home, Search, MapPinned } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found">
      <section className="section">
        <div className="container">
          <div className="not-found__card">
            <div className="not-found__badge">404</div>

            <h1 className="not-found__title">
              Nie znaleziono strony
            </h1>

            <p className="not-found__text">
              Podany adres nie istnieje albo strona została przeniesiona.
            </p>

            <div className="not-found__actions">
              <Link
                href="/"
                className="not-found__button is-primary"
              >
                Strona główna
              </Link>

              <Link
                href="/aktualnosci"
                className="not-found__button"
              >
                Aktualności
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}