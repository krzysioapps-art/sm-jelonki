'use client';

import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react';
import { ChevronDown } from 'lucide-react';

export type AccordionItem = {
    id: string;
    title: ReactNode;
    content: ReactNode;
};

type AccordionProps = {
    items: AccordionItem[];
    singleOpen?: boolean;
    defaultOpenId?: string | null;
    className?: string;
};

type PanelProps = {
    isOpen: boolean;
    children: ReactNode;
};

function AccordionPanel({
    isOpen,
    children,
}: PanelProps) {
    const innerRef =
        useRef<HTMLDivElement>(null);

    const [height, setHeight] =
        useState(0);

    useEffect(() => {
        if (!innerRef.current) return;

        if (isOpen) {
            setHeight(
                innerRef.current.scrollHeight
            );
        } else {
            setHeight(0);
        }
    }, [isOpen, children]);

    useEffect(() => {
        if (!isOpen) return;

        const handleResize = () => {
            if (!innerRef.current) return;

            setHeight(
                innerRef.current.scrollHeight
            );
        };

        window.addEventListener(
            'resize',
            handleResize
        );

        return () =>
            window.removeEventListener(
                'resize',
                handleResize
            );
    }, [isOpen]);

    return (
        <div
            className={`accordion__panel ${
                isOpen
                    ? 'accordion__panel--open'
                    : ''
            }`}
            style={{
                maxHeight: `${height}px`,
            }}
        >
            <div
                ref={innerRef}
                className="accordion__panel-inner"
            >
                {children}
            </div>
        </div>
    );
}

export default function Accordion({
    items,
    singleOpen = true,
    defaultOpenId = null,
    className = '',
}: AccordionProps) {
    const [openIds, setOpenIds] =
        useState<string[]>(
            defaultOpenId
                ? [defaultOpenId]
                : []
        );

    const toggleItem = (id: string) => {
        const isOpen =
            openIds.includes(id);

        if (singleOpen) {
            setOpenIds(
                isOpen ? [] : [id]
            );
            return;
        }

        if (isOpen) {
            setOpenIds((prev) =>
                prev.filter(
                    (itemId) =>
                        itemId !== id
                )
            );
        } else {
            setOpenIds((prev) => [
                ...prev,
                id,
            ]);
        }
    };

    return (
        <div
            className={`accordion ${className}`}
        >
            {items.map((item) => {
                const isOpen =
                    openIds.includes(
                        item.id
                    );

                const buttonId = `${item.id}-button`;
                const panelId = `${item.id}-panel`;

                return (
                    <div
                        key={item.id}
                        className={`accordion__item ${
                            isOpen
                                ? 'accordion__item--open'
                                : ''
                        }`}
                    >
                        <button
                            type="button"
                            id={buttonId}
                            className="accordion__trigger"
                            aria-expanded={
                                isOpen
                            }
                            aria-controls={
                                panelId
                            }
                            onClick={() =>
                                toggleItem(
                                    item.id
                                )
                            }
                        >
                            <span className="accordion__title">
                                {
                                    item.title
                                }
                            </span>

                            <ChevronDown
                                size={20}
                                className="accordion__icon"
                            />
                        </button>

                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={
                                buttonId
                            }
                        >
                            <AccordionPanel
                                isOpen={
                                    isOpen
                                }
                            >
                                {
                                    item.content
                                }
                            </AccordionPanel>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}