'use client';

import { useEffect, useRef, useState } from 'react';

import {
    Wrench,
    Briefcase,
    Building2,
    House,
    FileText,
    Shield,
    ShieldAlert,
    FileCheck,
    Scale,
    FileEdit,
    ClipboardList,
    BarChart3,
    SearchCheck,
    ShieldCheck,
    LockKeyhole,
    Droplets,
    Newspaper,
    KeyRound,
    Siren,
    Phone,
    ArrowRight,
} from 'lucide-react';

import Link from 'next/link';

import ContactForm from '@/components/forms/ContactForm';
import {
    featuredDocuments,
    categories,
    legalDocuments,
} from '@/data/documents';
import {
    featuredPost,
    newsPosts,
    type NewsPost,
} from '@/data/news';

type StatItem = {
    value: number;
    suffix?: string;
    label: string;
};

const homeStats: StatItem[] = [
    { value: 5.3, suffix: ' tys.', label: 'członków' },
    { value: 46, label: 'budynków' },
    { value: 4480, label: 'mieszkań' },
    { value: 175, label: 'lokali użytkowych' },
    { value: 30, suffix: ' ha', label: 'terenu osiedla' },
    { value: 1970, suffix: '+', label: 'historia osiedla' },
];

function CountUp({
    value,
    suffix = '',
}: {
    value: number;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return;

                started.current = true;
                observer.unobserve(el);

                const duration = 1600;
                const start = performance.now();

                const animate = (time: number) => {
                    const progress = Math.min(
                        (time - start) / duration,
                        1
                    );

                    const eased =
                        1 - Math.pow(1 - progress, 3);

                    setCount(value * eased);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        setCount(value);
                    }
                };

                requestAnimationFrame(animate);
            },
            { threshold: 0.35 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [value]);

    const display =
        value % 1 !== 0
            ? count.toFixed(1).replace('.', ',')
            : Math.round(count).toString();

    return (
        <span
            ref={ref}
            className="home-about__count"
        >
            {display}
            {suffix}
        </span>
    );
}

function getCategoryClass(
    category: NewsPost['category']
) {
    switch (category) {
        case 'Awarie':
            return 'is-red';
        case 'Remonty':
            return 'is-yellow';
        case 'Ważne':
            return 'is-dark';
        case 'Komunikaty':
            return 'is-blue';
        case 'Osiedle':
            return 'is-green';
        case 'Wydarzenia':
            return 'is-purple';
        case 'Finanse':
            return 'is-teal';
        default:
            return 'is-gray';
    }
}

