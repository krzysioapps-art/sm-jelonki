import LegalDocument from "@/components/legal/LegalDocument";

export const metadata = {
    title: "Regulamin strony | SM JELONKI",
    description:
        "Regulamin korzystania ze strony internetowej Spółdzielni Mieszkaniowej JELONKI.",
};

export default function TermsPage() {
    return (
        <main>
            <LegalDocument
                title="Regulamin strony internetowej"
                updatedAt="26.04.2026"
                version="1.0"
            >
                <h2>1. Postanowienia ogólne</h2>

                <p>
                    Regulamin określa zasady korzystania ze strony internetowej
                    smjelonki.pl prowadzonej przez Spółdzielnię Mieszkaniową
                    „JELONKI”.
                </p>

                <h2>2. Funkcje strony</h2>

                <ul>
                    <li>publikacja informacji spółdzielni,</li>
                    <li>kontakt z administracją,</li>
                    <li>udostępnianie dokumentów,</li>
                    <li>przekierowanie do eBOK,</li>
                    <li>zgłaszanie usterek,</li>
                    <li>zapisy do newslettera.</li>
                </ul>

                <h2>3. Zasady korzystania</h2>

                <p>
                    Użytkownik zobowiązuje się korzystać ze strony zgodnie z prawem,
                    dobrymi obyczajami oraz w sposób nienaruszający praw innych
                    osób.
                </p>

                <p>Zabronione jest w szczególności:</p>

                <ul>
                    <li>dostarczanie treści bezprawnych,</li>
                    <li>próby naruszenia bezpieczeństwa serwisu,</li>
                    <li>zakłócanie działania strony,</li>
                    <li>podszywanie się pod inne osoby.</li>
                </ul>

                <h2>4. Dostępność serwisu</h2>

                <p>
                    Administrator dokłada starań, aby strona działała nieprzerwanie,
                    jednak zastrzega możliwość przerw technicznych, aktualizacji lub
                    modernizacji.
                </p>

                <h2>5. Odpowiedzialność</h2>

                <p>
                    Treści publikowane na stronie mają charakter informacyjny, chyba
                    że wyraźnie wskazano inaczej.
                </p>

                <h2>6. Linki zewnętrzne</h2>

                <p>
                    Strona może zawierać odnośniki do serwisów zewnętrznych.
                    Administrator nie odpowiada za ich treść ani polityki
                    prywatności.
                </p>

                <h2>7. Własność intelektualna</h2>

                <p>
                    Elementy strony, w tym treści, grafiki, logo i układ, podlegają
                    ochronie prawnej.
                </p>

                <h2>8. Kontakt</h2>

                <p>
                    sekretariat@smjelonki.pl
                    <br />
                    informatyk@smjelonki.pl
                </p>

                <h2>9. Postanowienia końcowe</h2>

                <p>
                    Administrator może aktualizować regulamin. Aktualna wersja
                    publikowana jest na stronie internetowej.
                </p>
            </LegalDocument>
        </main>
    );
}