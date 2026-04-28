/* data/news.ts */

export type NewsCategory =
    | 'Komunikaty'
    | 'Ważne'
    | 'Awarie'
    | 'Remonty'
    | 'Osiedle'
    | 'Wydarzenia'
    | 'Administracja'
    | 'Finanse';

export type NewsPriority =
    | 'low'
    | 'normal'
    | 'high'
    | 'critical';

export type NewsScope =
    | 'all'
    | 'street'
    | 'building';

export type NewsPost = {
    id: string;

    title: string;
    slug: string;
    href: string;

    date: string;
    publishedAt: string;
    expiresAt?: string;

    category: NewsCategory;
    priority: NewsPriority;

    pinned?: boolean;
    featured?: boolean;

    image?: string; // obecnie nieużywane
    excerpt: string;
    content?: string;

    scope: NewsScope;

    streets?: string[];
    buildings?: string[];

    author?: string;
};

/* FEATURED */

export const featuredPost: NewsPost = {
    id: 'news-2026-04-27-awaria-cwu-sp7',

    title:
        'Przerwa w dostawie ciepłej wody – Synów Pułku 7',

    slug: 'awaria-cieplej-wody-synow-pulku-7',

    href: '/aktualnosci/awaria-cieplej-wody-synow-pulku-7',

    date: '27 kwietnia 2026',
    publishedAt: '2026-04-27T08:15:00+02:00',
    expiresAt: '2026-04-30T23:59:00+02:00',

    category: 'Awarie',
    priority: 'critical',

    pinned: true,
    featured: true,

    excerpt:
        'Z powodu awarii nastąpiła przerwa w dostawie ciepłej wody w pionie łazienkowym wybranych lokali budynku przy ul. Synów Pułku 7.',

    scope: 'building',

    streets: ['Synów Pułku'],
    buildings: ['7'],

    author: 'Administracja SM Jelonki',
};

/* POSTS */

