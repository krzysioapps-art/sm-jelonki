import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pomoc i awarie - SM Jelonki',
    description:
        'Numery kontaktowe do konserwatorów, zgłoszeń awarii oraz telefonów alarmowych.',
};

const services = [
    {
        title: 'Hydrauliczna i gazowa',
        office: [
            'tel. (22) 370 21 54',
            'tel. (22) 370 21 72',
        ],
        afterHours: ['tel. 662 057 208'],
    },
    {
        title: 'Elektryczna',
        office: ['tel. (22) 370 21 54 lub 72'],
        afterHours: ['tel. 512 103 835'],
    },
    {
        title: 'Domofony',
        office: ['tel. (22) 370 21 54 lub 72'],
        afterHours: ['tel. 22 374 03 13'],
    },
    {
        title: 'Windy',
        office: ['tel. (22) 370 21 54'],
        afterHours: [
            'tel. (22) 641 19 16',
            'tel. (22) 643 74 75',
        ],
    },
];

const emergencyNumbers = [
    ['Telefon alarmowy', '112'],
    ['Pogotowie Ratunkowe', '999'],
    ['Policja', '997'],
    ['Straż Pożarna', '998'],
    ['Straż Miejska', '986'],
    ['Pogotowie Gazowe', '992'],
    ['Pogotowie Wodno-Kanalizacyjne', '994'],
];

const usefulContacts = [
    [
        'Komisariat Policji Warszawa Bemowo',
        '(47) 723 25 80',
    ],
    [
        'Bezpłatny odbiór elektrośmieci',
        '888 092 093',
    ],
];

export default function AwariePage() {
    return (
        <main>
            <section className="section emergency-page">
                <div className="container">
                    <header className="emergency-page__header">
                        <span className="emergency-page__eyebrow">
                            Pomoc techniczna
                        </span>

                        <h1 className="emergency-page__title">
                            Pomoc i awarie
                        </h1>

                        <p className="emergency-page__text">
                            Numery kontaktowe do zgłoszeń usterek,
                            konserwatorów, dyżurów technicznych
                            oraz telefonów alarmowych.
                        </p>
                    </header>

                    <div className="emergency-page__alert">
                        W przypadku zagrożenia życia lub mienia
                        skontaktuj się niezwłocznie z odpowiednimi
                        służbami ratunkowymi.
                    </div>

                    <div className="emergency-page__grid">
                        {services.map((service) => (
                            <article
                                key={service.title}
                                className="emergency-page__card"
                            >
                                <h2 className="emergency-page__card-title">
                                    {service.title}
                                </h2>

                                <div className="emergency-page__block">
                                    <h3>
                                        W godzinach pracy
                                        Spółdzielni
                                    </h3>

                                    <ul>
                                        {service.office.map(
                                            (item) => (
                                                <li key={item}>
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <div className="emergency-page__block">
                                    <h3>
                                        Dyżury poza godzinami
                                        pracy
                                    </h3>

                                    <ul>
                                        {service.afterHours.map(
                                            (item) => (
                                                <li key={item}>
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="emergency-page__info-grid">
                        <section className="emergency-page__footer">
                            <h2>
                                Telefony alarmowe
                            </h2>

                            <div className="emergency-page__list">
                                {emergencyNumbers.map(
                                    ([label, number]) => (
                                        <div
                                            key={label}
                                            className="emergency-page__row"
                                        >
                                            <span>
                                                {label}
                                            </span>

                                            <strong>
                                                {number}
                                            </strong>
                                        </div>
                                    )
                                )}
                            </div>
                        </section>

                        <section className="emergency-page__footer">
                            <h2>
                                Przydatne kontakty
                            </h2>

                            <div className="emergency-page__list">
                                {usefulContacts.map(
                                    ([label, number]) => (
                                        <div
                                            key={label}
                                            className="emergency-page__row"
                                        >
                                            <span>
                                                {label}
                                            </span>

                                            <strong>
                                                {number}
                                            </strong>
                                        </div>
                                    )
                                )}

                                <div className="emergency-page__row">
                                    <span>
                                        Elektrośmieci online
                                    </span>

                                    <strong>
                                        elektrosegregacja.pl
                                    </strong>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="emergency-page__footer">
                        <h2>
                            Godziny pracy administracji
                        </h2>

                        <p>
                            Poniedziałek: 8.00 – 16.00
                            <br />
                            Wtorek: 8.00 – 17.00
                            <br />
                            Środa: 8.00 – 15.00
                            <br />
                            Czwartek: 8.00 – 17.00
                            <br />
                            Piątek: 8.00 – 15.00
                        </p>
                    </section>
                </div>
            </section>
        </main>
    );
}