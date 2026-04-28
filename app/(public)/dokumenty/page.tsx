import Link from 'next/link';

type SimpleDocument = {
    title: string;
    href: string;
    description: string;
};

type CategoryItem = {
    title: string;
    href: string;
};

type Category = {
    title: string;
    description: string;
    items: CategoryItem[];
};

import {
  featuredDocuments,
  categories,
  legalDocuments,
} from '@/data/documents';

export default function DocumentsPage() {
    return (
        <main>
            <section className="documents section">
                <div className="container">
                    <header className="documents__header">
                        <span className="documents__eyebrow">
                            Dokumenty
                        </span>

                        <h1 className="documents__title">
                            Dokumenty mieszkańców
                        </h1>

                        <p className="documents__intro">
                            Najważniejsze dokumenty, formularze,
                            uchwały oraz materiały informacyjne
                            dostępne dla mieszkańców Spółdzielni.
                        </p>
                    </header>

                    <div className="documents__featured-grid">
                        {featuredDocuments.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="documents__card documents__card--clickable"
                            >
                                <h2 className="documents__card-title">
                                    {item.title}
                                </h2>

                                <p className="documents__card-text">
                                    {item.description}
                                </p>

                                <span className="documents__card-link">
                                    Otwórz dokument
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <header className="documents__subheader">
                        <span className="documents__eyebrow">
                            Kategorie
                        </span>

                        <h2 className="documents__section-title">
                            Zbiory dokumentów
                        </h2>

                        <p className="documents__section-text">
                            Grupy dokumentów zawierające wiele pozycji,
                            archiwa oraz materiały tematyczne.
                        </p>
                    </header>

                    <div className="documents__categories">
                        {categories.map((category) => (
                            <article
                                key={category.title}
                                className="documents__category"
                            >
                                <h3 className="documents__category-title">
                                    {category.title}
                                </h3>

                                <p className="documents__category-text">
                                    {category.description}
                                </p>

                                <div className="documents__category-list">
                                    {category.items.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="documents__category-link"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="documents__access">
                        <span className="documents__eyebrow">
                            Informacje prawne
                        </span>

                        <h2 className="documents__section-title">
                            Prywatność i regulacje
                        </h2>

                        <p className="documents__section-text">
                            Dokumenty dotyczące ochrony danych
                            osobowych, prywatności, monitoringu
                            oraz zasad korzystania z serwisu.
                        </p>

                        <div className="documents__legal-list">
                            {legalDocuments.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="documents__legal-link"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}