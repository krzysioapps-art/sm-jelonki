'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight,
    Pin,
    AlertTriangle,
    Wrench,
    Building2,
    MapPin,
    SlidersHorizontal,
    X,
} from 'lucide-react';

import {
    featuredPost,
    newsPosts,
    type NewsPost,
} from '@/data/news';

import { useSearchParams, useRouter } from 'next/navigation';

import { useEffect } from 'react';


/* ===================================================
   HELPERS
=================================================== */

function getPriorityLabel(
    priority: NewsPost['priority']
) {
    switch (priority) {
        case 'critical':
            return 'Pilne';
        case 'high':
            return 'Ważne';
        case 'low':
            return 'Informacja';
        default:
            return 'Aktualne';
    }
}

function getScopeLabel(post: NewsPost) {
    if (post.scope === 'all') {
        return 'Wszystkie budynki';
    }

    if (
        post.scope === 'street' &&
        post.streets?.length
    ) {
        return post.streets.join(', ');
    }

    if (
        post.scope === 'building' &&
        post.streets?.length &&
        post.buildings?.length
    ) {
        return `${post.streets[0]} ${post.buildings.join(', ')}`;
    }

    return 'Wybrane budynki';
}

function getCategoryIcon(
    category: NewsPost['category']
) {
    switch (category) {
        case 'Awarie':
            return <AlertTriangle size={16} />;

        case 'Remonty':
            return <Wrench size={16} />;

        case 'Osiedle':
            return <Building2 size={16} />;

        default:
            return <MapPin size={16} />;
    }
}

function getCategoryClass(
    category: NewsPost['category']
) {
    switch (category) {
        case 'Awarie':
            return 'is-red';
        case 'Remonty':
            return 'is-yellow';
        case 'Ważne':
            return 'is-dark';
        case 'Komunikaty':
            return 'is-blue';
        case 'Osiedle':
            return 'is-green';
        case 'Wydarzenia':
            return 'is-purple';
        case 'Finanse':
            return 'is-teal';
        default:
            return 'is-gray';
    }
}

function matchesBuilding(
    post: NewsPost,
    buildingFilter: string
) {
    if (buildingFilter === 'all') {
        return true;
    }

    if (
        post.scope !== 'building' ||
        !post.streets?.length ||
        !post.buildings?.length
    ) {
        return false;
    }

    const street = post.streets[0];

    return post.buildings.some(
        (item) =>
            `${street} ${item}` ===
            buildingFilter
    );
}

/* ===================================================
   CARD
=================================================== */

function NewsCard({
    post,
}: {
    post: NewsPost;
}) {
    const content = (
        <>
            {post.image && (
                <div className="news-page__card-image">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="news-page__image"
                    />
                </div>
            )}

            <div className="news-page__card-body">
                <div className="news-page__meta">
                    <span
                        className={`news-page__tag ${getCategoryClass(post.category)}`}
                    >
                        {getCategoryIcon(
                            post.category
                        )}
                        <span>
                            {post.category}
                        </span>
                    </span>

                    {post.pinned && (
                        <span className="news-page__pin">
                            <Pin size={14} />
                            <span>
                                Przypięte
                            </span>
                        </span>
                    )}
                </div>

                <p className="news-page__date">
                    {post.date}
                </p>

                <p className="news-page__scope">
                    {getScopeLabel(post)}
                </p>

                <h2 className="news-page__card-title">
                    {post.title}
                </h2>

                <p className="news-page__excerpt">
                    {post.excerpt}
                </p>

                <div className="news-page__bottom">
                    <span className="news-page__priority">
                        {getPriorityLabel(
                            post.priority
                        )}
                    </span>

                    {post.href && (
                        <span className="news-page__link">
                            Czytaj
                            <ArrowRight size={16} />
                        </span>
                    )}
                </div>
            </div>
        </>
    );

    if (post.href) {
        return (
            <Link
                href={`/aktualnosci?news=${post.id}`} scroll={false}
                className={`news-page__card ${post.image
                    ? 'news-page__card--with-image'
                    : 'news-page__card--no-image'
                    }`}
            >
                {content}
            </Link>
        );
    }

    return (
        <article className={`news-page__card ${post.image
            ? 'news-page__card--with-image'
            : 'news-page__card--no-image'
            }`}>
            {content}
        </article>
    );
}

