import type { Metadata } from 'next';
import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
    title: 'Władze Spółdzielni - SM Jelonki',
    description:
        'Zarząd, Rada Nadzorcza, komisje oraz dyżury władz Spółdzielni Mieszkaniowej Jelonki.',
};

const board = [
    {
        name: 'Radosław Pucek',
        role: 'Prezes Zarządu',
    },
    {
        name: 'Jan Kozłowski',
        role: 'Zastępca Prezesa Zarządu',
    },
];

const council = [
    'Agnieszka Grabicka',
    'Paweł Górski',
    'Bożena Kula',
    'Bożenna Szydziak',
    'Andrzej Kowalski',
    'Dominika Ogonowska',
    'Małgorzata Koczara',
    'Joanna Orzechowska',
    'Karina Jankowicz-Krasuska',
    'Michał Kamorski',
    'Andrzej Kowalak',
    'Magdalena Kozińska',
    'Robert Bajster',
    'Maciej Pełczyński',
    'Elżbieta Lipka',
];

const presidium = [
    'Agnieszka Grabicka – Przewodnicząca',
    'Paweł Górski – Zastępca Przewodniczącej',
    'Bożena Kula – Sekretarz',
    'Robert Bajster – Komisja Rewizyjna',
    'Małgorzata Koczara – Komisja Prawno-Organizacyjna',
    'Dominika Ogonowska – Komisja Regulacji Gruntów',
    'Andrzej Kowalski – Komisja Techniczno-Ekonomiczna',
];

const committees = [
    {
        title: 'Komisja Rewizyjna',
        members: [
            'Robert Bajster',
            'Agnieszka Grabicka',
            'Paweł Górski',
            'Michał Kamorski',
            'Dominika Ogonowska',
        ],
    },
    {
        title: 'Komisja Prawno-Organizacyjna',
        members: [
            'Małgorzata Koczara',
            'Bożena Kula',
            'Magdalena Kozińska',
            'Paweł Górski',
            'Bożenna Szydziak',
        ],
    },
    {
        title:
            'Komisja Regulacji Gruntów i Gospodarki Lokalami',
        members: [
            'Dominika Ogonowska',
            'Elżbieta Lipka',
            'Magdalena Kozińska',
            'Bożena Kula',
            'Małgorzata Koczara',
            'Andrzej Kowalski',
            'Andrzej Kowalak',
            'Karina Jankowicz-Krasuska',
            'Joanna Orzechowska',
        ],
    },
    {
        title: 'Komisja Techniczno-Ekonomiczna',
        members: [
            'Andrzej Kowalski',
            'Michał Kamorski',
            'Robert Bajster',
            'Agnieszka Grabicka',
            'Maciej Pełczyński',
            'Joanna Orzechowska',
            'Bożenna Szydziak',
            'Andrzej Kowalak',
            'Karina Jankowicz-Krasuska',
        ],
    },
];

export default function WladzePage() {
    return (
        <main>
            <section className="section authorities-page">
                <div className="container">
                    <header className="authorities-page__header">
                        <span className="authorities-page__eyebrow">
                            O nas
                        </span>

                        <h1 className="authorities-page__title">
                            Władze Spółdzielni
                        </h1>

                        <p className="authorities-page__text">
                            Informacje o Zarządzie, Radzie
                            Nadzorczej, komisjach oraz
                            dyżurach członków władz
                            Spółdzielni Mieszkaniowej
                            Jelonki.
                        </p>
                    </header>

                    <section className="authorities-page__section">
                        <h2 className="authorities-page__section-title">
                            Zarząd
                        </h2>

                        <div className="authorities-page__board">
                            {board.map((item) => (
                                <article
                                    key={item.name}
                                    className="authorities-page__person-card"
                                >
                                    <h3>{item.name}</h3>
                                    <p>{item.role}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="authorities-page__section">
                        <div className="authorities-page__section-head">
                            <h2 className="authorities-page__section-title">
                                Rada Nadzorcza
                            </h2>

                            <p className="authorities-page__meta">
                                Kadencja 2023–2026
                            </p>
                        </div>

                        <div className="authorities-page__names">
                            {council.map((name) => (
                                <div
                                    key={name}
                                    className="authorities-page__name"
                                >
                                    {name}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="authorities-page__section">
                        <h2 className="authorities-page__section-title">
                            Prezydium
                        </h2>

                        <div className="authorities-page__simple-list">
                            {presidium.map((item) => (
                                <div
                                    key={item}
                                    className="authorities-page__list-row"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="authorities-page__section">
                        <h2 className="authorities-page__section-title">
                            Komisje
                        </h2>

                        <div className="authorities-page__committees">
                            <Accordion
                                className="authorities-page__committee"
                                items={committees.map((committee) => ({
                                    id: committee.title,
                                    title: committee.title,
                                    content: (
                                        <ul>
                                            {committee.members.map(
                                                (member) => (
                                                    <li key={member}>
                                                        {member}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ),
                                }))}
                                singleOpen={false}
                            />
                        </div>
                    </section>

                    <section className="authorities-page__section authorities-page__highlight">
                        <h2 className="authorities-page__section-title">
                            Dyżury członków Rady Nadzorczej
                        </h2>

                        <p>
                            Drugi poniedziałek każdego
                            miesiąca, godz.
                            <strong>
                                {' '}
                                17:30–19:30
                            </strong>
                            .
                        </p>

                        <p>
                            Umawianie spotkań:
                            <strong>
                                {' '}
                                22 600 29 00
                            </strong>
                        </p>
                    </section>
                </div>
            </section>
        </main>
    );
}