'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gallery1 from '@/images/treehouse/treehouse-7.webp';
import gallery2 from '@/images/dome/dome-3.webp';
import gallery3 from '@/images/treehouse/treehouse-3.webp';
import gallery4 from '@/images/dome/dome-15.jpeg';
import gallery5 from '@/images/dining/dining-4.webp';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: gallery1, size: 'large', label: 'Tree trunk' },
  { src: gallery2, size: 'small', label: 'Ceaser Canopy' },
  { src: gallery3, size: 'small', label: 'Tree Hut' },
  { src: gallery4, size: 'small', label: 'Simbas Den' },
  { src: gallery5, size: 'small', label: 'Dining' },
];

export default function HomeGallery() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-tile', {
        scrollTrigger: { trigger: '.gallery-mosaic', start: 'top 80%' },
        opacity: 0, scale: 0.96, y: 30, duration: 1, stagger: 0.1, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-tint">
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        {/* Header */}
        <div className="gallery-header" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 'clamp(2rem, 4vw, 4.5rem)', flexWrap: 'wrap', gap: '1.5rem',
        }}>
          <div>
            <span className="section-label">Moments</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Explore Blue Bell</h2>
          </div>
          <Link href="/gallery" className="btn btn-outline-dark">View Full Gallery</Link>
        </div>

        {/* Mosaic grid */}
        <div className="gallery-mosaic" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(0.5rem, 1vw, 0.85rem)',
          gridAutoRows: 'clamp(140px, 18vw, 260px)',
        }}>
          {images.map((img, i) => {
            const colSpan = img.size === 'large' ? 'span 6' : 'span 3';
            const rowSpan = img.size === 'large' ? 'span 2' : 'span 1';
            return (
              <div key={i} className="gallery-tile" data-size={img.size} style={{
                gridColumn: colSpan, gridRow: rowSpan,
                position: 'relative', borderRadius: 'var(--radius)',
                overflow: 'hidden', cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(13,30,53,0.04)',
              }}>
                <Image src={img.src} alt={img.label}
                  fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.7s var(--ease)' }}
                  placeholder="blur"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)';
                    const overlay = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLDivElement;
                    if (overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                    const overlay = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLDivElement;
                    if (overlay) overlay.style.opacity = '0';
                  }}
                />
                <div className="gallery-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,22,46,0.72) 0%, transparent 50%)',
                  display: 'flex', alignItems: 'flex-end', padding: 'clamp(1rem, 1.5vw, 1.4rem)',
                  opacity: 0, transition: 'opacity 0.4s ease', pointerEvents: 'none',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.72rem, 1vw, 0.82rem)', fontWeight: 500,
                    letterSpacing: '0.04em', color: '#fff',
                  }}>{img.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .gallery-header {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
          
          .gallery-mosaic {
            grid-template-columns: repeat(6, 1fr) !important;
            gap: 0.6rem !important;
            grid-auto-rows: clamp(120px, 25vw, 200px) !important;
          }

          .gallery-tile[data-size="large"] {
            grid-column: span 6 !important;
            grid-row: span 1 !important;
          }

          .gallery-tile[data-size="small"] {
            grid-column: span 3 !important;
            grid-row: span 1 !important;
          }
          
          .gallery-overlay {
            opacity: 0.6 !important;
            background: linear-gradient(to top, rgba(10,22,46,0.8) 0%, transparent 60%) !important;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-header {
            text-align: center;
            align-items: center !important;
          }
          
          .gallery-header > div {
            text-align: center;
            width: 100%;
          }
          
          .gallery-header .btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          
          .gallery-mosaic {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.5rem !important;
            grid-auto-rows: clamp(100px, 30vw, 160px) !important;
          }

          .gallery-tile[data-size="large"] {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }

          .gallery-tile[data-size="small"] {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          
          .gallery-overlay {
            opacity: 0.7 !important;
            padding: 0.8rem !important;
          }
          
          .gallery-overlay span {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
}