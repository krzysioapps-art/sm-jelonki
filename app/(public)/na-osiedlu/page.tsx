import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Accordion, {
    type AccordionItem,
} from '@/components/ui/Accordion';

import ImageGallery from '@/components/ui/ImageGallery';

import {
    recreation,
    services,
    maps,
    formal,
} from '@/data/neighborhood';

import {
    Trees,
    Store,
    MapPinned,
    FileText,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Na osiedlu - SM Jelonki',
    description:
        'Najważniejsze miejsca, usługi, rekreacja i udogodnienia na terenie Spółdzielni Mieszkaniowej Jelonki.',
};

type Group = {
    title: string;
    count: number;
    locations: {
        name: string;
        images: {
            src: string;
            alt: string;
        }[];
    }[];
};

function AccordionSection({
    id,
    eyebrow,
    title,
    groups,
}: {
    id: string;
    eyebrow: string;
    title: string;
    groups: Group[];
}) {
    const items: AccordionItem[] =
        groups.map((group) => ({
            id: `${id}-${group.title
                .toLowerCase()
                .replace(/\s+/g, '-')}`,

            title: (
                <>
                    <span>
                        {group.title}
                    </span>

                    <span className="neighborhood-page__count">
                        {group.count}
                    </span>
                </>
            ),

            content: (
                <div>
                    {group.locations.map(
                        (
                            location
                        ) => (
                            <article
                                key={
                                    location.name
                                }
                                className="neighborhood-page__location"
                            >
                                <h3 className="neighborhood-page__location-title">
                                    {
                                        location.name
                                    }
                                </h3>

                                {location
                                    .images
                                    .length >
                                    0 && (
                                        <ImageGallery
                                            images={
                                                location.images
                                            }
                                            columns={
                                                3
                                            }
                                            aspect="landscape"
                                        />
                                    )}
                            </article>
                        )
                    )}
                </div>
            ),
        }));

    return (
        <section
            id={id}
            className="neighborhood-page__section"
        >
            <div className="neighborhood-page__section-head">
                <span>{eyebrow}</span>
                <h2>{title}</h2>
            </div>

            <Accordion
                items={items}
                singleOpen={false}
                className="neighborhood-page__accordion"
            />
        </section>
    );
}

export default function NaOsiedluPage() {
    return (
        <main>
            <section className="section neighborhood-page">
                <div className="container">
                    <header className="neighborhood-page__hero">
                        <span className="neighborhood-page__eyebrow">
                            Na osiedlu
                        </span>

                        <h1 className="neighborhood-page__title">
                            Wszystko w jednym miejscu
                        </h1>

                        <p className="neighborhood-page__text">
                            Najważniejsze miejsca,
                            udogodnienia,
                            rekreacja oraz
                            praktyczne
                            informacje dla
                            mieszkańców SM
                            Jelonki.
                        </p>
                    </header>

                    <nav className="neighborhood-page__quicknav">
                        <a href="#rekreacja">
                            <Trees size={20} />
                            <span>Rekreacja</span>
                        </a>

                        <a href="#uslugi">
                            <Store size={20} />
                            <span>Usługi</span>
                        </a>

                        <a href="#mapa">
                            <MapPinned size={20} />
                            <span>Mapa osiedla</span>
                        </a>

                        <a href="#formalnosci">
                            <FileText size={20} />
                            <span>
                                Informacje formalne
                            </span>
                        </a>
                    </nav>

                    <AccordionSection
                        id="rekreacja"
                        eyebrow="Aktywnie"
                        title="Rekreacja"
                        groups={
                            recreation
                        }
                    />

                    <AccordionSection
                        id="uslugi"
                        eyebrow="Codzienność"
                        title="Usługi i wygoda"
                        groups={
                            services
                        }
                    />

                    <section
                        id="mapa"
                        className="neighborhood-page__section"
                    >
                        <div className="neighborhood-page__section-head">
                            <span>
                                Lokalizacje
                            </span>

                            <h2>
                                Mapa osiedla
                            </h2>
                        </div>

                        <div className="neighborhood-page__map">
                            <div className="neighborhood-page__map-image">
                                <Image
                                    src="/images/mapa-jelonki.webp"
                                    alt="Mapa osiedla"
                                    fill
                                    className="neighborhood-page__image"
                                />
                            </div>

                            <div className="neighborhood-page__card">
                                <ul className="neighborhood-page__list">
                                    {maps.map(
                                        (
                                            item
                                        ) => (
                                            <li
                                                key={
                                                    item
                                                }
                                            >
                                                {
                                                    item
                                                }
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section
                        id="formalnosci"
                        className="neighborhood-page__section"
                    >
                        <div className="neighborhood-page__section-head">
                            <span>
                                Dokumenty
                            </span>

                            <h2>
                                Informacje formalne
                            </h2>
                        </div>

                        <div className="neighborhood-page__card">
                            <ul className="neighborhood-page__list">
                                {formal.map(
                                    (
                                        item
                                    ) => (
                                        <li
                                            key={
                                                item
                                            }
                                        >
                                            {
                                                item
                                            }
                                        </li>
                                    )
                                )}
                            </ul>

                            <Link
                                href="/dokumenty"
                                className="neighborhood-page__button"
                            >
                                Przejdź do dokumentów
                            </Link>
                        </div>
                    </section>

                    <section className="neighborhood-page__cta">
                        <h2>
                            Nie znalazłeś
                            potrzebnych
                            informacji?
                        </h2>

                        <p>
                            Skontaktuj się z
                            nami lub sprawdź
                            sekcję pomocy
                            technicznej.
                        </p>

                        <div className="neighborhood-page__cta-actions">
                            <Link
                                href="/kontakt"
                                className="neighborhood-page__button"
                            >
                                Kontakt
                            </Link>

                            <Link
                                href="/pomoc-i-awarie"
                                className="neighborhood-page__button neighborhood-page__button--ghost"
                            >
                                Pomoc i awarie
                            </Link>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}