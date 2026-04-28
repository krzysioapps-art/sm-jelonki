import LegalDocument from "@/components/legal/LegalDocument";

export const metadata = {
    title: "Polityka prywatności | SM JELONKI",
    description:
        "Zasady przetwarzania danych osobowych użytkowników strony internetowej Spółdzielni Mieszkaniowej JELONKI.",
};

export default function PrivacyPolicyPage() {
    return (
        <main>
            <LegalDocument
                title="Polityka prywatności"
                updatedAt="26.04.2026"
                version="1.0"
            >
                <h2>1. Informacje ogólne</h2>

                <p>
                    Niniejsza Polityka prywatności określa zasady przetwarzania
                    danych osobowych użytkowników korzystających ze strony
                    internetowej Spółdzielni Mieszkaniowej „JELONKI”, dostępnej pod
                    adresem smjelonki.pl.
                </p>

                <p>
                    Administrator dokłada szczególnej staranności w celu ochrony
                    prywatności użytkowników oraz zapewnienia zgodności
                    przetwarzania danych z obowiązującymi przepisami prawa, w
                    szczególności z RODO.
                </p>

                <h2>2. Administrator danych</h2>

                <p>
                    Spółdzielnia Mieszkaniowa „JELONKI”
                    <br />
                    ul. Powstańców Śląskich 4A
                    <br />
                    01-381 Warszawa
                </p>

                <p>
                    tel. 22 600 29 00
                    <br />
                    e-mail: sekretariat@smjelonki.pl
                </p>

                <p>
                    W sprawach ochrony danych osobowych:
                    <br />
                    e-mail: iod@smjelonki.pl
                </p>

                <h2>3. Cele przetwarzania danych</h2>

                <ul>
                    <li>obsługa formularza kontaktowego,</li>
                    <li>udzielanie odpowiedzi na wiadomości,</li>
                    <li>realizacja obowiązków prawnych administratora,</li>
                    <li>prowadzenie komunikacji z mieszkańcami,</li>
                    <li>zapewnienie bezpieczeństwa serwisu,</li>
                    <li>prowadzenie statystyk po uzyskaniu zgody.</li>
                </ul>

                <h2>4. Podstawy prawne</h2>

                <ul>
                    <li>art. 6 ust. 1 lit. a RODO – zgoda,</li>
                    <li>art. 6 ust. 1 lit. b RODO – wykonanie umowy,</li>
                    <li>art. 6 ust. 1 lit. c RODO – obowiązek prawny,</li>
                    <li>
                        art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes.
                    </li>
                </ul>

                <h2>5. Prawa użytkownika</h2>

                <ul>
                    <li>prawo dostępu do danych,</li>
                    <li>prawo sprostowania danych,</li>
                    <li>prawo usunięcia danych,</li>
                    <li>prawo ograniczenia przetwarzania,</li>
                    <li>prawo sprzeciwu,</li>
                    <li>prawo cofnięcia zgody,</li>
                    <li>prawo wniesienia skargi do PUODO.</li>
                </ul>

                <h2>6. Kontakt</h2>

                <p>
                    iod@smjelonki.pl
                    <br />
                    sekretariat@smjelonki.pl
                </p>
            </LegalDocument>
        </main>
    );
}