function formatDateTime(value: string) {
    return new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(value));
}

/* ===================================================
   PAGE
=================================================== */

export default function NewsPageClient() {

    const [category, setCategory] =
        useState('all');

    const [building, setBuilding] =
        useState('all');

    const [filtersOpen, setFiltersOpen] =
        useState(false);

    const categories = useMemo(() => {
        const set =
            new Set<string>();

        newsPosts.forEach((post) =>
            set.add(post.category)
        );

        return [
            'all',
            ...Array.from(set).sort(),
        ];
    }, []);

    const buildings = useMemo(() => {
        const set =
            new Set<string>();

        newsPosts.forEach((post) => {
            if (
                post.scope === 'building' &&
                post.streets?.length &&
                post.buildings?.length
            ) {
                const street = post.streets[0];

                post.buildings.forEach((item) =>
                    set.add(`${street} ${item}`)
                );
            }
        });

        return [
            'all',
            ...Array.from(set).sort(),
        ];
    }, []);

    const filteredPosts =
        useMemo(() => {
            return newsPosts.filter(
                (post) => {
                    const categoryOk =
                        category ===
                        'all' ||
                        post.category ===
                        category;

                    const buildingOk =
                        matchesBuilding(
                            post,
                            building
                        );

                    return (
                        categoryOk &&
                        buildingOk
                    );
                }
            );
        }, [
            category,
            building,
        ]);

    const activeFilters =
        Number(category !== 'all') +
        Number(building !== 'all');

    const searchParams = useSearchParams();
    const router = useRouter();

    const activeNewsId = searchParams.get('news');

    const activePost = useMemo(() => {
        if (!activeNewsId) return null;

        return [...newsPosts, featuredPost].find(
            item => item.id === activeNewsId
        );
    }, [activeNewsId]);

    useEffect(() => {
        document.body.style.overflow =
            activePost ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [activePost]);

    return (
        <main>
            <section className="section news-page">
                <div className="container">
                    <header className="news-page__hero">
                        <span className="news-page__eyebrow">
                            Aktualności
                        </span>

                        <h1 className="news-page__title">
                            Co nowego w SM
                            Jelonki
                        </h1>

                        <p className="news-page__text">
                            Najważniejsze
                            komunikaty,
                            remonty,
                            wydarzenia i
                            bieżące
                            informacje.
                        </p>
                    </header>

                    <div className="news-page__layout">
                        <aside className="news-page__sidebar">
                            <div className="news-page__sidebar-card">
                                <div className="news-page__sidebar-head">
                                    <h2>
                                        Filtry
                                    </h2>

                                    <button
                                        type="button"
                                        className="news-page__filters-toggle"
                                        onClick={() =>
                                            setFiltersOpen(
                                                true
                                            )
                                        }
                                    >
                                        <SlidersHorizontal size={16} />

                                        <span>
                                            Filtry
                                        </span>

                                        {activeFilters >
                                            0 && (
                                                <strong>
                                                    {
                                                        activeFilters
                                                    }
                                                </strong>
                                            )}
                                    </button>
                                </div>

                                <div className="news-page__desktop-filters">
                                    <p className="news-page__filter-label">
                                        Kategoria
                                    </p>

                                    <div className="news-page__filters-stack">
                                        {categories.map(
                                            (
                                                item
                                            ) => (
                                                <button
                                                    key={
                                                        item
                                                    }
                                                    type="button"
                                                    onClick={() =>
                                                        setCategory(
                                                            item
                                                        )
                                                    }
                                                    className={`news-page__filter ${category ===
                                                        item
                                                        ? 'is-active'
                                                        : ''
                                                        }`}
                                                >
                                                    {item ===
                                                        'all'
                                                        ? 'Wszystkie'
                                                        : item}
                                                </button>
                                            )
                                        )}
                                    </div>

                                    <p className="news-page__filter-label">
                                        Budynek
                                    </p>

                                    <div className="news-page__filters-stack">
                                        {buildings.map(
                                            (
                                                item
                                            ) => (
                                                <button
                                                    key={
                                                        item
                                                    }
                                                    type="button"
                                                    onClick={() =>
                                                        setBuilding(
                                                            item
                                                        )
                                                    }
                                                    className={`news-page__filter ${building ===
                                                        item
                                                        ? 'is-active'
                                                        : ''
                                                        }`}
                                                >
                                                    {item ===
                                                        'all'
                                                        ? 'Wszystkie budynki'
                                                        : item}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        <div className="news-page__content">
                            <Link
                                href={`/aktualnosci?news=${featuredPost.id}`}
                                scroll={false}
                                className={`news-page__featured ${featuredPost.image
                                    ? 'news-page__featured--with-image'
                                    : 'news-page__featured--no-image'
                                    }`}
                            >
                                {featuredPost.image && (
                                    <div className="news-page__featured-image">
                                        <Image
                                            src={
                                                featuredPost.image
                                            }
                                            alt={
                                                featuredPost.title
                                            }
                                            fill
                                            priority
                                            className="news-page__image"
                                        />
                                    </div>
                                )}

                                <div className="news-page__featured-content">
                                    <div className="news-page__meta">
                                        <span
                                            className={`news-page__tag ${getCategoryClass(
                                                featuredPost.category
                                            )}`}
                                        >
                                            {getCategoryIcon(
                                                featuredPost.category
                                            )}

                                            <span>
                                                {
                                                    featuredPost.category
                                                }
                                            </span>
                                        </span>
                                    </div>

                                    <p className="news-page__date">
                                        {
                                            featuredPost.date
                                        }
                                    </p>

                                    <p className="news-page__scope">
                                        {getScopeLabel(
                                            featuredPost
                                        )}
                                    </p>

                                    <h2>
                                        {
                                            featuredPost.title
                                        }
                                    </h2>

                                    <p>
                                        {
                                            featuredPost.excerpt
                                        }
                                    </p>

                                    <span className="news-page__button">
                                        Czytaj więcej
                                        <ArrowRight size={18} />
                                    </span>
                                </div>
                            </Link>

                            <section className="news-page__grid">
                                {filteredPosts.length >
                                    0 ? (
                                    filteredPosts.map(
                                        (
                                            post
                                        ) => (
                                            <NewsCard
                                                key={
                                                    post.id
                                                }
                                                post={
                                                    post
                                                }
                                            />
                                        )
                                    )
                                ) : (
                                    <div className="news-page__empty">
                                        Brak
                                        aktualności
                                        dla wybranych
                                        filtrów.
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODAL OUTSIDE SECTION */}

            <div
                className={`news-page__drawer-backdrop ${filtersOpen
                    ? 'is-open'
                    : ''
                    }`}
                onClick={() =>
                    setFiltersOpen(false)
                }
            >
                <div
                    className="news-page__drawer"
                    onClick={(e) =>
                        e.stopPropagation()
                    }
                >
                    <div className="news-page__drawer-head">
                        <h2>Filtry</h2>

                        <button
                            type="button"
                            onClick={() =>
                                setFiltersOpen(
                                    false
                                )
                            }
                        >
                            <X
  size={18}
  stroke="var(--color-text)"
  color="var(--color-text)"
/>
                        </button>
                    </div>

                    <div className="news-page__drawer-content">
                        <p className="news-page__filter-label">
                            Kategoria
                        </p>

                        <div className="news-page__filters-stack">
                            {categories.map(
                                (item) => (
                                    <button
                                        key={
                                            item
                                        }
                                        type="button"
                                        onClick={() =>
                                            setCategory(
                                                item
                                            )
                                        }
                                        className={`news-page__filter ${category ===
                                            item
                                            ? 'is-active'
                                            : ''
                                            }`}
                                    >
                                        {item ===
                                            'all'
                                            ? 'Wszystkie'
                                            : item}
                                    </button>
                                )
                            )}
                        </div>

                        <p className="news-page__filter-label">
                            Budynek
                        </p>

                        <div className="news-page__filters-stack">
                            {buildings.map(
                                (item) => (
                                    <button
                                        key={
                                            item
                                        }
                                        type="button"
                                        onClick={() =>
                                            setBuilding(
                                                item
                                            )
                                        }
                                        className={`news-page__filter ${building ===
                                            item
                                            ? 'is-active'
                                            : ''
                                            }`}
                                    >
                                        {item ===
                                            'all'
                                            ? 'Wszystkie budynki'
                                            : item}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    <div className="news-page__drawer-actions">
                        <button
                            type="button"
                            className="news-page__filter-reset"
                            onClick={() => {
                                setCategory(
                                    'all'
                                );
                                setBuilding(
                                    'all'
                                );
                            }}
                        >
                            Wyczyść
                        </button>

                        <button
                            type="button"
                            className="news-page__filter-apply"
                            onClick={() =>
                                setFiltersOpen(
                                    false
                                )
                            }
                        >
                            Pokaż wyniki
                        </button>
                    </div>
                </div>
            </div>
            {activePost && (
                <div
                    className="news-modal-backdrop"
                    onClick={() =>
                        router.push('/aktualnosci', {
                            scroll: false,
                        })
                    }
                >
                    <div
                        className="news-modal"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        <button
                            className="news-modal__close"
                            onClick={() =>
                                router.push('/aktualnosci', {
                                    scroll: false,
                                })
                            }
                        >
                            <X
  size={18}
  stroke="var(--color-text)"
  color="var(--color-text)"
/>
                        </button>

                        {activePost.image && (
                            <div className="news-modal__image">
                                <Image
                                    src={activePost.image}
                                    alt={activePost.title}
                                    fill
                                    className="news-page__image"
                                />
                            </div>
                        )}

                        <div className="news-modal__meta">
                            <span
                                className={`news-page__tag ${getCategoryClass(
                                    activePost.category
                                )}`}
                            >
                                {getCategoryIcon(
                                    activePost.category
                                )}
                                <span>
                                    {activePost.category}
                                </span>
                            </span>

                            {activePost.pinned && (
                                <span className="news-page__pin">
                                    <Pin size={14} />
                                    Przypięte
                                </span>
                            )}

                            <span className="news-page__priority">
                                {getPriorityLabel(
                                    activePost.priority
                                )}
                            </span>
                        </div>

                        <h2 className="news-modal__title">
                            {activePost.title}
                        </h2>

                        <p className="news-modal__date">
                            {activePost.date}
                        </p>

                        <p className="news-modal__excerpt">
                            {activePost.excerpt}
                        </p>

                        {activePost.content && (
                            <div className="news-modal__content">
                                {activePost.content}
                            </div>
                        )}

                        {(activePost.streets ||
                            activePost.buildings) && (
                                <div className="news-modal__section">
                                    <h3>Lokalizacja</h3>

                                    {activePost.streets && (
                                        <p>
                                            Ulica:{' '}
                                            {activePost.streets.join(
                                                ', '
                                            )}
                                        </p>
                                    )}

                                    {activePost.buildings && (
                                        <p>
                                            Budynki:{' '}
                                            {activePost.buildings.join(
                                                ', '
                                            )}
                                        </p>
                                    )}
                                </div>
                            )}

                        {activePost.author && (
                            <div className="news-modal__section">
                                <h3>Autor</h3>
                                <p>{activePost.author}</p>
                            </div>
                        )}

                        {activePost.expiresAt && (
                            <div className="news-modal__section">
                                <h3>Ważne do</h3>
                                <p>{formatDateTime(activePost.expiresAt)}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>

    );
}

