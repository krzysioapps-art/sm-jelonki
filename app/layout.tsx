import type { Metadata } from 'next';

import '@/styles/reset.css';
import '@/styles/root.css';
import '@/styles/base.css';
import '@/styles/utilities.css';
import '@/styles/typography.css';
import '@/styles/auth.css';
import '@/styles/about-page.css';
import '@/styles/neighborhood-page.css';
import '@/styles/not-found.css';



import '@/styles/emergency-page.css';
import '@/styles/legal-documents.css';
import '@/styles/documents-page.css';
import '@/styles/contact-page.css';
import '@/styles/authorities-page.css';
import '@/styles/news-page.css';
import '@/styles/jobs-page.css';

import '@/styles/layout/header.css';
import '@/styles/layout/footer.css';

import '@/styles/home/hero.css';
import '@/styles/home/quick-access.css';
import '@/styles/home/home-news.css';
import '@/styles/home/home-docs.css';
import '@/styles/home/home-about.css';
import '@/styles/home/home-contact.css';
import '@/styles/home/resident-cta.css';

import '@/styles/dashboard/dashboard.css';

import '@/styles/components/contact-section.css';
import '@/styles/components/image-gallery.css';
import '@/styles/components/accordion.css';





export const metadata: Metadata = {
  title: 'Spółdzielnia Mieszkaniowa',
  description: 'Oficjalna strona spółdzielni mieszkaniowej',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}