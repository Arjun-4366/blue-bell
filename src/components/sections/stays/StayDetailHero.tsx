'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Stay, StayCategory, formatRate } from '@/data/stays';

interface StayDetailHeroProps {
  stay: Stay;
  category: StayCategory;
}

export default function StayDetailHero({ stay, category }: StayDetailHeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (stay.images.length <= 1) return;
    const id = setInterval(() => setActiveIdx((i) => (i + 1) % stay.images.length), 4000);
    return () => clearInterval(id);
  }, [stay.images.length]);

  return (
    <section className="section" style={{ background: '#fff', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <Link href="/stays" className="stay-back-link" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--brand-cyan-muted)', marginBottom: 'clamp(1.5rem, 3vw, 2.2rem)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          All Stays
        </Link>

        <div className="stay-hero-grid" style={{
          display: 'grid', gridTemplateColumns: '1.25fr 1fr',
          gap: 'clamp(1.5rem, 4vw, 3.5rem)', alignItems: 'start',
        }}>
          {/* Gallery */}
          <div style={{ minWidth: 0 }}>
            <div style={{
              position: 'relative', aspectRatio: '4/3', borderRadius: 'var(--radius-lg)',
              overflow: 'hidden', boxShadow: '0 20px 60px rgba(13,30,53,0.1)',
            }}>
              {stay.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${stay.name} — view ${i + 1}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  style={{
                    objectFit: 'cover', position: 'absolute', inset: 0,
                    opacity: i === activeIdx ? 1 : 0,
                    transition: 'opacity 1.2s ease',
                    filter: 'brightness(1.12)',
                  }}
                  placeholder="blur"
                  priority={i === 0}
                />
              ))}
              <span style={{
                position: 'absolute', top: '1rem', left: '1rem',
                background: 'var(--brand-cyan)', color: '#fff',
                fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '6px 14px', borderRadius: '2px',
              }}>{category.shortName} · {stay.code}</span>
            </div>

            {stay.images.length > 1 && (
              <div className="stay-thumb-row" style={{ display: 'flex', gap: '0.7rem', marginTop: '0.9rem' }}>
                {stay.images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Show image ${i + 1} of ${stay.name}`}
                    style={{
                      position: 'relative', width: '84px', height: '64px', flexShrink: 0,
                      borderRadius: '8px', overflow: 'hidden', padding: 0, cursor: 'pointer',
                      border: i === activeIdx ? '2px solid var(--brand-cyan)' : '2px solid transparent',
                      opacity: i === activeIdx ? 1 : 0.65,
                      transition: 'opacity 0.25s ease, border-color 0.25s ease',
                    }}
                  >
                    <Image src={img} alt="" fill sizes="84px" style={{ objectFit: 'cover', filter: 'brightness(1.12)' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div style={{ minWidth: 0 }}>
            <span className="section-label">{category.name}</span>
            <h1 style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)',
              fontWeight: 400, color: 'var(--color-text)', lineHeight: 1.15,
            }}>{stay.name}</h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-mid)', margin: '0.7rem 0 0' }}>{stay.tagline}</p>
            <div className="divider" />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', margin: '1.2rem 0 1.6rem' }}>
              {[stay.acType, stay.guestsLabel, stay.hasPrivatePool ? 'Private Pool' : 'Shared Pool Access'].map((chip) => (
                <span key={chip} style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 500,
                  color: 'var(--color-text-mid)', background: 'var(--color-bg-accent)',
                  padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(6,181,211,0.15)',
                }}>{chip}</span>
              ))}
            </div>

            <div style={{
              background: 'var(--color-bg-accent)', padding: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              borderRadius: 'var(--radius)', border: '1px solid rgba(6,181,211,0.15)',
            }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-cyan-muted)' }}>Starting At</span>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', color: 'var(--color-text)', margin: '0.3rem 0' }}>
                {formatRate(stay.rate)}<span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--color-text-soft)', fontWeight: 500 }}> / night</span>
              </div>
              <p style={{ fontSize: '0.83rem', color: 'var(--color-text-mid)' }}>{stay.mealPlan}</p>
              <p style={{ fontSize: '0.7rem', color: 'var(--color-text-soft)', marginTop: '0.3rem' }}>Rates are tax inclusive.</p>
            </div>

            <div className="stay-hero-cta" style={{ display: 'flex', gap: '0.8rem', marginTop: 'clamp(1.2rem, 2.5vw, 1.6rem)', flexWrap: 'wrap' }}>
              <Link href="/book-now" className="btn btn-primary">Book This Stay</Link>
              <Link href="/contact" className="btn btn-outline-dark">Enquire Now</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .stay-hero-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .stay-thumb-row {
            overflow-x: auto;
          }

          .stay-hero-cta .btn {
            flex: 1 1 auto;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
