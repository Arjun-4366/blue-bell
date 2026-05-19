'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&fit=crop', size: 'large', label: 'Infinity Pool View' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&fit=crop', size: 'small', label: 'Spa Treatment' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop', size: 'small', label: 'Organic Gourmet' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80&fit=crop', size: 'medium', label: 'Treetop Treehouse' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop', size: 'medium', label: 'Guided Jungle Trek' },
];

export default function HomeGallery() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle reveal
      gsap.from('.gallery-tile', {
        scrollTrigger: {
          trigger: '.gallery-mosaic',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.95,
        y: 40,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(3rem, 5vw, 5rem)',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <span className="section-label">Moments</span>
            <h2 className="section-title" style={{ fontWeight: 800 }}>Explore blue bell.</h2>
          </div>
          <Link href="/gallery" className="btn btn-outline-dark" style={{ border: '2px solid var(--color-forest)' }}>
            View Full Gallery
          </Link>
        </div>

        {/* Mosaic Grid */}
        <div className="gallery-mosaic" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1rem',
          gridAutoRows: 'clamp(180px, 20vw, 280px)',
        }}>
          {images.map((img, i) => {
            let colSpan = 'span 4';
            let rowSpan = 'span 1';

            if (img.size === 'large') {
              colSpan = 'span 6';
              rowSpan = 'span 2';
            } else if (img.size === 'medium') {
              colSpan = 'span 6';
              rowSpan = 'span 1';
            }

            return (
              <div
                key={i}
                className="gallery-tile"
                style={{
                  gridColumn: colSpan,
                  gridRow: rowSpan,
                  position: 'relative',
                  borderRadius: 'var(--border-radius)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.02)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
                    const overlay = e.currentTarget.nextSibling as HTMLDivElement;
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                    const overlay = e.currentTarget.nextSibling as HTMLDivElement;
                    if (overlay) overlay.style.opacity = '0';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(15, 23, 42, 0.5)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: '#ffffff',
                  }}>{img.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
