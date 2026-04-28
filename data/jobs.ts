export type JobOffer = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  publishedAt: string;

  summary: string;

  responsibilities: string[];
  requirements: string[];
  benefits: string[];

  applyEmail: string;
  applySubject: string;

  applyInstructions?: string;
  gdprConsent?: string;
  gdprInfo?: string[];
};

export const jobOffers: JobOffer[] = [
  {
    slug: 'gospodarz-budynku',
    title: 'Gospodarz budynku',
    department: 'Administracja osiedla',
    location: 'Warszawa, Bemowo',
    type: 'Umowa o pracę',
    publishedAt: 'Aktualne',

    summary:
      'Poszukujemy osoby odpowiedzialnej za utrzymanie porządku, nadzór nad stanem technicznym budynku oraz bieżące wsparcie administracji osiedla.',

    responsibilities: [
      'Utrzymanie w należytej czystości i porządku zasobów Spółdzielni, w szczególności klatek schodowych z ich wyposażeniem, kabin dźwigowych, komór zsypowych oraz pomieszczeń wspólnego użytkowania.',
      'Usuwanie odpadów i innych zanieczyszczeń z niezabudowanej części nieruchomości.',
      'Oczyszczanie ze śniegu i lodu powierzchni utwardzonych, pokryw studzienek, zasuw wodnych i gazowych oraz usuwanie śliskości przez posypywanie piaskiem.',
      'Pielęgnacja trawników, kwietników i nasadzeń w granicach przydzielonego terenu oraz ochrona ich przed zniszczeniem.',
      'Wykonywanie drobnych napraw elementów wyposażenia terenu oraz zgłaszanie Administratorowi konieczności wymiany lub remontu.',
      'Przestrzeganie zarządzeń i wytycznych administracji Spółdzielni.',
      'Czuwanie nad prawidłowym działaniem instalacji i urządzeń technicznych w pomieszczeniach ogólnego użytku.',
      'Bezzwłoczne zawiadamianie Administratora lub właściwych służb technicznych o dostrzeżonych uszkodzeniach lub wadliwym działaniu instalacji i urządzeń technicznych.',
      'Podejmowanie działań w przypadku awarii w celu ochrony mieszkańców przed zagrożeniem życia i mienia oraz ograniczenia skutków uszkodzeń.',
      'Nadzór nad sprawnym działaniem punktów świetlnych wewnątrz i na zewnątrz budynków oraz zgłaszanie usterek.',
      'Odczytywanie według harmonogramu stanu liczników znajdujących się w budynkach i lokalach oraz przekazywanie informacji do Spółdzielni.',
      'Wywieszanie i zdejmowanie flag państwowych w dniach świąt i uroczystości państwowych oraz na polecenie Zarządu.',
      'Bezzwłoczne zawiadamianie Administracji o stwierdzonych faktach niewykonania obowiązków przez przedsiębiorstwa usługowe.',
      'Dbałość o należyty stan sprzętu i urządzeń przydzielonych do pracy.',
      'Wywieszanie na tablicach ogłoszeń zawiadomień, uchwał i innych komunikatów zgodnie z poleceniami przełożonych.',
      'Przekazywanie użytkownikom lokali indywidualnych zawiadomień lub innej korespondencji Spółdzielni, w razie potrzeby z potwierdzeniem odbioru.',
      'Usuwanie z budynków oraz pomieszczeń i urządzeń ogólnego użytku ogłoszeń, plakatów, afiszy, napisów i rysunków umieszczonych bez zgody Spółdzielni.',
      'Dbałość o należyty stan sprzętu przeciwpożarowego, zbiorników do gromadzenia odpadów oraz narzędzi przeznaczonych do utrzymania czystości i porządku.',
      'Wykonywanie drobnych napraw sprzętu oraz zawiadamianie Administratora o konieczności wymiany.',
      'Zawiadamianie Administratora o rażących lub uporczywych przypadkach naruszania przez mieszkańców Regulaminu porządku domowego.',
      'Zamykanie na noc drzwi korytarzy piwnicznych oraz zsypów.',
      'Stała kontrola zabezpieczenia wejść, zamków oraz pomieszczeń wspólnych.',
    ],

    requirements: [
      'Wykształcenie zawodowe.',
      'Dobra organizacja pracy własnej.',
      'Dokładność, schludność, pracowitość, rzetelność i uprzejmość.',
      'Doświadczenie na tym samym lub podobnym stanowisku.',
      'Minimum 1 rok doświadczenia na podobnym stanowisku.',
    ],

    benefits: [
      'Stabilne zatrudnienie w ramach umowy o pracę.',
      'Przyjazna atmosfera pracy w energicznym zespole.',
      'Możliwość korzystania z funduszu socjalnego.',
    ],

    applyEmail: 'rekrutacja@smjelonki.pl',
    applySubject: 'Aplikacja na stanowisko Gospodarza budynku',

    applyInstructions:
      'Osoby zainteresowane prosimy o przesyłanie aplikacji (CV) na adres e-mail rekrutacja@smjelonki.pl z adnotacją w tytule wiadomości: „Aplikacja na stanowisko Gospodarza budynku”.',

    gdprConsent:
      'Wyrażam zgodę na przetwarzanie moich danych osobowych przez Spółdzielnię Mieszkaniową „Jelonki” z siedzibą przy ul. Powstańców Śląskich 4A, 01-381 Warszawa dla potrzeb niezbędnych do realizacji procesu rekrutacji oraz przyszłych procesów rekrutacyjnych zgodnie z obowiązującymi przepisami prawa.',

    gdprInfo: [
      'Administratorem danych osobowych jest Spółdzielnia Mieszkaniowa „Jelonki” z siedzibą przy ul. Powstańców Śląskich 4A, 01-381 Warszawa.',
      'W sprawach związanych z przetwarzaniem danych można kontaktować się pod adresem e-mail: iod@smjelonki.pl.',
      'Dane osobowe będą przetwarzane w celu przeprowadzenia procesu rekrutacji oraz zawarcia umowy o pracę.',
      'Podanie danych w zakresie wynikającym z Kodeksu pracy jest obowiązkowe, a w pozostałym zakresie dobrowolne.',
      'Dane nie będą udostępniane podmiotom zewnętrznym.',
      'Dane będą przechowywane do momentu zakończenia postępowania rekrutacyjnego.',
      'Kandydat ma prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu oraz cofnięcia zgody.',
      'Przysługuje prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.',
      'Dane osobowe nie będą podlegały zautomatyzowanemu podejmowaniu decyzji, w tym profilowaniu.',
    ],
  },
];