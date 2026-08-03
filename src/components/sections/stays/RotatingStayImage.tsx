'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface RotatingStayImageProps {
  images: StaticImageData[];
  alt: string;
  sizes: string;
  intervalMs?: number;
  priority?: boolean;
  startIndex?: number;
}

export default function RotatingStayImage({ images, alt, sizes, intervalMs = 3200, priority, startIndex = 0 }: RotatingStayImageProps) {
  const [active, setActive] = useState(startIndex % images.length);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setActive((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <>
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          priority={priority && i === 0}
          style={{
            objectFit: 'cover',
            position: 'absolute',
            inset: 0,
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1.4s ease',
            filter: 'brightness(1.12)',
          }}
        />
      ))}
    </>
  );
}
