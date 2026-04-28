import Link from 'next/link';

export const metadata = {
    title: 'Rejestracja - SM Jelonki',
    description:
        'Załóż konto mieszkańca i uzyskaj dostęp do panelu online.',
};

export default function RegisterPage() {
    return (
        <main>
            <section className="auth section">
                <div className="container">
                    <div className="auth__wrap">
                        <header className="auth__header">
                            <span className="auth__eyebrow">
                                Strefa mieszkańca
                            </span>

                            <h1 className="auth__title">
                                Załóż konto mieszkańca
                            </h1>

                            <p className="auth__text">
                                Rejestracja umożliwia dostęp do opłat,
                                zgłoszeń, dokumentów oraz komunikatów
                                administracji.
                            </p>
                        </header>

                        <div className="auth__card auth__card--wide">
                            <form className="auth__form auth__form--grid">
                                <div className="auth__field">
                                    <label htmlFor="firstName">
                                        Imię
                                    </label>

                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="Wpisz imię"
                                    />
                                </div>

                                <div className="auth__field">
                                    <label htmlFor="lastName">
                                        Nazwisko
                                    </label>

                                    <input
                                        id="lastName"
                                        type="text"
                                        placeholder="Wpisz nazwisko"
                                    />
                                </div>

                                <div className="auth__field">
                                    <label htmlFor="username">
                                        Login
                                    </label>

                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Nazwa użytkownika"
                                    />
                                </div>

                                <div className="auth__field">
                                    <label htmlFor="email">
                                        Adres e-mail
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="twoj@email.pl"
                                    />
                                </div>

                                <div className="auth__field">
                                    <label htmlFor="password">
                                        Hasło
                                    </label>

                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Utwórz hasło"
                                    />
                                </div>

                                <div className="auth__field">
                                    <label htmlFor="confirmPassword">
                                        Powtórz hasło
                                    </label>

                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Powtórz hasło"
                                    />
                                </div>

                                <div className="auth__field">
                                    <label htmlFor="pesel">
                                        8 cyfr PESEL
                                    </label>

                                    <input
                                        id="pesel"
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="XXXXXXXX"
                                    />
                                </div>

                                <div className="auth__field">
                                    <label htmlFor="flatId">
                                        ID lokalu
                                    </label>

                                    <input
                                        id="flatId"
                                        type="text"
                                        placeholder="Numer lokalu"
                                    />
                                </div>

                                <label className="auth__checkbox auth__checkbox--full">
                                    <input type="checkbox" />

                                    <span>
                                        Akceptuję{' '}
                                        <Link href="/regulamin-strony">
                                            regulamin strony
                                        </Link>
                                    </span>
                                </label>

                                <label className="auth__checkbox auth__checkbox--full">
                                    <input type="checkbox" />

                                    <span>
                                        Akceptuję{' '}
                                        <Link href="/polityka-prywatnosci">
                                            politykę prywatności
                                        </Link>
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    className="auth__button auth__button--full"
                                >
                                    Załóż konto
                                </button>
                            </form>

                            <div className="auth__footer">
                                <p>
                                    Masz już konto?
                                </p>

                                <Link
                                    href="/zaloguj"
                                    className="auth__link"
                                >
                                    Zaloguj się
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}