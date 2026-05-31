'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import amenityHero from '@/images/dome/AAL04280.webp';

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { icon: '🌿', title: 'Ayurveda Wellness',   desc: 'Ancient healing therapies tailored by certified Ayurvedic doctors.' },
  { icon: '🏊', title: 'Infinity Pool',        desc: 'A heated pool that dissolves into misty Wayanad valleys below.' },
  { icon: '🍃', title: 'Organic Dining',       desc: 'Farm-to-table cuisine bursting with vibrant Malabar spices.' },
  { icon: '🦅', title: 'Nature Expeditions',   desc: 'Guided spice trails and jungle walks with expert naturalists.' },
  { icon: '🧘', title: 'Sunrise Yoga',         desc: 'Open-air hilltop pavilion sessions at first light.' },
  { icon: '✨', title: 'Private Butler',        desc: 'Dedicated butler service catering to every personal request.' },
];

export default function HomeAmenities() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.amenity-item', {
        scrollTrigger: { trigger: '.amenities-grid', start: 'top 80%' },
        opacity: 0, y: 35, duration: 0.8, stagger: 0.08, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
        }}>
          {/* Left — hero image card */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/5' }}>
            <Image
              src={amenityHero}
              alt="Geodesic Dome Sanctuary"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              placeholder="blur"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(10,22,46,0.82) 0%, rgba(10,22,46,0.1) 55%)',
            }} />
            <div style={{ position: 'absolute', bottom: '2.2rem', left: '2.2rem', right: '2.2rem' }}>
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--brand-cyan)', display: 'block', marginBottom: '0.6rem',
              }}>Signature Wellness</span>
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400,
                color: '#fff', marginBottom: '0.8rem', lineHeight: 1.2,
              }}>Veda Spa Sanctuary</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', marginBottom: '1.4rem', lineHeight: 1.7 }}>
                Revitalise body and spirit under the guidance of certified Ayurvedic doctors.
              </p>
              <Link href="/amenities" className="btn btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.63rem' }}>
                Explore Wellness
              </Link>
            </div>
          </div>

          {/* Right — amenity list */}
          <div>
            <span className="section-label">Resort Amenities</span>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Designed for Complete Rejuvenation
            </h2>
            <div className="divider" />
            <p style={{ marginBottom: '2.2rem', color: 'var(--color-text-soft)' }}>
              From wellness therapies to guided outdoor adventure, every detail at Blue Bell is crafted to create a deep, life-affirming escape.
            </p>

            <div className="amenities-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {amenities.map((a) => (
                <div
                  key={a.title}
                  className="amenity-item"
                  style={{
                    padding: '1.3rem',
                    background: 'var(--color-bg-warm)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid rgba(6,181,211,0.1)',
                    transition: 'all 0.3s var(--ease)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = '#fff';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand-cyan)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(6,181,211,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = 'var(--color-bg-warm)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.1)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '0.6rem' }}>{a.icon}</span>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.4rem' }}>
                    {a.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--color-text-soft)' }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
