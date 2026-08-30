'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { Review } from '@/types/review';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--brand-cyan)" style={{ flexShrink: 0 }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function ReviewsGrid({ reviews = [] }: { reviews: Review[] }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.review-full-card', 
        { opacity: 0, y: 45 },
        {
          scrollTrigger: { trigger: '.reviews-full-grid', start: 'top 75%' },
          opacity: 1, y: 0, duration: 0.9, stagger: 0.11, ease: 'power3.out',
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <span className="section-label">Guest Feedback</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>What Our Guests Say</h2>
          <div className="divider center" />
        </div>

        {/* Stats bar */}
        <div className="stats-bar" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          border: '1px solid rgba(6,181,211,0.12)',
          borderRadius: 'var(--radius)', overflow: 'hidden',
          marginBottom: 'clamp(2rem, 5vw, 5rem)',
          boxShadow: '0 4px 20px rgba(13,30,53,0.04)',
        }}>
          {[
            { label: 'Overall Rating', value: '4.9' },
            { label: 'Cleanliness',    value: '5.0' },
            { label: 'Service',        value: '4.9' },
            { label: 'Amenities',      value: '4.8' },
            { label: 'Location',       value: '4.9' },
            { label: 'Value',          value: '4.7' },
          ].map((s, i) => (
            <div key={s.label} className="stat-item" style={{
              background: i % 2 === 0 ? '#fff' : 'var(--color-bg-warm)',
              padding: 'clamp(1.2rem, 2.5vw, 2.2rem) clamp(1rem, 1.8vw, 1.5rem)', 
              textAlign: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 400, color: 'var(--brand-cyan-muted)', display: 'block', lineHeight: 1 }}>{s.value}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.75vw, 0.62rem)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-soft)', marginTop: '8px', display: 'block' }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div className="reviews-full-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(0.8rem, 1.8vw, 1.4rem)',
        }}>
          {reviews.map((r, i) => (
            <div key={i} className="review-full-card" style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid rgba(6,181,211,0.1)',
              padding: 'clamp(1.2rem, 2.5vw, 2.2rem)',
              boxShadow: '0 4px 20px rgba(13,30,53,0.04)',
              transition: 'all 0.35s var(--ease)',
            }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 16px 45px rgba(6,181,211,0.1)';
                el.style.transform = 'translateY(-4px)';
                el.style.borderColor = 'var(--brand-cyan)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 4px 20px rgba(13,30,53,0.04)';
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(6,181,211,0.1)';
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: 'clamp(0.8rem, 1.2vw, 1.1rem)' }}>
                {Array.from({ length: r.rating }).map((_, s) => <StarIcon key={s} />)}
              </div>

              {/* Text */}
              <p style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)', fontWeight: 300,
                color: 'var(--color-text-mid)', lineHeight: 1.7, marginBottom: 'clamp(1rem, 1.5vw, 1.4rem)',
              }}>"{r.text}"</p>

              {/* Author */}
              <div className="review-author" style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid rgba(13,30,53,0.07)', paddingTop: 'clamp(0.8rem, 1.2vw, 1.1rem)' }}>
                <div className="review-author-info">
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-text)', fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)', display: 'block' }}>{r.name}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.65rem, 0.85vw, 0.72rem)', color: 'var(--color-text-soft)' }}>{r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .stats-bar {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          .stat-item {
            padding: 1.2rem 0.8rem !important;
          }
          
          .stat-item:nth-child(4),
          .stat-item:nth-child(5) {
            border-top: 1px solid rgba(6,181,211,0.12);
          }
          
          .reviews-full-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .stats-bar {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .stat-item {
            padding: 1rem 0.6rem !important;
          }
          
          .stat-item:nth-child(odd) {
            border-right: 1px solid rgba(6,181,211,0.08);
          }
          
          .stat-item:nth-child(5) {
            grid-column: span 2;
          }
          
          .reviews-full-grid {
            grid-template-columns: 1fr !important;
            gap: 0.8rem !important;
          }
          
          .review-full-card {
            padding: 1.2rem !important;
          }
          
          .review-author-info span:last-child {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}