'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface RotatingStayImageProps {
  images: (string | StaticImageData)[];
  alt: string;
  sizes: string;
  intervalMs?: number;
  priority?: boolean;
  startIndex?: number;
}

export default function RotatingStayImage({ images, alt, sizes, intervalMs = 3200, priority, startIndex = 0 }: RotatingStayImageProps) {
  const [active, setActive] = useState(startIndex % images.length);
  const [renderedIndices, setRenderedIndices] = useState<number[]>([startIndex % images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % images.length;
        setRenderedIndices((prev) => (prev.includes(next) ? prev : [...prev, next]));
        return next;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <>
      {images.map((img, i) => {
        if (!renderedIndices.includes(i)) return null;
        return (
          <Image
            key={i}
            src={img}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority && i === startIndex}
            loading={i === startIndex ? (priority ? 'eager' : 'lazy') : 'lazy'}
            style={{
              objectFit: 'cover',
              position: 'absolute',
              inset: 0,
              opacity: i === active ? 1 : 0,
              transition: 'opacity 1.4s ease',
              filter: 'brightness(1.12)',
            }}
          />
        );
      })}
    </>
  );
}
