import type { Metadata } from 'next';
import { Suspense } from 'react';
import NewsPageClient from './NewsPageClient';

export const metadata: Metadata = {
  title: 'Aktualności - SM Jelonki',
  description:
    'Najnowsze komunikaty, remonty, wydarzenia i ważne informacje dla mieszkańców Spółdzielni Mieszkaniowej Jelonki.',
};

export default function AktualnosciPage() {
  return (
    <Suspense fallback={null}>
      <NewsPageClient />
    </Suspense>
  );
}