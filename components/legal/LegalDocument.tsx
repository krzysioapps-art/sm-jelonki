type LegalDocumentProps = {
    title: string;
    updatedAt?: string;
    version?: string;
    children: React.ReactNode;
};

export default function LegalDocument({
    title,
    updatedAt,
    version,
    children,
}: LegalDocumentProps) {
    return (
        <main className="legal-document section">
            <div className="container">
                <header className="legal-document__header">
                    <span className="legal-document__eyebrow">
                        Dokument informacyjny
                    </span>

                    <h1 className="legal-document__title">{title}</h1>

                    {(updatedAt || version) && (
                        <div className="legal-document__meta">
                            {updatedAt && (
                                <span>
                                    Aktualizacja: <strong>{updatedAt}</strong>
                                </span>
                            )}

                            {version && (
                                <span>
                                    Wersja: <strong>{version}</strong>
                                </span>
                            )}
                        </div>
                    )}
                </header>

                <section className="legal-document__content">
                    {children}
                </section>
            </div>
        </main>
    );
}