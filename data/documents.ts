export type SimpleDocument = {
    title: string;
    href: string;
    description: string;
};

export type CategoryItem = {
    title: string;
    href: string;
};

export type Category = {
    title: string;
    description: string;
    items: CategoryItem[];
};

export const featuredDocuments: SimpleDocument[] = [
    {
        title: 'Walne Zgromadzenie 2025',
        href: '/dokumenty/walne-zgromadzenie-2025',
        description:
            'Materiały, uchwały oraz informacje dotyczące walnego zgromadzenia.',
    },
    {
        title: 'Audyty',
        href: '/dokumenty/audyty',
        description:
            'Raporty audytowe, kontrole oraz dokumentacja wewnętrzna.',
    },
    {
        title: 'Biuletyn informacyjny',
        href: '/dokumenty/biuletyn-informacyjny',
        description:
            'Aktualne i archiwalne biuletyny dla mieszkańców.',
    },
    {
        title: 'Druki i formularze',
        href: '/dokumenty/druki-i-formularze',
        description:
            'Wnioski, zgłoszenia oraz formularze do pobrania.',
    },
    {
        title: 'Statut',
        href: '/dokumenty/statut',
        description:
            'Aktualny statut Spółdzielni Mieszkaniowej JELONKI.',
    },
];

export const categories: Category[] = [
    {
        title: 'Ankiety',
        description:
            'Ankiety i formularze konsultacyjne dla mieszkańców.',
        items: [
            {
                title: 'Ankieta parkingowa',
                href: '/dokumenty/ankiety/parkingowa',
            },
            {
                title: 'Ankieta remontowa',
                href: '/dokumenty/ankiety/remontowa',
            },
        ],
    },
    {
        title: 'Protokoły',
        description:
            'Protokoły posiedzeń organów spółdzielni.',
        items: [
            {
                title: 'Protokoły RN 2025',
                href: '/dokumenty/protokoly/rn-2025',
            },
            {
                title: 'Protokoły RN 2024',
                href: '/dokumenty/protokoly/rn-2024',
            },
            {
                title: 'Protokoły Zarządu',
                href: '/dokumenty/protokoly/zarzad',
            },
        ],
    },
    {
        title: 'Sprawozdania',
        description:
            'Sprawozdania finansowe i organizacyjne.',
        items: [
            {
                title: 'Sprawozdanie 2025',
                href: '/dokumenty/sprawozdania/2025',
            },
            {
                title: 'Sprawozdanie 2024',
                href: '/dokumenty/sprawozdania/2024',
            },
        ],
    },
    {
        title: 'Uchwały',
        description:
            'Uchwały organów spółdzielni.',
        items: [
            {
                title: 'Rady Nadzorczej',
                href: '/dokumenty/uchwaly/rn',
            },
            {
                title: 'Walnego Zgromadzenia',
                href: '/dokumenty/uchwaly/walne',
            },
            {
                title: 'Zarządu Spółdzielni',
                href: '/dokumenty/uchwaly/zarzad',
            },
        ],
    },
    {
        title: 'Regulaminy',
        description:
            'Regulaminy obowiązujące na terenie spółdzielni.',
        items: [
            {
                title: 'Regulamin porządku domowego',
                href: '/dokumenty/regulaminy',
            },
            {
                title: 'Regulamin parkingów',
                href: '/dokumenty/regulaminy',
            },
        ],
    },
];

export const legalDocuments = [
    {
        title: 'Polityka prywatności',
        href: '/polityka-prywatnosci',
    },
    {
        title: 'Polityka cookies',
        href: '/polityka-cookies',
    },
    {
        title: 'Regulamin strony',
        href: '/regulamin-strony',
    },
    {
        title: 'Monitoring',
        href: '/monitoring',
    },
    {
        title: 'RODO / Klauzule informacyjne',
        href: '/rodo',
    },
    {
        title: 'Sygnaliści',
        href: '/sygnalisci',
    },
];