'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Stays', 'Dining', 'Spa & Wellness', 'Nature', 'Pool', 'Events'];

const allImages = [
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80&fit=crop', cat: 'Pool', label: 'Forest Pool Villa' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80&fit=crop', cat: 'Nature', label: 'Wayanad Hills' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80&fit=crop', cat: 'Spa & Wellness', label: 'Ayurveda Treatment' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&fit=crop', cat: 'Dining', label: 'Kerala Fine Dining' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80&fit=crop', cat: 'Stays', label: 'Treehouse Suite' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80&fit=crop', cat: 'Nature', label: 'Sunrise Trek' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700&q=80&fit=crop', cat: 'Stays', label: 'Family Bungalow' },
  { src: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=700&q=80&fit=crop', cat: 'Pool', label: 'Infinity Pool' },
  { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=80&fit=crop', cat: 'Dining', label: 'Kerala Breakfast' },
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=700&q=80&fit=crop', cat: 'Events', label: 'Cultural Evening' },
  { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&q=80&fit=crop', cat: 'Stays', label: 'Heritage Cottage' },
  { src: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=700&q=80&fit=crop', cat: 'Nature', label: 'Spice Garden' },
  { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=700&q=80&fit=crop', cat: 'Stays', label: 'Luxury Room Interior' },
  { src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=80&fit=crop', cat: 'Nature', label: 'Aerial View' },
  { src: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=700&q=80&fit=crop', cat: 'Nature', label: 'Wayanad Spices' },
  { src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=700&q=80&fit=crop', cat: 'Pool', label: 'Evening Swim' },
  { src: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=700&q=80&fit=crop', cat: 'Nature', label: 'Valley View' },
  { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80&fit=crop', cat: 'Nature', label: 'Rainforest Morning' },
];

export default function GalleryGrid() {
  const ref = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  const filtered = activeCategory === 'All' ? allImages : allImages.filter((i) => i.cat === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-filter-btn', {
        scrollTrigger: { trigger: '.gallery-filters', start: 'top 90%' },
        opacity: 0, y: 20, duration: 0.5, stagger: 0.06, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo('.gallery-item',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out' }
    );
  }, [activeCategory]);

  return (
    <section ref={ref} className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Filters */}
        <div className="gallery-filters" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className="gallery-filter-btn"
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '0.65rem 1.6rem',
                border: '2px solid',
                borderColor: activeCategory === cat ? 'var(--color-sage)' : 'rgba(241, 245, 249, 1)',
                background: activeCategory === cat ? 'var(--color-sage)' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : 'var(--color-text-light)',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.01)',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'var(--color-sage)';
                  e.currentTarget.style.color = 'var(--color-sage)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'rgba(241, 245, 249, 1)';
                  e.currentTarget.style.color = 'var(--color-text-light)';
                }
              }}
            >{cat}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          columns: 'auto 300px',
          gap: '16px',
        }}>
          {filtered.map((img, i) => (
            <div
              key={img.src + i}
              className="gallery-item"
              onClick={() => setLightbox(img)}
              style={{
                breakInside: 'avoid',
                marginBottom: '16px',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)',
                border: '1px solid rgba(241, 245, 249, 1)',
              }}
            >
              <img
                src={img.src}
                alt={img.label}
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                  const overlay = e.currentTarget.nextSibling as HTMLElement;
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                  const overlay = e.currentTarget.nextSibling as HTMLElement;
                  if (overlay) overlay.style.opacity = '0';
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(15, 23, 42, 0.55)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '0.05em',
                }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'none', border: 'none',
              color: '#fff', fontSize: '2rem', cursor: 'pointer',
            }}
          >✕</button>
          <img
            src={lightbox.src.replace('w=700', 'w=1200')}
            alt={lightbox.label}
            style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: 'var(--border-radius)' }}
            onClick={(e) => e.stopPropagation()}
          />
          <span style={{
            position: 'absolute', bottom: '2rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)',
            fontWeight: 600,
          }}>{lightbox.label}</span>
        </div>
      )}
    </section>
  );
}
