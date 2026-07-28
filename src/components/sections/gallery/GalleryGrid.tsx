'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import stay1 from '@/images/treehouse/treehouse-7.webp';
import stay2 from '@/images/dome/dome-1.webp';
import stay3 from '@/images/treehouse/treehouse-1.webp';
import stay4 from '@/images/treehouse/treehouse-5.webp';
import stay5 from '@/images/dome/dome-4.webp';
import room1 from '@/images/treehouseroom/treehouseroom-3.webp';
import room2 from '@/images/treehouseroom/treehouseroom-1.webp';
import room3 from '@/images/treehouseroom/treehouseroom-5.webp';
import room4 from '@/images/treehouseroom/treehouseroom-7.webp';
import dine1 from '@/images/dining/dining-5.webp';
import dine2 from '@/images/dining/dining-1.webp';
import dine3 from '@/images/dining/dining-2.webp';
import dine4 from '@/images/dining/dining-4.webp';
import dome1 from '@/images/dome/dome-2.webp';
import dome2 from '@/images/dome/dome-5.webp';
import dome3 from '@/images/dome/dome-6.webp';
import dome4 from '@/images/dome/dome-8.webp';
import dome5 from '@/images/dome/dome-12.webp';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Stays', 'Interiors', 'Dining', 'Domes'];

const allImages = [
  { src: stay1, cat: 'Stays',     label: 'Canopy Treehouse Exterior' },
  { src: dome1, cat: 'Domes',     label: 'Earthen Dome Pathway' },
  { src: room1, cat: 'Interiors', label: 'Cozy Wood Treetop Interior' },
  { src: dine2, cat: 'Dining',    label: 'Gourmet Malabar Dining' },
  { src: stay3, cat: 'Stays',     label: 'Whispering Bamboo Treehouse' },
  { src: dome2, cat: 'Domes',     label: 'Geodesic Mud Dome Pathways' },
  { src: room2, cat: 'Interiors', label: 'Luxury Treehouse Studio' },
  { src: stay2, cat: 'Stays',     label: 'Earthen Dome Sanctuary' },
  { src: dine1, cat: 'Dining',    label: 'Blue Bell Main Lodge' },
  { src: stay5, cat: 'Stays',     label: 'Geodesic Dome Poolside View' },
  { src: room3, cat: 'Interiors', label: 'High Canopy Balcony Suite' },
  { src: dome3, cat: 'Domes',     label: 'Tropical Earthen Dome Bridge' },
  { src: stay4, cat: 'Stays',     label: 'Misty Treehouse High Canopy' },
  { src: dine3, cat: 'Dining',    label: 'Lodge Patio Seating' },
  { src: dome4, cat: 'Domes',     label: 'Earthen Archway Sculptures' },
  { src: room4, cat: 'Interiors', label: 'Geometric Wooden Ceilings' },
  { src: dine4, cat: 'Dining',    label: 'Lodge Evening Dining Area' },
  { src: dome5, cat: 'Domes',     label: 'Valley View from Earthen Dome' },
];

