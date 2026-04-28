import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  MapPin,
  Building2,
  ArrowRight,
} from 'lucide-react';

import { jobOffers } from '@/data/jobs';

export const metadata: Metadata = {
  title: 'Rekrutacja - SM Jelonki',
  description:
    'Aktualne oferty pracy w Spółdzielni Mieszkaniowej Jelonki.',
};

export default function RekrutacjaPage() {
  const activeCount = jobOffers.length;

  return (
    <main>
      <section className="section jobs-page">
        <div className="container">
          <header className="jobs-page__header">
            <span className="jobs-page__eyebrow">
              Kariera
            </span>

            <h1 className="jobs-page__title">
              Rekrutacja
            </h1>

            <p className="jobs-page__text">
              Dołącz do zespołu Spółdzielni
              Mieszkaniowej Jelonki. Sprawdź
              aktualne oferty pracy i znajdź
              stanowisko dla siebie.
            </p>

            <div className="jobs-page__stats">
              <div className="jobs-page__stat">
                <strong>{activeCount}</strong>
                <span>
                  aktywne
                  {activeCount === 1
                    ? ' ogłoszenie'
                    : ' ogłoszenia'}
                </span>
              </div>
            </div>
          </header>

          {jobOffers.length > 0 ? (
            <div className="jobs-page__grid">
              {jobOffers.map((job) => (
                <article
                  key={job.slug}
                  className="jobs-page__card"
                >
                  <div className="jobs-page__card-top">
                    <span className="jobs-page__badge">
                      {job.publishedAt}
                    </span>

                    <h2 className="jobs-page__job-title">
                      {job.title}
                    </h2>

                    <p className="jobs-page__summary">
                      {job.summary}
                    </p>
                  </div>

                  <div className="jobs-page__meta">
                    <div>
                      <MapPin size={16} />
                      <span>
                        {job.location}
                      </span>
                    </div>

                    <div>
                      <Briefcase size={16} />
                      <span>{job.type}</span>
                    </div>

                    <div>
                      <Building2 size={16} />
                      <span>
                        {job.department}
                      </span>
                    </div>
                  </div>

                  <div className="jobs-page__preview">
                    <h3>
                      Najważniejsze obowiązki
                    </h3>

                    <ul>
                      {job.responsibilities
                        .slice(0, 3)
                        .map((item) => (
                          <li key={item}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="jobs-page__actions">
                    <Link
                      href={`/rekrutacje/${job.slug}`}
                      className="jobs-page__button jobs-page__button--ghost"
                    >
                      Szczegóły
                    </Link>

                    <Link
                      href={`mailto:${job.applyEmail}?subject=${encodeURIComponent(
                        job.applySubject
                      )}`}
                      className="jobs-page__button"
                    >
                      Aplikuj
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <section className="jobs-page__empty">
              <h2>
                Aktualnie brak ofert pracy
              </h2>

              <p>
                Obecnie nie prowadzimy
                rekrutacji. Zachęcamy do
                odwiedzenia strony ponownie
                w przyszłości.
              </p>

              <a href="mailto:rekrutacja@smjelonki.pl">
                rekrutacja@smjelonki.pl
              </a>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}