import LegalDocument from "@/components/legal/LegalDocument";

export const metadata = {
    title: "Polityka cookies | SM JELONKI",
    description:
        "Informacje o plikach cookies wykorzystywanych w serwisie Spółdzielni Mieszkaniowej JELONKI.",
};

export default function CookiesPage() {
    return (
        <main>
            <LegalDocument
                title="Polityka cookies"
                updatedAt="26.04.2026"
                version="1.0"
            >
                <h2>1. Czym są pliki cookies</h2>

                <p>
                    Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu
                    użytkownika podczas korzystania ze strony internetowej.
                </p>

                <h2>2. Rodzaje wykorzystywanych cookies</h2>

                <ul>
                    <li>
                        <strong>Niezbędne</strong> – wymagane do prawidłowego
                        działania serwisu.
                    </li>
                    <li>
                        <strong>Analityczne</strong> – pomagają analizować ruch na
                        stronie.
                    </li>
                    <li>
                        <strong>Funkcjonalne</strong> – zapamiętują ustawienia
                        użytkownika.
                    </li>
                    <li>
                        <strong>Zewnętrzne multimedia</strong> – np. YouTube lub
                        Google Maps.
                    </li>
                </ul>

                <h2>3. Zgoda użytkownika</h2>

                <p>
                    Cookies inne niż niezbędne wykorzystywane są wyłącznie po
                    uzyskaniu zgody użytkownika za pomocą banera cookies.
                </p>

                <h2>4. Zarządzanie ustawieniami</h2>

                <p>
                    Użytkownik może zmienić ustawienia cookies w dowolnym momencie
                    poprzez panel zgód lub ustawienia przeglądarki.
                </p>

                <h2>5. Kontakt</h2>

                <p>iod@smjelonki.pl</p>
            </LegalDocument>
        </main>
    );
}