export default function GalleryGrid() {
  const ref = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<{ src: any; label: string } | null>(null);
  const filtered = activeCategory === 'All' ? allImages : allImages.filter((i) => i.cat === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-filter-btn', 
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo('.gallery-item', { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out' });
  }, [activeCategory]);

  // Close lightbox with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    if (lightbox) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
        {/* Filters */}
        <div className="gallery-filters" style={{ 
          display: 'flex', gap: 'clamp(0.4rem, 0.8vw, 0.6rem)', 
          flexWrap: 'wrap', justifyContent: 'center', 
          marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          padding: '0',
        }}>
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button key={cat} className="gallery-filter-btn" onClick={() => setActiveCategory(cat)} style={{
                fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 0.85vw, 0.68rem)', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: 'clamp(0.5rem, 0.8vw, 0.6rem) clamp(1rem, 1.8vw, 1.4rem)',
                border: `1.5px solid ${active ? 'var(--brand-cyan)' : 'rgba(13,30,53,0.12)'}`,
                background: active ? 'var(--brand-cyan)' : '#fff',
                color: active ? '#fff' : 'var(--color-text-soft)',
                borderRadius: '3px', cursor: 'pointer',
                transition: 'all 0.3s var(--ease)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
                onMouseEnter={(e) => { if (!active) { e.currentTarget.style.borderColor = 'var(--brand-cyan)'; e.currentTarget.style.color = 'var(--brand-cyan-muted)'; } }}
                onMouseLeave={(e) => { if (!active) { e.currentTarget.style.borderColor = 'rgba(13,30,53,0.12)'; e.currentTarget.style.color = 'var(--color-text-soft)'; } }}
              >{cat}</button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <div className="gallery-masonry" style={{ columns: 'auto 280px', gap: 'clamp(10px, 1.5vw, 14px)' }}>
          {filtered.map((img, i) => (
            <div key={img.label + i} className="gallery-item" onClick={() => setLightbox(img)} style={{
              breakInside: 'avoid', marginBottom: 'clamp(10px, 1.5vw, 14px)',
              borderRadius: 'var(--radius)', overflow: 'hidden',
              cursor: 'pointer', position: 'relative',
              boxShadow: '0 4px 20px rgba(13,30,53,0.04)',
            }}>
              <Image src={img.src} alt={img.label}
                style={{ width: '100%', display: 'block', transition: 'transform 0.55s var(--ease)' }}
                placeholder="blur"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                  const o = e.currentTarget.nextSibling as HTMLElement;
                  if (o) o.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                  const o = e.currentTarget.nextSibling as HTMLElement;
                  if (o) o.style.opacity = '0';
                }}
              />
              <div className="gallery-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,22,46,0.72) 0%, transparent 50%)',
                opacity: 0, transition: 'opacity 0.35s ease',
                display: 'flex', alignItems: 'flex-end', padding: 'clamp(0.8rem, 1.5vw, 1.3rem)',
                pointerEvents: 'none',
              }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)', fontWeight: 500, color: '#fff' }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(10,22,46,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(1rem, 3vw, 2rem)', backdropFilter: 'blur(12px)',
        }}>
          <button onClick={() => setLightbox(null)} aria-label="Close lightbox" style={{
            position: 'absolute', top: 'clamp(1rem, 2vw, 1.5rem)', right: 'clamp(1rem, 2vw, 1.5rem)',
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', width: 'clamp(38px, 5vw, 44px)', height: 'clamp(38px, 5vw, 44px)', borderRadius: '50%',
            cursor: 'pointer', fontSize: '1.1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1,
          }}>✕</button>
          <img
            src={typeof lightbox.src === 'string' ? lightbox.src : lightbox.src.src}
            alt={lightbox.label}
            style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: 'var(--radius)' }}
            onClick={(e) => e.stopPropagation()}
          />
          <span style={{
            position: 'absolute', bottom: 'clamp(1rem, 2vw, 2rem)', fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.7rem, 0.9vw, 0.82rem)', color: 'rgba(255,255,255,0.5)',
            textAlign: 'center', padding: '0 1rem',
          }}>{lightbox.label}</span>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .gallery-filters {
            gap: 0.5rem !important;
          }
          
          .gallery-filter-btn {
            padding: 0.5rem 1rem !important;
            font-size: 0.62rem !important;
            flex: 0 0 auto;
          }
          
          .gallery-masonry {
            columns: auto 240px !important;
          }
          
          .gallery-overlay {
            opacity: 0.5 !important;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-filters {
            gap: 0.4rem !important;
            justify-content: flex-start !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 0.5rem !important;
            scrollbar-width: none;
            -ms-overflow-style: none;
            width: 100%;
          }
          
          .gallery-filters::-webkit-scrollbar {
            display: none;
          }
          
          .gallery-filter-btn {
            padding: 0.45rem 0.9rem !important;
            font-size: 0.6rem !important;
            flex-shrink: 0 !important;
          }
          
          .gallery-masonry {
            columns: 2 !important;
            gap: 8px !important;
          }
          
          .gallery-item {
            margin-bottom: 8px !important;
          }
          
          .gallery-overlay {
            opacity: 0.6 !important;
            padding: 0.7rem !important;
          }
          
          .gallery-overlay span {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}