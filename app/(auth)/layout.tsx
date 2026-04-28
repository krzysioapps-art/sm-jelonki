import type { ReactNode } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <>
            <ScrollReveal />

            <div className="auth-layout section">
                <div className="container">
                    <Link
                        href="/"
                        className="auth-layout__back"
                    >
                        <span aria-hidden="true">
                            ←
                        </span>

                        <span>
                            Wróć do strony głównej
                        </span>
                    </Link>
                </div>
            </div>

            {children}
        </>
    );
}