'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const amenityHero = 'https://images.unsplash.com/photo-1758272960816-6126b6607596?w=1600&q=80&fit=crop';

const highlights = [
  { title: 'Campfire Evenings',   desc: 'Gather around the fire pit as the sun goes down over Periya.' },
  { title: 'Barbecue Nights',     desc: 'Charcoal-grilled classics, cooked fresh most evenings.' },
  { title: "Kids' Play Park",     desc: 'A dedicated play area for the younger guests to run around.' },
  { title: 'Indoor Games Room',   desc: 'Carrom and board games for slow afternoons.' },
];

export default function AmenitiesOverview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.am-overview-img', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        opacity: 0, x: -50, duration: 1, ease: 'power3.out',
      });
      gsap.from('.am-overview-intro-el', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        opacity: 0, y: 35, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      });
      gsap.from('.am-hi', {
        scrollTrigger: { trigger: '.am-highlights', start: 'top 85%' },
        opacity: 0, y: 25, duration: 0.7, stagger: 0.07, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: 'linear-gradient(to bottom, var(--color-bg-warm), #fff)' }}>
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
        <div className="am-header" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 5rem)' }}>
          <span className="section-label">At a Glance</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Simple Amenities, Done Right</h2>
          <div className="divider center" />
          <p style={{ color: 'var(--color-text-soft)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.85, fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)' }}>
            No spa menus or itineraries — just a handful of amenities built around how our guests actually like to spend an evening.
          </p>
        </div>

        <div className="am-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 6vw, 6rem)', alignItems: 'center' }}>
          {/* Image */}
          <div className="am-overview-img" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 24px 70px rgba(13,30,53,0.1)' }}>
            <Image src={amenityHero} alt="Guests gathered around the campfire at dusk" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            <div className="am-image-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,46,0.8) 0%, transparent 55%)' }} />
            <div className="am-image-content" style={{ position: 'absolute', bottom: 'clamp(1.5rem, 2.5vw, 2.2rem)', left: 'clamp(1.5rem, 2.5vw, 2.2rem)', right: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.8vw, 0.62rem)', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--brand-cyan)', display: 'block', marginBottom: '0.6rem' }}>Evening Ritual</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.4vw, 2rem)', fontWeight: 300, fontStyle: 'italic', color: '#fff', marginBottom: '0.6rem', lineHeight: 1.15 }}>Campfire Nights</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.78rem, 1vw, 0.87rem)', lineHeight: 1.7 }}>
                Most evenings end the same way — gathered around the fire pit, Periya's cool night air settling in.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="am-overview-text">
            <span className="section-label am-overview-intro-el">What&apos;s Included</span>
            <h3 className="am-overview-intro-el" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.6vw, 2.4rem)', fontWeight: 400, color: 'var(--color-text)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Four Amenities, Built Right
            </h3>
            <div className="divider am-overview-intro-el" />
            <p className="am-overview-intro-el" style={{ color: 'var(--color-text-soft)', marginBottom: 'clamp(1.5rem, 2vw, 2rem)', lineHeight: 1.85, fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)' }}>
              No filler, no padded spa menu — just the amenities guests actually use.
            </p>

            <div className="am-highlights" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(0.6rem, 1vw, 1rem)' }}>
              {highlights.map((item) => (
                <div key={item.title} className="am-hi" style={{
                  padding: 'clamp(0.9rem, 1.5vw, 1.3rem)',
                  background: 'var(--color-bg-accent)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid rgba(6,181,211,0.12)',
                  borderLeft: '3px solid var(--brand-cyan)',
                  transition: 'all 0.3s var(--ease)',
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#fff'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(6,181,211,0.1)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'var(--color-bg-accent)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                >
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '3px' }}>{item.title}</h4>
                  <p style={{ fontSize: 'clamp(0.7rem, 0.9vw, 0.78rem)', lineHeight: 1.6, color: 'var(--color-text-soft)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .am-layout {
            gap: 2.5rem !important;
          }
          
          .am-overview-img {
            aspect-ratio: 3/2 !important;
            max-height: 400px;
          }
          
          .am-image-overlay {
            background: linear-gradient(to top, rgba(10,22,46,0.85) 0%, transparent 60%) !important;
          }
          
          .am-highlights {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.7rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .am-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .am-header {
            text-align: center;
          }
          
          .am-overview-img {
            aspect-ratio: 4/3 !important;
            max-height: 350px;
          }
          
          .am-image-content {
            bottom: 1.2rem !important;
            left: 1.2rem !important;
            right: 1.2rem !important;
          }
          
          .am-image-content h3 {
            font-size: 1.3rem !important;
          }
          
          .am-overview-text {
            text-align: center;
          }
          
          .am-overview-text .divider {
            margin-left: auto;
            margin-right: auto;
          }
          
          .am-highlights {
            grid-template-columns: 1fr !important;
            gap: 0.6rem !important;
          }
          
          .am-hi {
            padding: 1rem !important;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}