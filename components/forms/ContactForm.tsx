'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

type StatusType = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
    const [status, setStatus] = useState<StatusType>('idle');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setStatus('loading');

        setTimeout(() => {
            setStatus('success');
            (e.currentTarget as HTMLFormElement).reset();
        }, 1000);
    }

    return (
        <form
            className="contact-section__form"
            onSubmit={handleSubmit}
        >
            <div className="contact-section__field">
                <label htmlFor="topic">Wybierz temat wiadomości</label>

                <select id="topic" name="topic" required>
                    <option value="">Wybierz temat</option>
                    <option value="administracja">
                        Sprawy administracyjne
                    </option>
                    <option value="oplata">
                        Czynsz / opłaty
                    </option>
                    <option value="dokumenty">
                        Dokumenty
                    </option>
                    <option value="usterka">
                        Usterka techniczna
                    </option>
                    <option value="ebok">eBOK</option>
                    <option value="lokale">
                        Lokale użytkowe
                    </option>
                    <option value="inne">Inne</option>
                </select>
            </div>

            <div className="contact-section__field">
                <label htmlFor="name">
                    Imię i nazwisko
                </label>

                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jan Kowalski"
                    required
                />
            </div>

            <div className="contact-section__field">
                <label htmlFor="email">
                    Adres e-mail
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jan@email.pl"
                    required
                />
            </div>

            <div className="contact-section__field">
                <label htmlFor="phone">
                    Numer telefonu
                </label>

                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Opcjonalnie"
                />
            </div>

            <div className="contact-section__field">
                <label htmlFor="message">
                    Treść wiadomości
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="contact-section__textarea"
                    placeholder="Wpisz treść wiadomości..."
                    required
                />
            </div>

            <label className="contact-section__checkbox">
                <input
                    type="checkbox"
                    required
                />

                <span>
                    Zapoznałem się z{' '}
                    <Link href="/rodo/formularz-kontaktowy">
                        informacją o przetwarzaniu danych osobowych
                    </Link>.
                </span>
            </label>

            {status === 'success' && (
                <p className="contact-section__success">
                    Wiadomość została wysłana.
                </p>
            )}

            {status === 'error' && (
                <p className="contact-section__error">
                    Wystąpił błąd. Spróbuj ponownie.
                </p>
            )}

            <button
                type="submit"
                className="contact-section__button"
                disabled={status === 'loading'}
            >
                {status === 'loading'
                    ? 'Wysyłanie...'
                    : 'Wyślij wiadomość'}
            </button>
        </form>
    );
}