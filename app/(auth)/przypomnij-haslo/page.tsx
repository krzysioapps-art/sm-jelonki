import Link from 'next/link';

export const metadata = {
    title: 'Przypomnij hasło - SM Jelonki',
    description:
        'Odzyskaj dostęp do konta mieszkańca Spółdzielni Mieszkaniowej Jelonki.',
};

export default function ForgotPasswordPage() {
    return (
        <main>
            <section className="auth section">
                <div className="container">
                    <div className="auth__wrap auth__wrap--narrow">
                        <header className="auth__header">
                            <span className="auth__eyebrow">
                                Strefa mieszkańca
                            </span>

                            <h1 className="auth__title">
                                Przypomnij hasło
                            </h1>

                            <p className="auth__text">
                                Podaj adres e-mail powiązany z kontem.
                                Wyślemy instrukcję resetu hasła.
                            </p>
                        </header>

                        <div className="auth__card">
                            <form className="auth__form">
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

                                <button
                                    type="submit"
                                    className="auth__button auth__button--full"
                                >
                                    Wyślij link resetujący
                                </button>
                            </form>

                            <div className="auth__footer">
                                <Link
                                    href="/zaloguj"
                                    className="auth__link"
                                >
                                    Wróć do logowania
                                </Link>

                                <p>
                                    Nie masz konta?
                                </p>

                                <Link
                                    href="/rejestracja"
                                    className="auth__link"
                                >
                                    Załóż konto
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}