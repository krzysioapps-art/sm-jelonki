import type { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';
import { contactData } from '@/data/contact';

export const metadata: Metadata = {
    title: 'Kontakt - SM Jelonki',
    description: 'Kontakt do Spółdzielni Mieszkaniowej Jelonki.',
};

const officeHours = [
    ['poniedziałek', '8.00 – 16.00'],
    ['wtorek', '8.00 – 17.00'],
    ['środa', '8.00 – 15.00'],
    ['czwartek', '8.00 – 17.00'],
    ['piątek', '8.00 – 15.00'],
];

const residentDeskHours = [
    ['poniedziałek', '8.15 – 16.00'],
    ['wtorek', '8.15 – 17.00'],
    ['środa', '8.15 – 15.00'],
    ['czwartek', '8.15 – 17.00'],
    ['piątek', '8.15 – 15.00'],
];

export default function KontaktPage() {
    return (
        <main>
            <section className="section">
                <div className="container">
                    <header className="contact-page__header">
                        <span className="contact-page__eyebrow">
                            Kontakt
                        </span>

                        <h1 className="contact-page__title">
                            Skontaktuj się z nami
                        </h1>

                        <p className="contact-page__text">
                            Dane kontaktowe, godziny pracy oraz formularz
                            wiadomości.
                        </p>
                    </header>

                    <div className="contact-page__grid">
                        <aside className="contact-section__form-wrap">
                            <div className="contact-page__group">
                                <h2>{contactData.nazwa}</h2>

                                <p>
                                    {contactData.adres.ulica}
                                    <br />
                                    {contactData.adres.kod_pocztowy}{' '}
                                    {contactData.adres.miasto}
                                </p>
                            </div>

                            <div className="contact-page__group">
                                <h3>Biuro</h3>

                                <p>
                                    Tel:{' '}
                                    <a href="tel:+48226002900">
                                        {contactData.kontakt_glowny.telefon}
                                    </a>
                                </p>

                                <p>
                                    E-mail:{' '}
                                    <a href="mailto:sekretariat@smjelonki.pl">
                                        {contactData.kontakt_glowny.email}
                                    </a>
                                </p>

                                <p>
                                    Punkt Obsługi:{' '}
                                    <a href="mailto:pom@smjelonki.pl">
                                        {contactData.email_ogolny}
                                    </a>
                                </p>
                            </div>

                            <div className="contact-page__group">
                                <h3>Awarie</h3>
                                <p>Hydrauliczne 24h: 662 057 208</p>
                                <p>Ciepłownicze: 993</p>
                            </div>

                            <div className="contact-page__group">
                                <h3>Pozostałe</h3>
                                <p>IOD: iod@smjelonki.pl</p>
                                <p>Informatyk: informatyk@smjelonki.pl</p>
                            </div>
                        </aside>

                        <div className="contact-section__form-wrap">
                            <ContactForm />
                        </div>
                    </div>

                    <div className="contact-page__emergency">
                        <div className="contact-page__emergency-card">
                            <div className="contact-page__emergency-top">
                                <span className="contact-page__emergency-eyebrow">
                                    Pomoc techniczna
                                </span>

                                <h2 className="contact-page__emergency-title">
                                    Awarie i konserwatorzy
                                </h2>

                                <p className="contact-page__emergency-text">
                                    Najważniejsze numery kontaktowe do zgłoszeń
                                    technicznych oraz dyżurów po godzinach pracy.
                                </p>
                            </div>

                            <div className="contact-page__emergency-list">
                                <div className="contact-page__emergency-row">
                                    <span>Hydrauliczne 24h</span>
                                    <strong>662 057 208</strong>
                                </div>

                                <div className="contact-page__emergency-row">
                                    <span>Elektryczne po godzinach</span>
                                    <strong>512 103 835</strong>
                                </div>

                                <div className="contact-page__emergency-row">
                                    <span>Domofony całodobowo</span>
                                    <strong>22 374 03 13</strong>
                                </div>

                                <div className="contact-page__emergency-row">
                                    <span>Windy całodobowo</span>
                                    <strong>22 641 19 16</strong>
                                </div>
                            </div>

                            <a
                                href="/pomoc-i-awarie"
                                className="contact-page__emergency-button"
                            >
                                Zobacz pełną listę numerów
                            </a>
                        </div>
                    </div>

                    <div className="contact-page__hours">
                        <div className="contact-page__hours-card">
                            <h2 className="contact-page__hours-title">
                                Godziny pracy Spółdzielni
                            </h2>

                            <div className="contact-page__hours-list">
                                {officeHours.map(([day, time]) => (
                                    <div
                                        key={day}
                                        className="contact-page__hours-row"
                                    >
                                        <span>{day}</span>
                                        <strong>{time}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="contact-page__hours-card">
                            <h2 className="contact-page__hours-title">
                                Punkt Obsługi Mieszkańca
                            </h2>

                            <div className="contact-page__hours-list">
                                {residentDeskHours.map(([day, time]) => (
                                    <div
                                        key={day}
                                        className="contact-page__hours-row"
                                    >
                                        <span>{day}</span>
                                        <strong>{time}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="contact-page__hours-card">
                            <h2 className="contact-page__hours-title">
                                Przyjęcia Interesantów
                            </h2>

                            <div className="contact-page__hours-list">
                                <div className="contact-page__hours-row">
                                    <span>Prezes Zarządu</span>
                                    <strong>wtorek 15.00 – 17.00</strong>
                                </div>

                                <div className="contact-page__hours-row">
                                    <span>Zastępca Prezesa</span>
                                    <strong>czwartek 15.00 – 17.00</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}