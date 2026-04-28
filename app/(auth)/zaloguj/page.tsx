import Link from 'next/link';
import Image from 'next/image';
import { Scale } from 'lucide-react';

export const metadata = {
    title: 'Strefa mieszkańca - SM Jelonki',
    description:
        'Logowanie do serwisu oraz szybki dostęp do e-Usług i iMieszkaniec.',
};

export default function LoginPage() {
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
                                Zaloguj się
                            </h1>

                            <p className="auth__text">
                                Uzyskaj dostęp do swojego konta oraz
                                skorzystaj z usług online dla
                                mieszkańców.
                            </p>
                        </header>

                        <div className="auth__layout">
                            <div className="auth__card">
                                <form className="auth__form">
                                    <div className="auth__field">
                                        <label htmlFor="login">
                                            Login lub adres e-mail
                                        </label>

                                        <input
                                            id="login"
                                            type="text"
                                            placeholder="Wpisz login lub e-mail"
                                        />
                                    </div>

                                    <div className="auth__field">
                                        <label htmlFor="password">
                                            Hasło
                                        </label>

                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Wpisz hasło"
                                        />
                                    </div>

                                    <label className="auth__checkbox">
                                        <input type="checkbox" />

                                        <span>
                                            Zapamiętaj mnie
                                        </span>
                                    </label>

                                    <button
                                        type="submit"
                                        className="auth__button auth__button--full"
                                    >
                                        Zaloguj się
                                    </button>
                                </form>

                                <div className="auth__footer">
                                    <Link
                                        href="/przypomnij-haslo"
                                        className="auth__link"
                                    >
                                        Nie pamiętasz hasła?
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



                            <section className="auth__external">
                                <header className="auth__external-header">
                                    <h2>
                                        Usługi i sprawy mieszkańca
                                    </h2>

                                    <p>
                                        Szybki dostęp do systemów oraz
                                        najważniejszych spraw mieszkańca.
                                    </p>
                                </header>

                                <div className="auth__external-grid">
                                    <a
                                        href="https://smjelonki.waw.pl/euslugi/Account/UserLogOn?ReturnUrl=%2feuslugi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="auth__portal"
                                    >
                                        <span className="auth__portal-logo">
                                            <Image
                                                src="https://smjelonki.waw.pl/euslugi/Content/LayoutParts/logo.png"
                                                alt="e-Usługi SM Jelonki"
                                                width={180}
                                                height={52}
                                            />
                                        </span>

                                        <span className="auth__portal-content">
                                            <span className="auth__portal-title">
                                                e-Usługi
                                            </span>

                                            <span className="auth__portal-text">
                                                Opłaty, saldo, rozliczenia
                                            </span>
                                        </span>
                                    </a>

                                    <a
                                        href="https://smjelonki.imieszkaniec.pl/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="auth__portal"
                                    >
                                        <span className="auth__portal-logo">
                                            <Image
                                                src="https://smjelonki.imieszkaniec.pl/assets/images/imieszkaniec-logo.svg"
                                                alt="iMieszkaniec"
                                                width={180}
                                                height={52}
                                            />
                                        </span>

                                        <span className="auth__portal-content">
                                            <span className="auth__portal-title">
                                                iMieszkaniec
                                            </span>

                                            <span className="auth__portal-text">
                                                Zgłoszenia i komunikacja
                                            </span>
                                        </span>
                                    </a>

                                    <a
                                        href="/windykacja"
                                        className="auth__portal"
                                    >
                                        <span className="auth__portal-logo auth__portal-logo--icon">
                                            <Scale size={34} />
                                        </span>

                                        <span className="auth__portal-content">
                                            <span className="auth__portal-title">
                                                Windykacja
                                            </span>

                                            <span className="auth__portal-text">
                                                Informacje o zadłużeniu i spłacie
                                            </span>
                                        </span>
                                    </a>

                                    <a
                                        href="https://mieszkania.uniqa24.pl/uniqa-pgi-web/sm/1f6ba7d6-a894-4def-9d1f-fc57b0e1b557"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="auth__portal"
                                    >
                                        <span className="auth__portal-logo">
                                            <Image
                                                src="/images/partners/logo-uniqa.svg"
                                                alt="Warszawa 19115"
                                                width={180}
                                                height={52}
                                            />
                                        </span>

                                        <span className="auth__portal-content">
                                            <span className="auth__portal-title">
                                                Ubezpiecz mieszkanie
                                            </span>

                                            <span className="auth__portal-text">
                                                Oferta ubezpieczenia lokalu
                                            </span>
                                        </span>
                                    </a>

                                    <a
                                        href="https://warszawa19115.pl/-/zasady-segregacji"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="auth__portal"
                                    >
                                        <span className="auth__portal-logo">
                                            <Image
                                                src="/images/partners/warszawa19115.svg"
                                                alt="Warszawa 19115"
                                                width={180}
                                                height={52}
                                            />
                                        </span>

                                        <span className="auth__portal-content">
                                            <span className="auth__portal-title">
                                                Segregacja odpadów
                                            </span>

                                            <span className="auth__portal-text">
                                                Aktualne zasady segregacji
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}