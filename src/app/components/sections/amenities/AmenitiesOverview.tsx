'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import amenityHero from '@/images/dome/AAL04291.webp';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { title: 'Ayurveda Wellness',   desc: 'Organic therapies by certified Ayurvedic doctors.' },
  { title: 'Geodesic Dome Pool',  desc: 'Heated pool with panoramic valley views.' },
  { title: 'Organic Dining',      desc: 'Farm-to-table Malabar cuisine, freshly harvested.' },
  { title: 'Nature Expeditions',  desc: 'Guided spice trails and jungle walks.' },
  { title: 'Sunrise Yoga',        desc: 'Open-air hilltop pavilion each morning.' },
  { title: 'Private Butler',      desc: 'Dedicated service around the clock.' },
];

export default function AmenitiesOverview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.am-overview-img', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        opacity: 0, x: -50, duration: 1, ease: 'power3.out',
      });
      gsap.from('.am-overview-text > *', {
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
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 5rem)' }}>
          <span className="section-label">At a Glance</span>
          <h2 className="section-title">Designed for Complete Rejuvenation</h2>
          <div className="divider center" />
          <p style={{ color: 'var(--color-text-soft)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.85 }}>
            From wellness therapies to guided outdoor adventure, every aspect of Blue Bell is crafted to create a deep, life-affirming sense of rest and escape.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }}>
          {/* Image */}
          <div className="am-overview-img" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 24px 70px rgba(13,30,53,0.1)' }}>
            <Image src={amenityHero} alt="Geodesic Dome pathways" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} placeholder="blur" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,46,0.8) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: '2.2rem', left: '2.2rem', right: '2.2rem' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--brand-cyan)', display: 'block', marginBottom: '0.6rem' }}>Signature Sanctuary</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 300, fontStyle: 'italic', color: '#fff', marginBottom: '0.6rem', lineHeight: 1.15 }}>Veda Spa &amp; Dome Retreat</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem', lineHeight: 1.7 }}>
                Revitalise body and spirit under certified Ayurvedic doctors in our forest-immersed dome sanctuary.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="am-overview-text">
            <span className="section-label">Resort Highlights</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.6vw, 2.4rem)', fontWeight: 400, color: 'var(--color-text)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Six Pillars of the Blue Bell Experience
            </h3>
            <div className="divider" />
            <p style={{ color: 'var(--color-text-soft)', marginBottom: '2rem', lineHeight: 1.85 }}>
              Each amenity is rooted in nature, guided by expertise, and perfected through genuine care.
            </p>

            <div className="am-highlights" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {highlights.map((item) => (
                <div key={item.title} className="am-hi" style={{
                  padding: '1.3rem',
                  background: 'var(--color-bg-accent)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid rgba(6,181,211,0.12)',
                  borderLeft: '3px solid var(--brand-cyan)',
                  transition: 'all 0.3s var(--ease)',
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = '#fff'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(6,181,211,0.1)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'var(--color-bg-accent)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
                >
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '3px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'var(--color-text-soft)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
