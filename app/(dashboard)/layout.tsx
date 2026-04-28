import Link from 'next/link';
import {
  LayoutDashboard,
  Newspaper,
  FileText,
  Wrench,
  CreditCard,
  Settings,
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <aside className="dashboard__sidebar">
        <div className="dashboard__brand">
          SM Jelonki
        </div>

        <nav className="dashboard__nav">
          <Link href="/dashboard">
            <LayoutDashboard size={18} />
            <span>Panel</span>
          </Link>

          <Link href="/dashboard/aktualnosci">
            <Newspaper size={18} />
            <span>Aktualności</span>
          </Link>

          <Link href="/dashboard/oplaty">
            <CreditCard size={18} />
            <span>Opłaty</span>
          </Link>

          <Link href="/dashboard/zgloszenia">
            <Wrench size={18} />
            <span>Zgłoszenia</span>
          </Link>

          <Link href="/dashboard/dokumenty">
            <FileText size={18} />
            <span>Dokumenty</span>
          </Link>

          <Link href="/dashboard/ustawienia">
            <Settings size={18} />
            <span>Ustawienia</span>
          </Link>
        </nav>
      </aside>

      <main className="dashboard__main">
        <header className="dashboard__topbar">
          <h1>Panel mieszkańca</h1>
        </header>

        <section className="dashboard__content">
          {children}
        </section>
      </main>
    </div>
  );
}