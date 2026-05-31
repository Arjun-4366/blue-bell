'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import stay1 from '@/images/treehouse/zlkpjggmhq60elmgfepd.webp';
import stay2 from '@/images/dome/AAL04276.webp';
import stay3 from '@/images/treehouse/aaimgllqgfwqnt83tkgy.webp';
import stay4 from '@/images/treehouse/kfk86xvpr3wwf5hqmaf6.webp';
import stay5 from '@/images/dome/AAL04289.webp';
import room1 from '@/images/treehouseroom/ewaplievvophiiabfsyy.webp';
import room2 from '@/images/treehouseroom/cao4vmabymep8aciw3jd.webp';
import room3 from '@/images/treehouseroom/jfsbizpckypgmo97vt6c.webp';
import room4 from '@/images/treehouseroom/stnuoms2a4qlo3wwbgtg.webp';
import dine1 from '@/images/dining/DSC02122.webp';
import dine2 from '@/images/dining/DSC02001.webp';
import dine3 from '@/images/dining/DSC02002.webp';
import dine4 from '@/images/dining/DSC02021.webp';
import dome1 from '@/images/dome/AAL04280.webp';
import dome2 from '@/images/dome/AAL04291.webp';
import dome3 from '@/images/dome/AAL04292.webp';
import dome4 from '@/images/dome/AAL04311.webp';
import dome5 from '@/images/dome/AAL04317.webp';

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
      gsap.from('.gallery-filter-btn', {
        scrollTrigger: { trigger: '.gallery-filters', start: 'top 90%' },
        opacity: 0, y: 18, duration: 0.5, stagger: 0.06, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo('.gallery-item', { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out' });
  }, [activeCategory]);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container">
        {/* Filters */}
        <div className="gallery-filters" style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}>
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button key={cat} className="gallery-filter-btn" onClick={() => setActiveCategory(cat)} style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '0.6rem 1.4rem',
                border: `1.5px solid ${active ? 'var(--brand-cyan)' : 'rgba(13,30,53,0.12)'}`,
                background: active ? 'var(--brand-cyan)' : '#fff',
                color: active ? '#fff' : 'var(--color-text-soft)',
                borderRadius: '3px', cursor: 'pointer',
                transition: 'all 0.3s var(--ease)',
              }}
                onMouseEnter={(e) => { if (!active) { e.currentTarget.style.borderColor = 'var(--brand-cyan)'; e.currentTarget.style.color = 'var(--brand-cyan-muted)'; } }}
                onMouseLeave={(e) => { if (!active) { e.currentTarget.style.borderColor = 'rgba(13,30,53,0.12)'; e.currentTarget.style.color = 'var(--color-text-soft)'; } }}
              >{cat}</button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <div style={{ columns: 'auto 280px', gap: '14px' }}>
          {filtered.map((img, i) => (
            <div key={img.label + i} className="gallery-item" onClick={() => setLightbox(img)} style={{
              breakInside: 'avoid', marginBottom: '14px',
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
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,22,46,0.72) 0%, transparent 50%)',
                opacity: 0, transition: 'opacity 0.35s ease',
                display: 'flex', alignItems: 'flex-end', padding: '1.3rem',
                pointerEvents: 'none',
              }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, color: '#fff' }}>{img.label}</span>
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
          padding: '2rem', backdropFilter: 'blur(12px)',
        }}>
          <button onClick={() => setLightbox(null)} aria-label="Close lightbox" style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff', width: '44px', height: '44px', borderRadius: '50%',
            cursor: 'pointer', fontSize: '1.1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>✕</button>
          <img
            src={typeof lightbox.src === 'string' ? lightbox.src : lightbox.src.src}
            alt={lightbox.label}
            style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: 'var(--radius)' }}
            onClick={(e) => e.stopPropagation()}
          />
          <span style={{
            position: 'absolute', bottom: '2rem', fontFamily: 'var(--font-sans)',
            fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)',
          }}>{lightbox.label}</span>
        </div>
      )}
    </section>
  );
}