export const newsPosts: NewsPost[] = [
    {
        id: 'news-2026-04-20-dyzur-rn-maj',

        title:
            'Dyżur członków Rady Nadzorczej w maju',

        slug: 'dyzur-rady-nadzorczej-maj',

        href: '/aktualnosci/dyzur-rady-nadzorczej-maj',

        date: '20 kwietnia 2026',
        publishedAt: '2026-04-20T10:00:00+02:00',

        category: 'Ważne',
        priority: 'normal',

        excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque justo, tempor ac tincidunt accumsan, auctor ut ante. Donec velit lectus, varius id lorem gravida, maximus scelerisque nulla. Donec tincidunt interdum rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tempus auctor sagittis. Ut porttitor dui at velit convallis, quis tincidunt nibh dictum. Nunc felis risus, pellentesque sit amet sapien sit amet, imperdiet facilisis est. Praesent tempus ante metus, nec semper tellus placerat vel. Vestibulum et elit sagittis tellus ornare ornare. Donec vulputate ante nec posuere accumsan. Phasellus ut purus eu leo congue ultricies nec at dui. Ut facilisis molestie porta. Mauris cursus lacus et tincidunt finibus. Quisque libero ex, blandit a efficitur eu, molestie vel lorem. Fusce scelerisque vehicula neque et ultricies. Nunc aliquet dapibus arcu, pulvinar condimentum tortor. Quisque ultrices porttitor dignissim. Donec consectetur, risus in sagittis luctus, erat lorem lacinia tortor, sed pellentesque felis quam vitae magna. Vestibulum quis justo eget quam facilisis vulputate facilisis quis mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vitae accumsan dui. Ut vulputate tincidunt eros, vel pellentesque augue laoreet sed. In vel pharetra ante. Maecenas id est sodales, bibendum dolor eget, sagittis est. Nulla facilisi. Etiam imperdiet nibh id lorem vestibulum, nec ultricies tortor viverra. Etiam lacus lacus, dapibus vel luctus quis, ultricies a erat. Ut sapien lorem, luctus nec tempus nec, gravida ac mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque aliquam id ipsum eget elementum. Quisque blandit nulla eget facilisis sodales. Donec dignissim gravida feugiat. Phasellus quis nulla bibendum, rhoncus odio eget, facilisis erat. Etiam accumsan, enim vel condimentum vestibulum, tellus elit sagittis ligula, ac aliquet sapien dolor non erat. Curabitur blandit libero justo, sit amet porttitor libero posuere ut. Pellentesque fermentum, nisi vitae vehicula.',

        scope: 'all',

        author: 'Rada Nadzorcza',
    },

    {
        id: 'news-2026-04-18-porzadki-wiosenne',

        title:
            'Wiosenne porządki na terenie osiedla',

        slug: 'wiosenne-porzadki-osiedla',

        href: '/aktualnosci/wiosenne-porzadki-osiedla',

        date: '18 kwietnia 2026',
        publishedAt: '2026-04-18T09:30:00+02:00',

        category: 'Osiedle',
        priority: 'normal',

        excerpt:
            'Rozpoczynamy sezonowe prace pielęgnacyjne zieleni oraz porządkowanie części wspólnych.',

        scope: 'all',

        author: 'Administracja SM Jelonki',
    },

    {
        id: 'news-2026-04-15-przeglad-gazowy-ps12',

        title:
            'Przegląd instalacji gazowej – Powstańców Śląskich 12',

        slug: 'przeglad-gazowy-powstancow-slaskich-12',

        href: '/aktualnosci/przeglad-gazowy-powstancow-slaskich-12',

        date: '15 kwietnia 2026',
        publishedAt: '2026-04-15T08:00:00+02:00',
        expiresAt: '2026-05-05T23:59:00+02:00',

        category: 'Komunikaty',
        priority: 'high',

        excerpt:
            'W dniu przeglądu prosimy o zapewnienie dostępu do lokali zgodnie z harmonogramem.',

        scope: 'building',

        streets: ['Powstańców Śląskich'],
        buildings: ['12'],

        author: 'Administracja SM Jelonki',
    },

    {
        id: 'news-2026-04-10-rozliczenia-q1',

        title:
            'Rozliczenia mediów za I kwartał',

        slug: 'rozliczenia-mediow-q1',

        href: '/aktualnosci/rozliczenia-mediow-q1',

        date: '10 kwietnia 2026',
        publishedAt: '2026-04-10T12:15:00+02:00',

        category: 'Finanse',
        priority: 'normal',

        excerpt:
            'Informacje dotyczące rozliczeń zostały udostępnione mieszkańcom.',

        scope: 'all',

        author: 'Dział księgowości',
    },

    {
        id: 'news-2026-04-08-malowanie-klatek-sp7-9',

        title:
            'Malowanie klatek schodowych – Synów Pułku 7 i 9',

        slug: 'malowanie-klatek-schody-synow-pulku',

        href: '/aktualnosci/malowanie-klatek-schody-synow-pulku',

        date: '8 kwietnia 2026',
        publishedAt: '2026-04-08T07:45:00+02:00',

        category: 'Remonty',
        priority: 'high',

        excerpt:
            'Rozpoczynamy odświeżenie części wspólnych wraz z naprawą ubytków ścian.',

        scope: 'building',

        streets: ['Synów Pułku'],
        buildings: ['7', '9'],

        author: 'Dział techniczny',
    },

    {
        id: 'news-2026-04-05-piknik-majowy',

        title:
            'Piknik sąsiedzki już w maju',

        slug: 'piknik-sasiedzki-maj',

        href: '/aktualnosci/piknik-sasiedzki-maj',

        date: '5 kwietnia 2026',
        publishedAt: '2026-04-05T14:20:00+02:00',

        category: 'Wydarzenia',
        priority: 'low',

        excerpt:
            'Zapraszamy mieszkańców na rodzinne wydarzenie plenerowe z atrakcjami dla dzieci.',

        scope: 'building',

        streets: ['Synów Pułku'],
        buildings: ['8', '9'],

        author: 'Osiedlowy Klub Kultury',
    },
];