'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const prefersReducedMotion =
            window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches;

        const targets = Array.from(
            document.querySelectorAll(
                '.section, main section, main article'
            )
        ).filter(
            (el) =>
                !el.closest('header') &&
                !el.closest('footer')
        );

        if (prefersReducedMotion) {
            targets.forEach((el) =>
                el.classList.add('is-visible')
            );
            return;
        }

        window.scrollTo(0, 0);

        targets.forEach((el) =>
            el.classList.remove('is-visible')
        );

        const observer =
            new IntersectionObserver(
                (entries) => {
                    entries.forEach(
                        (entry) => {
                            if (
                                entry.isIntersecting
                            ) {
                                entry.target.classList.add(
                                    'is-visible'
                                );

                                observer.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );
                },
                {
                   threshold: 0.0,
  rootMargin: '0px 0px -12% 0px',
                }
            );

        requestAnimationFrame(() => {
            targets.forEach((el) =>
                observer.observe(el)
            );
        });

        return () => {
            observer.disconnect();
        };
    }, [pathname]);

    return null;
}