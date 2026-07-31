'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import wayanadMap from '@/images/amenities/wayanad map.webp';

gsap.registerPlugin(ScrollTrigger);

interface Attraction {
  name: string;
  category: string;
  distanceKm: number;
}

const attractions: Attraction[] = [
  { name: 'Periya Peak (Tea Factory)', category: 'Scenic Viewpoint', distanceKm: 5 },
  { name: 'Kunkichira Museum', category: 'Heritage', distanceKm: 12 },
  { name: 'Meenmutty Waterfalls', category: 'Waterfall', distanceKm: 15 },
  { name: 'Muneeswaran Kunnu', category: 'Trekking', distanceKm: 16 },
  { name: 'Pazhassi Museum', category: 'Heritage', distanceKm: 22 },
  { name: 'Banasura Sagar Dam', category: 'Reservoir', distanceKm: 45 },
  { name: 'Tholpetty Wildlife Sanctuary', category: 'Wildlife', distanceKm: 47 },
  { name: 'Thirunelli Temple', category: 'Temple', distanceKm: 49 },
];

const icons: Record<string, React.ReactNode> = {
  'Scenic Viewpoint': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2z" />
    </svg>
  ),
  Heritage: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10 12 3l10 7M6 22V10M10 22V10M14 22V10M18 22V10M3 22h18" />
    </svg>
  ),
  Waterfall: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z" />
    </svg>
  ),
  Trekking: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 17 6-6 4 4 8-8" /><path d="M17 7h4v4" />
    </svg>
  ),
  Reservoir: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    </svg>
  ),
  Wildlife: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  Temple: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 3 8v2h18V8L12 2Z" /><path d="M5 10v10M19 10v10M9 10v10M15 10v10M3 20h18" />
    </svg>
  ),
};

export default function HomeLocation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.location-map-frame', {
        scrollTrigger: { trigger: '.location-layout', start: 'top 80%' },
        opacity: 0, x: -30, duration: 1, ease: 'power3.out',
      });
      gsap.from('.attraction-row', {
        scrollTrigger: { trigger: '.attraction-list', start: 'top 85%' },
        opacity: 0, y: 18, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLElement>('.attraction-distance-num').forEach((el) => {
        const target = parseFloat(el.dataset.target || '0');
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.attraction-list', start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.val).toString();
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-tint">
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="section-label">Where We Are</span>
          <h2 className="section-title" style={{ marginBottom: '1.1rem' }}>Everything Wayanad, Close By</h2>
          <div className="divider center" />
          <p style={{ color: 'var(--color-text-soft)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: 1.9 }}>
            Tucked into the hills of Periya, Blue Bell sits within easy reach of Wayanad&rsquo;s waterfalls,
            wildlife sanctuaries, heritage sites and viewpoints — a quiet base to explore from.
          </p>
        </div>

        <div className="location-layout" style={{
          display: 'grid', gridTemplateColumns: '1.15fr 1fr',
          gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center',
        }}>
          {/* Map */}
          <div>
            <div className="location-map-frame" style={{
              position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              aspectRatio: '2540 / 1486', boxShadow: '0 25px 70px rgba(13,30,53,0.14)',
              border: '1px solid rgba(6,181,211,0.15)',
            }}>
              <Image
                src={wayanadMap}
                alt="Illustrated map of Wayanad showing Blue Bell's location and nearby attractions"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
                placeholder="blur"
              />
            </div>
            <p style={{
              textAlign: 'center', marginTop: '0.9rem',
              fontFamily: 'var(--font-sans)', fontSize: '0.72rem', letterSpacing: '0.06em',
              color: 'var(--color-text-soft)',
            }}>
              Blue Bell — Periya, Wayanad, Kerala 670644
            </p>
          </div>

          {/* Attractions list */}
          <div className="attraction-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {attractions.map((a) => (
              <div key={a.name} className="attraction-row" style={{
                display: 'flex', alignItems: 'center', gap: '0.9rem',
                padding: '0.75rem 1rem', background: '#fff', borderRadius: 'var(--radius)',
                border: '1px solid rgba(6,181,211,0.1)',
              }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                  background: 'var(--color-bg-accent)', color: 'var(--brand-cyan-muted)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {icons[a.category]}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{
                    display: 'block', fontFamily: 'var(--font-sans)', fontWeight: 600,
                    fontSize: 'clamp(0.82rem, 1.1vw, 0.9rem)', color: 'var(--color-text)',
                  }}>{a.name}</span>
                  <span style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.66rem', fontWeight: 600,
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-soft)',
                  }}>{a.category}</span>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0, display: 'flex', alignItems: 'baseline', gap: '3px' }}>
                  <span className="attraction-distance-num" data-target={a.distanceKm} style={{
                    fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', color: 'var(--brand-cyan-muted)',
                  }}>0</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', color: 'var(--color-text-soft)' }}>km</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .location-layout {
            grid-template-columns: 1fr !important;
            gap: 2.2rem !important;
          }
        }

        @media (max-width: 480px) {
          .attraction-row {
            padding: 0.65rem 0.8rem !important;
            gap: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
}
