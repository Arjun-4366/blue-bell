'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { stayCategories, getStaysByCategory, formatRate } from '@/data/stays';
import RotatingStayImage from './RotatingStayImage';

gsap.registerPlugin(ScrollTrigger);

export default function StaysList() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stay-card',
        { opacity: 0, y: 45 },
        {
          scrollTrigger: { trigger: '.stays-full-list', start: 'top 80%' },
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        }
      );
      gsap.fromTo(
        '.stay-category-block',
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: '.stays-full-list', start: 'top 85%' },
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 5.5rem)' }}>
          <span className="section-label">Our Accommodations</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Choose Your Sanctuary</h2>
          <div className="divider center" />
        </div>

        <div className="stays-full-list" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5.5rem)' }}>
          {stayCategories.map((category) => {
            const categoryStays = getStaysByCategory(category.slug);
            if (categoryStays.length === 0) return null;

            return (
              <div key={category.slug} className="stay-category-block">
                <div className="stay-category-header" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', maxWidth: '760px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 400, color: 'var(--color-text)', marginBottom: '0.7rem' }}>
                    {category.name}
                  </h3>
                  <p style={{ fontSize: 'clamp(0.85rem, 1.1vw, 0.92rem)', lineHeight: 1.85, color: 'var(--color-text-soft)' }}>
                    {category.description}
                  </p>
                </div>

                <div className="stays-full-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'clamp(1rem, 2.5vw, 1.8rem)',
                }}>
                  {categoryStays.map((stay) => (
                    <div key={stay.slug} className="stay-card" style={{
                      background: '#fff', borderRadius: 'var(--radius)',
                      overflow: 'hidden',
                      boxShadow: '0 4px 24px rgba(13,30,53,0.05)',
                      border: '1px solid rgba(6,181,211,0.08)',
                      transition: 'transform 0.4s var(--ease), box-shadow 0.4s var(--ease)',
                    }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 55px rgba(13,30,53,0.1)';
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(13,30,53,0.05)';
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.08)';
                      }}
                    >
                      {/* Image */}
                      <div className="stay-image" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                        <div className="stay-image-zoom" style={{ position: 'absolute', inset: 0, transition: 'transform 0.6s var(--ease)' }}>
                          <RotatingStayImage
                            images={stay.images}
                            alt={stay.name}
                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                          />
                        </div>
                        <span className="stay-tag" style={{
                          position: 'absolute', top: '0.9rem', left: '0.9rem',
                          background: 'var(--brand-cyan)', color: '#fff',
                          fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.75vw, 0.6rem)', fontWeight: 700,
                          letterSpacing: '0.12em', textTransform: 'uppercase',
                          padding: '5px 12px', borderRadius: '2px',
                        }}>{category.shortName} · {stay.code}</span>
                        <div className="stay-info-badge" style={{
                          position: 'absolute', bottom: '0.9rem', right: '0.9rem',
                          background: 'rgba(10,22,46,0.8)', backdropFilter: 'blur(8px)',
                          padding: '5px 12px', borderRadius: '3px',
                        }}>
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 0.8vw, 0.65rem)', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
                            {stay.acType} · {stay.guestsLabel}
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <div style={{ padding: 'clamp(1.1rem, 2vw, 1.6rem)' }}>
                        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)', fontWeight: 400, color: 'var(--color-text)', marginBottom: '0.4rem' }}>
                          {stay.name}
                        </h4>
                        <p style={{ fontSize: 'clamp(0.8rem, 1vw, 0.85rem)', color: 'var(--color-text-soft)', marginBottom: '1rem' }}>
                          {stay.tagline}
                        </p>

                        <div className="stay-footer" style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          paddingTop: 'clamp(0.8rem, 1.2vw, 1rem)', borderTop: '1px solid rgba(13,30,53,0.07)',
                        }}>
                          <div>
                            <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-soft)' }}>From</span>
                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)', color: 'var(--color-text)' }}>
                              {formatRate(stay.rate)}<span style={{ fontSize: '0.65rem', color: 'var(--color-text-soft)' }}> /night</span>
                            </span>
                          </div>
                          <Link href={`/stays/${stay.slug}`} className="btn btn-primary" style={{ padding: 'clamp(0.55rem, 0.8vw, 0.6rem) clamp(1rem, 1.6vw, 1.3rem)', fontSize: 'clamp(0.56rem, 0.75vw, 0.6rem)' }}>
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .stay-image:hover .stay-image-zoom {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .stays-full-grid {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
            gap: 1.2rem !important;
          }
        }

        @media (max-width: 480px) {
          .stays-full-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .stay-tag {
            top: 0.7rem !important;
            left: 0.7rem !important;
            font-size: 0.55rem !important;
            padding: 4px 10px !important;
          }

          .stay-info-badge {
            bottom: 0.7rem !important;
            right: 0.7rem !important;
          }

          .stay-footer {
            flex-direction: column;
            gap: 0.9rem;
            align-items: flex-start !important;
          }

          .stay-footer .btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
