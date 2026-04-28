'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    Home,
    Building2,
    Users,
    Trees,
    Newspaper,
    Megaphone,
    Hammer,
    FileText,
    Siren,
    Phone,
    Briefcase,
    KeyRound,
    Wrench,
    type LucideIcon,
} from 'lucide-react';

type NavLink = {
    label: string;
    href: string;
};

type NavItem =
    | {
        label: string;
        icon?: LucideIcon;
        href: string;
        children?: never;
    }
    | {
        label: string;
        icon?: LucideIcon;
        href?: never;
        children: NavLink[];
    };

type NavGroup = {
    title: string;
    items: NavItem[];
};

const navigation: NavGroup[] = [
    {
        title: 'Informacje',
        items: [
            {
                label: 'Start',
                href: '/',
                icon: Home,
            },
            {
                label: 'Aktualności',
                href: '/aktualnosci',
                icon: Newspaper,
            },
            {
                label: 'Na osiedlu',
                href: '/na-osiedlu',
                icon: Trees,
            },
            {
                label: 'Inwestycje i remonty',
                href: '/inwestycje-i-remonty',
                icon: Hammer,
            },
        ],
    },

    {
        title: 'Dla mieszkańca',
        items: [
            {
                label: 'Pomoc i awarie',
                href: '/pomoc-i-awarie',
                icon: Siren,
            },
            {
                label: 'Dokumenty',
                href: '/dokumenty',
                icon: FileText,
            },
            {
                label: 'Wynajem lokali i parkingów',
                href: '/wynajem',
                icon: KeyRound,
            },
            {
                label: 'Kontakt',
                href: '/kontakt',
                icon: Phone,
            },
        ],
    },

    {
        title: 'Spółdzielnia',
        items: [
            {
                label: 'O nas',
                href: '/o-nas',
                icon: Building2,
            },
            {
                label: 'Władze',
                href: '/wladze',
                icon: Users,
            },
        ],
    },

    {
        title: 'Współpraca',
        items: [
            {
                label: 'Rekrutacje',
                href: '/rekrutacje',
                icon: Briefcase,
            },
            {
                label: 'Dla wykonawców',
                icon: Wrench,
                children: [
                    {
                        label: 'Zapytania B2B',
                        href: '/dla-wykonawcow/zapytania',
                    },
                    {
                        label: 'Wymagania',
                        href: '/dla-wykonawcow/wymagania',
                    },
                ],
            },
        ],
    },
];

export default function Header() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] =
        useState<string | null>(null);
    const [scrolled, setScrolled] =
        useState(false);

    function closeMenu() {
        setOpen(false);
        setExpanded(null);
    }

    function toggleSubmenu(label: string) {
        setExpanded((prev) =>
            prev === label ? null : label
        );
    }

    function isActive(href: string) {
        if (href === '/') {
            return pathname === '/';
        }

        return (
            pathname === href ||
            pathname.startsWith(`${href}/`)
        );
    }

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8);
        };

        onScroll();

        window.addEventListener(
            'scroll',
            onScroll
        );

        return () =>
            window.removeEventListener(
                'scroll',
                onScroll
            );
    }, []);

    useEffect(() => {
        document.body.style.overflow = open
            ? 'hidden'
            : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={`site-header${scrolled ? ' is-scrolled' : ''
                }`}
        >
            <div className="container">
                <div className="site-header__inner">
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="site-header__brand"
                        aria-label="Strona główna"
                    >
                        <span className="site-header__brand-logo">
                            <Image
                                src="/icon.svg"
                                alt="Logo SM Jelonki"
                                width={50}
                                height={50}
                                priority
                            />
                        </span>

                        <span className="site-header__brand-content">
                            <span className="site-header__brand-title">
                                Jelonki
                            </span>

                            <span className="site-header__brand-subtitle">
                                Spółdzielnia
                                Mieszkaniowa
                            </span>
                        </span>
                    </Link>

                    <div className="site-header__actions">
                        <Link
                            href="/zaloguj"
                            onClick={closeMenu}
                            className="site-header__login"
                        >
                            Strefa mieszkańca
                        </Link>

                        <button
                            type="button"
                            className={`site-header__toggle${open
                                ? ' is-active'
                                : ''
                                }`}
                            aria-label="Menu"
                            aria-expanded={open}
                            onClick={() =>
                                setOpen(
                                    (prev) => !prev
                                )
                            }
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`site-header__mobile${open ? ' is-open' : ''
                    }`}
            >
                <nav
                    className="site-header__mobile-nav"
                    aria-label="Menu główne"
                >
                    {navigation.map((group) => (
                        <div
                            key={group.title}
                            className="site-header__group"
                        >
                            <div className="site-header__group-label">
                                {group.title}
                            </div>

                            {group.items.map((item) => {
                                const hasChildren =
                                    !!item.children?.length;

                                const Icon = item.icon;

                                if (hasChildren) {
                                    const isOpenSub =
                                        expanded === item.label;

                                    return (
                                        <div
                                            key={item.label}
                                            className="site-header__mobile-item"
                                        >
                                            <button
                                                type="button"
                                                className={`site-header__mobile-trigger${isOpenSub
                                                    ? ' is-open'
                                                    : ''
                                                    }`}
                                                onClick={() =>
                                                    toggleSubmenu(
                                                        item.label
                                                    )
                                                }
                                            >
                                                <span className="site-header__mobile-trigger-left">
                                                    {Icon && (
                                                        <Icon size={18} />
                                                    )}

                                                    <span>
                                                        {
                                                            item.label
                                                        }
                                                    </span>
                                                </span>

                                                <span className="site-header__mobile-plus">
                                                    +
                                                </span>
                                            </button>

                                            {isOpenSub && (
                                                <div className="site-header__mobile-submenu">
                                                    {item.children?.map(
                                                        (child) => (
                                                            <Link
                                                                key={
                                                                    child.href
                                                                }
                                                                href={
                                                                    child.href
                                                                }
                                                                onClick={
                                                                    closeMenu
                                                                }
                                                                className="site-header__mobile-sublink"
                                                            >
                                                                {
                                                                    child.label
                                                                }
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                return (
  <div
    key={item.label}
    className="site-header__mobile-item"
  >
    {'href' in item && item.href && (
      <Link
        href={item.href}
        onClick={closeMenu}
        className={`site-header__mobile-link${
          isActive(item.href)
            ? ' site-header__mobile-link--active'
            : ''
        }`}
      >
        {Icon && <Icon size={18} />}

        <span>{item.label}</span>
      </Link>
    )}
  </div>
);
                            })}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
}