export default function HomePage() {
    return (
        <main>
            <section className="hero hero--image">
                <div className="container">
                    <div className="hero__inner">
                        <div className="hero__content">
                            <span className="hero__badge">
                                Oficjalny serwis mieszkańców
                            </span>

                            <h1 className="hero__title">
                                Spółdzielnia
                                <br />
                                Mieszkaniowa{' '}
                                <span className="hero__title-accent">
                                    Jelonki
                                </span>
                            </h1>

                            <p className="hero__text">
                                Wszystkie najważniejsze sprawy
                                mieszkańca w jednym miejscu:
                                aktualności, dokumenty, kontakt,
                                zgłoszenia i wygodny dostęp online.
                            </p>

                            <div className="hero__actions">
                                <Link
                                    href="/zaloguj"
                                    className="hero__button hero__button--primary"
                                >
                                    Strefa mieszkańca
                                </Link>

                                <Link
                                    href="/aktualnosci"
                                    className="hero__button hero__button--secondary"
                                >
                                    Aktualności
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="quick-access section">
                <div className="container">
                    <div className="quick-access__header">
                        <span className="quick-access__eyebrow">
                            Dla mieszkańców
                        </span>

                        <h2 className="quick-access__title">
                            Załatw najważniejsze sprawy online
                        </h2>

                        <p className="quick-access__text">
                            Szybki dostęp do dokumentów, kontaktu,
                            zgłoszeń awarii oraz najczęściej
                            wybieranych usług mieszkańców.
                        </p>
                    </div>

                    <div className="quick-access__grid">
                        <a
                            href="/pomoc-i-awarie"
                            className="quick-access__card quick-access__card--alert"
                        >
                            <div className="quick-access__icon">
                                <Siren size={20} strokeWidth={1.8} />
                            </div>

                            <h3 className="quick-access__card-title">
                                Pomoc i awarie
                            </h3>

                            <span className="quick-access__card-meta">
                                Zgłoś problem
                            </span>
                        </a>

                        <a
                            href="/dokumenty"
                            className="quick-access__card"
                        >
                            <div className="quick-access__icon">
                                <FileText size={20} strokeWidth={1.8} />
                            </div>

                            <h3 className="quick-access__card-title">
                                Dokumenty
                            </h3>

                            <span className="quick-access__card-meta">
                                Formularze i pliki
                            </span>
                        </a>

                        <a
                            href="/kontakt"
                            className="quick-access__card"
                        >
                            <div className="quick-access__icon">
                                <Phone size={20} strokeWidth={1.8} />
                            </div>

                            <h3 className="quick-access__card-title">
                                Kontakt
                            </h3>

                            <span className="quick-access__card-meta">
                                Dane i formularz
                            </span>
                        </a>

                        <a
                            href="/zaloguj"
                            className="quick-access__card"
                        >
                            <div className="quick-access__icon">
                                <LockKeyhole size={20} strokeWidth={1.8} />
                            </div>

                            <h3 className="quick-access__card-title">
                                Strefa mieszkańca
                            </h3>

                            <span className="quick-access__card-meta">
                                Logowanie
                            </span>
                        </a>

                        <a
                            href="/aktualnosci"
                            className="quick-access__card"
                        >
                            <div className="quick-access__icon">
                                <Newspaper size={20} strokeWidth={1.8} />
                            </div>

                            <h3 className="quick-access__card-title">
                                Aktualności
                            </h3>

                            <span className="quick-access__card-meta">
                                Komunikaty i newsy
                            </span>
                        </a>

                        <a
                            href="/wynajem"
                            className="quick-access__card"
                        >
                            <div className="quick-access__icon">
                                <KeyRound size={20} strokeWidth={1.8} />
                            </div>

                            <h3 className="quick-access__card-title">
                                Wynajem lokali
                            </h3>

                            <span className="quick-access__card-meta">
                                Lokale i parkingi
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="home-news section">
                <div className="container">
                    <div className="home-news__header">
                        <span className="home-news__eyebrow">
                            Aktualności
                        </span>

                        <h2 className="home-news__title">
                            Najnowsze informacje
                        </h2>

                        <p className="home-news__text">
                            Sprawdź bieżące komunikaty, remonty,
                            wydarzenia i ważne informacje dla
                            mieszkańców.
                        </p>
                    </div>

                    <div className="home-news__grid">
                        {[featuredPost, ...newsPosts]
                            .slice(0, 3)
                            .map((post) => (
                                <article
                                    key={post.id}
                                    className="home-news__card"
                                >
                                    <div className="home-news__meta">
                                        <span className="home-news__date">
                                            {post.date}
                                        </span>

                                        <span
                                            className={`home-news__tag ${getCategoryClass(
                                                post.category
                                            )}`}
                                        >
                                            {post.category}
                                        </span>
                                    </div>

                                    <h3 className="home-news__card-title">
                                        {post.title}
                                    </h3>

                                    <p className="home-news__excerpt">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/aktualnosci?news=${post.id}`}
                                        scroll={false}
                                        className="home-news__link"
                                    >
                                        Czytaj więcej
                                        <ArrowRight size={16} />
                                    </Link>
                                </article>
                            ))}
                    </div>

                    <div className="home-news__actions">
                        <Link
                            href="/aktualnosci"
                            className="home-news__button"
                        >
                            Zobacz wszystkie aktualności
                        </Link>
                    </div>
                </div>
            </section>



            <section className="home-docs section">
                <div className="container">
                    <div className="home-docs__header">
                        <span className="home-docs__eyebrow">
                            Dokumenty
                        </span>

                        <h2 className="home-docs__title">
                            Najważniejsze dokumenty
                            <br />
                            w jednym miejscu
                        </h2>

                        <p className="home-docs__text">
                            Szybki dostęp do najczęściej
                            wyszukiwanych dokumentów,
                            formularzy oraz materiałów
                            informacyjnych dla mieszkańców.
                        </p>
                    </div>

                    <div className="home-docs__grid">
                        {featuredDocuments
                            .slice(0, 3)
                            .map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="home-docs__card"
                                >
                                    <div className="home-docs__card-top">
                                        <span className="home-docs__pill">
                                            Dokument
                                        </span>
                                    </div>

                                    <h3 className="home-docs__card-title">
                                        {item.title}
                                    </h3>

                                    <p className="home-docs__card-text">
                                        {item.description}
                                    </p>

                                    <span className="home-docs__card-link">
                                        Otwórz
                                        <ArrowRight
                                            size={16}
                                        />
                                    </span>
                                </Link>
                            ))}
                    </div>

                    <div className="home-docs__actions">
                        <Link
                            href="/dokumenty"
                            className="home-docs__button"
                        >
                            Zobacz wszystkie dokumenty
                        </Link>
                    </div>
                </div>
            </section>



            <section className="home-about section">
                <div className="container">
                    <div className="home-about__grid">
                        <div className="home-about__content">
                            <span className="home-about__eyebrow">
                                O spółdzielni
                            </span>

                            <h2 className="home-about__title">
                                Tworzymy osiedle Jelonki od lat
                            </h2>

                            <p className="home-about__text">
                                Spółdzielnia Mieszkaniowa Jelonki to
                                nowoczesne i zielone osiedle na
                                warszawskim Bemowie.
                            </p>

                            <p className="home-about__text">
                                Zarządzamy budynkami, rozwijamy
                                infrastrukturę i wspieramy lokalną
                                społeczność mieszkańców.
                            </p>

                            <div className="home-about__chips">
                                <span>zielone osiedle</span>
                                <span>Bemowo</span>
                                <span>klub kultury</span>
                                <span>dobra komunikacja</span>
                            </div>

                            <Link
                                href="/o-nas"
                                className="home-about__button"
                            >
                                Poznaj spółdzielnię
                            </Link>
                        </div>

                        <div className="home-about__stats">
                            {homeStats.map((item) => (
                                <article
                                    key={item.label}
                                    className="home-about__stat"
                                >
                                    <strong>
                                        <CountUp
                                            value={item.value}
                                            suffix={item.suffix}
                                        />
                                    </strong>

                                    <span>{item.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            <section className="home-contact section">
                <div className="container">
                    <div className="home-contact__grid">
                        <div className="home-contact__content">
                            <span className="home-contact__eyebrow">
                                Kontakt
                            </span>

                            <h2 className="home-contact__title">
                                Jesteśmy do Twojej dyspozycji
                            </h2>

                            <p className="home-contact__text">
                                Skontaktuj się z administracją
                                Spółdzielni Mieszkaniowej Jelonki.
                                Chętnie pomożemy w sprawach
                                mieszkańców, dokumentów oraz
                                bieżących zgłoszeń.
                            </p>

                            <div className="home-contact__list">
                                <div className="home-contact__item">
                                    <strong>Adres</strong>
                                    <span>
                                        ul. Powstańców Śląskich 4A
                                        <br />
                                        01-381 Warszawa
                                    </span>
                                </div>

                                <div className="home-contact__item">
                                    <strong>Telefon</strong>
                                    <a href="tel:+48226002900">
                                        +48 22 600 29 00
                                    </a>
                                </div>

                                <div className="home-contact__item">
                                    <strong>E-mail</strong>
                                    <a href="mailto:sekretariat@smjelonki.pl">
                                        sekretariat@smjelonki.pl
                                    </a>
                                </div>
                            </div>

                            <div className="home-contact__actions">
                                <Link
                                    href="/kontakt"
                                    className="home-contact__button"
                                >
                                    Strona kontaktowa
                                </Link>

                                <Link
                                    href="/zaloguj"
                                    className="home-contact__button home-contact__button--ghost"
                                >
                                    Strefa mieszkańca
                                </Link>
                            </div>
                        </div>

                        <div className="home-contact__map">
                            <iframe
                                title="Mapa SM Jelonki"
                                src="https://www.google.com/maps?q=Powstańców+Śląskich+4A+Warszawa&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>




            <section className="resident-cta section">
                <div className="container">
                    <div className="resident-cta__card">
                        <div className="resident-cta__content">
                            <span className="resident-cta__eyebrow">
                                Strefa mieszkańca
                            </span>

                            <h2 className="resident-cta__title">
                                Zarządzaj swoimi sprawami online
                            </h2>

                            <p className="resident-cta__text">
                                Uzyskaj szybki dostęp do opłat,
                                dokumentów, zgłoszeń oraz
                                najważniejszych informacji
                                dotyczących Twojego lokalu.
                            </p>

                            <div className="resident-cta__features">
                                <span>opłaty online</span>
                                <span>dokumenty 24/7</span>
                                <span>zgłoszenia awarii</span>
                                <span>historia spraw</span>
                            </div>
                        </div>

                        <div className="resident-cta__actions">
                            <Link
                                href="/zaloguj"
                                className="resident-cta__button"
                            >
                                Zaloguj się
                            </Link>

                            <Link
                                href="/rejestracja"
                                className="resident-cta__button resident-cta__button--ghost"
                            >
                                Załóż konto
                            </Link>
                        </div>
                    </div>
                </div>
            </section>



        </main>
    );
}