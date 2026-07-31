'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Stay } from '@/data/stays';

gsap.registerPlugin(ScrollTrigger);

const checkIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

interface StayDetailInfoProps {
  stay: Stay;
}

export default function StayDetailInfo({ stay }: StayDetailInfoProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stay-info-block',
        { opacity: 0, y: 40 },
        {
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-tint">
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div className="stay-info-grid" style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr',
          gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'start',
        }}>
          {/* Description + features */}
          <div className="stay-info-block">
            <span className="section-label">About This Stay</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', marginBottom: '1rem' }}>{stay.name}</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--color-text-mid)' }}>{stay.description}</p>

            <h3 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
              color: 'var(--color-text)', margin: 'clamp(1.8rem, 3vw, 2.4rem) 0 1rem',
            }}>Room Features</h3>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', listStyle: 'none' }}>
              {stay.features.map((f) => (
                <li key={f} style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500,
                  color: 'var(--color-text-mid)', background: '#fff',
                  padding: '7px 14px', borderRadius: '20px', border: '1px solid rgba(6,181,211,0.15)',
                }}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Inclusions card */}
          <div className="stay-info-block">
            <div style={{
              background: '#fff', borderRadius: 'var(--radius-lg)', padding: 'clamp(1.4rem, 2.5vw, 2rem)',
              border: '1px solid rgba(6,181,211,0.12)', boxShadow: '0 12px 40px rgba(13,30,53,0.05)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
                color: 'var(--color-text)', marginBottom: '1.1rem',
              }}>What&rsquo;s Included</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', listStyle: 'none' }}>
                {stay.inclusions.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--color-text-mid)', lineHeight: 1.5 }}>
                    <span style={{
                      width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                      background: 'var(--color-bg-accent)', color: 'var(--brand-cyan-muted)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px',
                    }}>{checkIcon}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .stay-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
