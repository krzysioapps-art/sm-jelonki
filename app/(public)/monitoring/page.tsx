import LegalDocument from "@/components/legal/LegalDocument";

export const metadata = {
    title: "Monitoring | SM JELONKI",
    description:
        "Informacje dotyczące monitoringu wizyjnego prowadzonego przez Spółdzielnię Mieszkaniową JELONKI.",
};

export default function MonitoringPage() {
    return (
        <main>
            <LegalDocument
                title="Monitoring wizyjny"
                updatedAt="26.04.2026"
                version="1.0"
            >
                <h2>1. Administrator danych</h2>

                <p>
                    Administratorem systemu monitoringu jest Spółdzielnia
                    Mieszkaniowa „JELONKI”.
                </p>

                <p>
                    ul. Powstańców Śląskich 4A
                    <br />
                    01-381 Warszawa
                </p>

                <p>
                    e-mail: sekretariat@smjelonki.pl
                    <br />
                    e-mail IOD: iod@smjelonki.pl
                </p>

                <h2>2. Cele monitoringu</h2>

                <ul>
                    <li>zapewnienie bezpieczeństwa osób,</li>
                    <li>ochrona mienia,</li>
                    <li>kontrola dostępu do budynków,</li>
                    <li>przeciwdziałanie aktom wandalizmu,</li>
                    <li>zabezpieczenie materiału dowodowego.</li>
                </ul>

                <h2>3. Zakres monitoringu</h2>

                <p>Monitoring może obejmować:</p>

                <ul>
                    <li>wejścia do budynków,</li>
                    <li>klatki wejściowe,</li>
                    <li>windy,</li>
                    <li>garaże,</li>
                    <li>teren zewnętrzny,</li>
                    <li>okolice biura spółdzielni.</li>
                </ul>

                <p>
                    Monitoring nie obejmuje pomieszczeń socjalnych, sanitarnych ani
                    miejsc naruszających godność osób.
                </p>

                <h2>4. Podstawa prawna</h2>

                <p>
                    Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes
                    administratora polegający na zapewnieniu bezpieczeństwa oraz
                    ochronie mienia.
                </p>

                <h2>5. Okres przechowywania nagrań</h2>

                <p>
                    Nagrania przechowywane są co do zasady przez 30 dni, chyba że
                    stanowią dowód w postępowaniu lub obowiązek dłuższego
                    przechowywania wynika z przepisów prawa.
                </p>

                <h2>6. Odbiorcy danych</h2>

                <ul>
                    <li>upoważnieni pracownicy administratora,</li>
                    <li>podmioty serwisujące system monitoringu,</li>
                    <li>firmy ochrony,</li>
                    <li>organy publiczne uprawnione na podstawie prawa.</li>
                </ul>

                <h2>7. Prawa osoby</h2>

                <p>
                    Osobom, których dane dotyczą, przysługują prawa wynikające z
                    RODO w zakresie przewidzianym przepisami prawa.
                </p>
            </LegalDocument>
        </main>
    );
}