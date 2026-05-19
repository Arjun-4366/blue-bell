'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { icon: '🌿', title: 'Ayurveda Wellness', desc: 'Indulge in ancient, healing Ayurvedic therapies tailored specifically for you.' },
  { icon: '🏊', title: 'Infinity Pool', desc: 'Our heated pool blends seamlessly with the misty valleys and green treetops.' },
  { icon: '🍃', title: 'Organic Dining', desc: 'Savor organic farm-to-table cuisine bursting with vibrant Malabar spices.' },
  { icon: '🦅', title: 'Nature Expeditions', desc: 'Explore the local spice trails and lush valleys with our expert naturalists.' },
  { icon: '🧘', title: 'Sunrise Yoga', desc: 'Align your energy with nature on our beautiful hillside open-air pavilion.' },
  { icon: '✨', title: 'Private Butler', desc: 'Relax completely with custom butler service catering to your every request.' },
];

export default function HomeAmenities() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal items
      gsap.from('.amenity-item', {
        scrollTrigger: {
          trigger: '.amenities-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
        }}>
          {/* Left panel - Hero Amenity */}
          <div style={{ position: 'relative', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', aspectRatio: '4/5' }}>
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=85&fit=crop"
              alt="Ayurvedic oil massage"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 60%)',
            }} />
            <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', right: '2.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                display: 'block',
                marginBottom: '0.75rem',
              }}>Signature Treatment</span>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}>Veda Spa Sanctuary</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Revitalize your body and spirit under the guidance of certified Ayurvedic doctors.
              </p>
              <Link href="/amenities" className="btn btn-gold" style={{ padding: '0.65rem 1.6rem', fontSize: '0.68rem' }}>
                Explore Spa Services
              </Link>
            </div>
          </div>

          {/* Right panel - Grid list */}
          <div>
            <span className="section-label">Resort Amenities</span>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', fontWeight: 800 }}>Designed for Complete Rejuvenation</h2>
            <div className="divider" />
            <p style={{ marginBottom: '2.5rem' }}>
              From wellness therapies to guided outdoor adventure, every aspect of blue bell. has been crafted to create a deep, life-affirming sense of rest and escape.
            </p>

            <div className="amenities-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
            }}>
              {amenities.map((amenity) => (
                <div
                  key={amenity.title}
                  className="amenity-item"
                  style={{
                    padding: '1.5rem',
                    background: 'var(--color-cream-dark)',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid rgba(241, 245, 249, 1)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-sage)';
                    (e.currentTarget as HTMLDivElement).style.background = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(241, 245, 249, 1)';
                    (e.currentTarget as HTMLDivElement).style.background = 'var(--color-cream-dark)';
                  }}
                >
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{amenity.icon}</span>
                  <h4 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-forest)',
                    marginBottom: '0.5rem',
                  }}>{amenity.title}</h4>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.5 }}>{amenity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
