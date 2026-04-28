export default function DashboardPage() {
  return (
    <>
      <section className="dashboard-home">
        <div className="dashboard-home__hero">
          <p className="dashboard-home__eyebrow">
            Panel mieszkańca
          </p>

          <h1 className="dashboard-home__title">
            Witaj w SM Jelonki
          </h1>

          <p className="dashboard-home__text">
            Zarządzaj opłatami, sprawdzaj aktualności,
            wysyłaj zgłoszenia i korzystaj z dokumentów
            online.
          </p>
        </div>

        <div className="dashboard-home__grid">
          <a
            href="/dashboard/aktualnosci"
            className="dashboard-card"
          >
            <h2>Aktualności</h2>
            <p>
              Najnowsze komunikaty, awarie i remonty.
            </p>
          </a>

          <a
            href="/dashboard/oplaty"
            className="dashboard-card"
          >
            <h2>Opłaty</h2>
            <p>
              Saldo konta, rozliczenia i historia wpłat.
            </p>
          </a>

          <a
            href="/dashboard/zgloszenia"
            className="dashboard-card"
          >
            <h2>Zgłoszenia</h2>
            <p>
              Dodaj usterkę lub sprawdź status sprawy.
            </p>
          </a>

          <a
            href="/dashboard/dokumenty"
            className="dashboard-card"
          >
            <h2>Dokumenty</h2>
            <p>
              Uchwały, regulaminy i pliki do pobrania.
            </p>
          </a>
        </div>
      </section>
    </>
  );
}