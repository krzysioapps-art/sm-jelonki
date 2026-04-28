import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
    MapPin,
    Briefcase,
    Building2,
    Calendar,
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    BadgeCheck,
    Gift,
    Mail,
} from 'lucide-react';

import {
    jobOffers,
    type JobOffer,
} from '@/data/jobs';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

function getOffer(slug: string): JobOffer | undefined {
    return jobOffers.find(
        (item) => item.slug === slug
    );
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params;

    const offer = getOffer(slug);

    if (!offer) {
        return {
            title: 'Oferta pracy - SM Jelonki',
        };
    }

    return {
        title: `${offer.title} - Rekrutacja - SM Jelonki`,
        description: offer.summary,
    };
}

export async function generateStaticParams() {
    return jobOffers.map((item) => ({
        slug: item.slug,
    }));
}

export default async function JobOfferPage({
    params,
}: Props) {
    const { slug } = await params;

    const offer = getOffer(slug);

    if (!offer) {
        notFound();
    }

    const applyHref = `mailto:${offer.applyEmail}?subject=${encodeURIComponent(
        offer.applySubject
    )}`;

    return (
        <main>
            <section className="section job-page">
                <div className="container">
                    <Link
                        href="/rekrutacje"
                        className="job-page__back"
                    >
                        <ArrowLeft size={16} />
                        Wróć do ofert
                    </Link>

                    <article className="job-page__card">
                        <header className="job-page__hero">
                            <div>
                                <span className="job-page__badge">
                                    {offer.publishedAt}
                                </span>

                                <h1 className="job-page__title">
                                    {offer.title}
                                </h1>

                                <p className="job-page__text">
                                    {offer.summary}
                                </p>
                            </div>

                            <a
                                href={applyHref}
                                className="job-page__apply"
                            >
                                Aplikuj teraz
                                <ArrowRight size={16} />
                            </a>
                        </header>

                        <div className="job-page__meta">
                            <div>
                                <MapPin size={18} />
                                {offer.location}
                            </div>

                            <div>
                                <Briefcase size={18} />
                                {offer.type}
                            </div>

                            <div>
                                <Building2 size={18} />
                                {offer.department}
                            </div>

                            <div>
                                <Calendar size={18} />
                                Rekrutacja trwa
                            </div>
                        </div>

                        <div className="job-page__grid">
                            <section className="job-page__section">
                                <h2>
                                    <CheckCircle2 size={18} />
                                    Zakres obowiązków
                                </h2>

                                <ul>
                                    {offer.responsibilities.map(
                                        (item) => (
                                            <li key={item}>
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </section>

                            <section className="job-page__section">
                                <h2>
                                    <BadgeCheck size={18} />
                                    Wymagania
                                </h2>

                                <ul>
                                    {offer.requirements.map(
                                        (item) => (
                                            <li key={item}>
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </section>

                            <section className="job-page__section">
                                <h2>
                                    <Gift size={18} />
                                    Oferujemy
                                </h2>

                                <ul>
                                    {offer.benefits.map(
                                        (item) => (
                                            <li key={item}>
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </section>
                        </div>

                        <footer className="job-page__footer">
                            <Mail size={18} />

                            <div>
                                <strong>
                                    Wyślij CV na adres:
                                </strong>

                                <a
                                    href={`mailto:${offer.applyEmail}`}
                                >
                                    {offer.applyEmail}
                                </a>

                                <p>
                                    Tytuł wiadomości:
                                    {offer.applySubject}
                                </p>
                            </div>
                        </footer>
                    </article>

                    {offer.gdprInfo && (
                        <section className="job-page__gdpr">
                            <h2>Klauzula informacyjna</h2>

                            <ul>
                                {offer.gdprInfo.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                </div>
            </section>

        </main>
    );
}