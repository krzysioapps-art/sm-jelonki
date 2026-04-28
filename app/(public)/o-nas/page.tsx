import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'O nas - SM Jelonki',
    description:
        'Poznaj Spółdzielnię Mieszkaniową Jelonki, historię osiedla, skalę działalności oraz Osiedlowy Klub Kultury.',
};

const stats = [
    { value: '5,3 tys.', label: 'członków' },
    { value: '46', label: 'budynków' },
    { value: '4480', label: 'lokali mieszkalnych' },
    { value: '175', label: 'lokali użytkowych' },
    { value: '30 ha', label: 'terenu osiedla' },
];

const values = [
    'zieleń i przestrzeń',
    'bezpieczne osiedle',
    'regularne remonty',
    'dobra komunikacja',
    'blisko szkół i usług',
    'silna społeczność',
];

const clubItems = [
    'wydarzenia lokalne',
    'warsztaty i spotkania',
    'zajęcia rekreacyjne',
    'integracja mieszkańców',
    'rozwój pasji',
    'inicjatywy sąsiedzkie',
];

export default function ONasPage() {
    return (
        <main>
            <section className="about-page">
                <div className="about-page__hero">
                    <Image
                        src="/images/about-hero.webp"
                        alt="Zielone osiedle mieszkaniowe"
                        fill
                        priority
                        className="about-page__hero-image"
                    />

                    <div className="about-page__hero-overlay" />

                    <div className="container">
                        <div className="about-page__hero-content">
                            <span className="about-page__eyebrow">
                                O nas
                            </span>

                            <h1 className="about-page__title">
                                Spółdzielnia
                                <br />
                                Mieszkaniowa Jelonki
                            </h1>

                            <p className="about-page__lead">
                                Zielone, nowoczesne i
                                przyjazne miejsce do
                                życia na warszawskim
                                Bemowie.
                            </p>
                        </div>
                    </div>
                </div>

                <section className="section">
                    <div className="container">
                        <div className="about-page__stats">
                            {stats.map((item) => (
                                <article
                                    key={item.label}
                                    className="about-page__stat"
                                >
                                    <strong>
                                        {item.value}
                                    </strong>

                                    <span>
                                        {item.label}
                                    </span>
                                </article>
                            ))}
                        </div>

                        <section className="about-page__section">
                            <div className="about-page__grid">
                                <div>
                                    <span className="about-page__label">
                                        Historia
                                    </span>

                                    <h2 className="about-page__section-title">
                                        Od lat tworzymy
                                        osiedle Jelonki
                                    </h2>

                                    <p className="about-page__text">
                                        Spółdzielnia
                                        Mieszkaniowa
                                        „Jelonki”
                                        powstała z
                                        podziału
                                        Spółdzielni
                                        Mieszkaniowej
                                        „Starówka”.
                                        Obecnie zrzesza
                                        około 5,3 tys.
                                        członków.
                                    </p>

                                    <p className="about-page__text">
                                        Zabudowa osiedla
                                        zaczęła
                                        powstawać w
                                        latach 70., a
                                        od początku jego
                                        znakiem
                                        rozpoznawczym
                                        była zieleń i
                                        przemyślana
                                        urbanistyka.
                                    </p>
                                </div>

                                <div className="about-page__image-card">
                                    <Image
                                        src="/images/about-spoldzielnia.webp"
                                        alt="Osiedle mieszkaniowe"
                                        fill
                                        className="about-page__image"
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="about-page__section">
                            <div className="about-page__grid about-page__grid--reverse">
                                <div className="about-page__image-card">
                                    <Image
                                        src="/images/klub.webp"
                                        alt="Spotkanie mieszkańców"
                                        fill
                                        className="about-page__image"
                                    />
                                </div>

                                <div>
                                    <span className="about-page__label">
                                        Społeczność
                                    </span>

                                    <h2 className="about-page__section-title">
                                        Osiedlowy Klub
                                        Kultury
                                    </h2>

                                    <p className="about-page__text">
                                        Miejsce spotkań,
                                        aktywności,
                                        wydarzeń oraz
                                        budowania więzi
                                        sąsiedzkich.
                                    </p>

                                    <div className="about-page__chips">
                                        {clubItems.map(
                                            (item) => (
                                                <span
                                                    key={
                                                        item
                                                    }
                                                >
                                                    {
                                                        item
                                                    }
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="about-page__section">
                            <span className="about-page__label">
                                Dzisiaj
                            </span>

                            <h2 className="about-page__section-title">
                                Komfortowe miejsce do
                                życia
                            </h2>

                            <p className="about-page__text about-page__text--wide">
                                Teren Spółdzielni to
                                jeden z najbardziej
                                zielonych obszarów
                                Warszawy. Mieszkańcy
                                mają dostęp do sklepów,
                                szkół, usług oraz
                                rozwiniętej komunikacji
                                miejskiej.
                            </p>

                            <div className="about-page__chips">
                                {values.map((item) => (
                                    <span
                                        key={item}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className="about-page__links">
                            <Link
                                href="/wladze"
                                className="about-page__link-card"
                            >
                                <div>
                                    <strong>
                                        Władze Spółdzielni
                                    </strong>

                                    <span>
                                        Zarząd, Rada Nadzorcza i
                                        komisje
                                    </span>
                                </div>

                                <ArrowRight
                                    size={20}
                                    className="about-page__link-icon"
                                />
                            </Link>

                            <Link
                                href="/aktualnosci"
                                className="about-page__link-card"
                            >
                                <div>
                                    <strong>
                                        Aktualności
                                    </strong>

                                    <span>
                                        Ogłoszenia i informacje
                                    </span>
                                </div>

                                <ArrowRight
                                    size={20}
                                    className="about-page__link-icon"
                                />
                            </Link>

                            <Link
                                href="/kontakt"
                                className="about-page__link-card"
                            >
                                <div>
                                    <strong>
                                        Kontakt
                                    </strong>

                                    <span>
                                        Dane biura i formularz
                                    </span>
                                </div>

                                <ArrowRight
                                    size={20}
                                    className="about-page__link-icon"
                                />
                            </Link>
                        </section>
                    </div>
                </section>
            </section>
        </main>
    );
}