'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
    ChevronLeft,
    ChevronRight,
    X,
} from 'lucide-react';

type GalleryImage = {
    src: string;
    alt?: string;
};

type Props = {
    images: GalleryImage[];
    columns?: 2 | 3 | 4;
    aspect?: 'square' | 'landscape';
    className?: string;
};

export default function ImageGallery({
    images,
    columns = 3,
    aspect = 'landscape',
    className = '',
}: Props) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    useEffect(() => {
        function handleKeyDown(
            event: KeyboardEvent
        ) {
            if (!open) return;

            if (event.key === 'Escape')
                setOpen(false);

            if (event.key === 'ArrowLeft')
                prevImage();

            if (event.key === 'ArrowRight')
                nextImage();
        }

        window.addEventListener(
            'keydown',
            handleKeyDown
        );

        return () =>
            window.removeEventListener(
                'keydown',
                handleKeyDown
            );
    }, [open, activeIndex]);

    if (!images?.length) return null;

    function openLightbox(index: number) {
        setActiveIndex(index);
        setOpen(true);
    }

    function closeLightbox() {
        setOpen(false);
    }

    function prevImage() {
        setActiveIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    }

    function nextImage() {
        setActiveIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    }

    const gridClass = `image-gallery image-gallery--cols-${columns} image-gallery--${aspect} ${className}`;

    return (
        <>
            <div className={gridClass}>
                {images.map((image, index) => (
                    <button
                        key={`${image.src}-${index}`}
                        type="button"
                        className="image-gallery__thumb"
                        onClick={() =>
                            openLightbox(index)
                        }
                        aria-label={`Otwórz zdjęcie ${
                            index + 1
                        }`}
                    >
                        <Image
                            src={image.src}
                            alt={
                                image.alt ||
                                `Zdjęcie ${index + 1}`
                            }
                            fill
                            className="image-gallery__image"
                        />
                    </button>
                ))}
            </div>

            {open && (
                <div
                    className="image-gallery__overlay"
                    onClick={closeLightbox}
                >
                    <div
                        className="image-gallery__dialog"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <button
                            type="button"
                            className="image-gallery__close"
                            onClick={closeLightbox}
                            aria-label="Zamknij"
                        >
                            <X size={22} />
                        </button>

                        {images.length > 1 && (
                            <button
                                type="button"
                                className="image-gallery__nav image-gallery__nav--prev"
                                onClick={prevImage}
                                aria-label="Poprzednie zdjęcie"
                            >
                                <ChevronLeft size={26} />
                            </button>
                        )}

                        <div className="image-gallery__stage">
                            <Image
                                src={
                                    images[activeIndex]
                                        .src
                                }
                                alt={
                                    images[activeIndex]
                                        .alt ||
                                    `Zdjęcie ${
                                        activeIndex + 1
                                    }`
                                }
                                fill
                                className="image-gallery__image"
                            />
                        </div>

                        {images.length > 1 && (
                            <button
                                type="button"
                                className="image-gallery__nav image-gallery__nav--next"
                                onClick={nextImage}
                                aria-label="Następne zdjęcie"
                            >
                                <ChevronRight
                                    size={26}
                                />
                            </button>
                        )}

                        <div className="image-gallery__footer">
                            <span>
                                {images[activeIndex]
                                    .alt ||
                                    'Zdjęcie'}
                            </span>

                            <span>
                                {activeIndex + 1} /{' '}
                                {images.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}