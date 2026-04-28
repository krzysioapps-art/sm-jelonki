import type { Metadata } from 'next';
import NewsPageClient from './NewsPageClient';

export const metadata: Metadata = {
    title: 'Aktualności - SM Jelonki',
    description:
        'Najnowsze komunikaty, remonty, wydarzenia i ważne informacje dla mieszkańców Spółdzielni Mieszkaniowej Jelonki.',
};

export default function AktualnosciPage() {
    return <NewsPageClient />;
}