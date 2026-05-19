'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: '🌿', title: 'Sustainability First', desc: 'Every decision at blue bell. is guided by our commitment to preserve Wayanad\'s precious rainforest ecosystem.' },
  { icon: '🤝', title: 'Authentic Hospitality', desc: 'We practice the ancient tradition of "Atithi Devo Bhava" — the guest is divine. Every guest is welcomed like family.' },
  { icon: '🎨', title: 'Cultural Preservation', desc: 'We support local weavers, promote tribal art forms, and preserve the rich indigenous heritage of the Western Ghats.' },
  { icon: '✨', title: 'Effortless Comfort', desc: 'True luxury is subtle. We obsess over details so our guests can simply disconnect, breathe, and find peace.' },
];

export default function AboutValues() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-value-card', {
        scrollTrigger: { trigger: '.about-values-grid', start: 'top 75%' },
        opacity: 0, y: 50, duration: 0.9, stagger: 0.15, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: 'var(--color-cream-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <span className="section-label">What We Stand For</span>
          <h2 className="section-title" style={{ fontWeight: 800 }}>Our Core Values</h2>
        </div>

        <div className="about-values-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {values.map((v) => (
            <div
              key={v.title}
              className="about-value-card"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                background: '#ffffff',
                border: '1px solid rgba(241, 245, 249, 1)',
                borderRadius: 'var(--border-radius)',
                transition: 'border-color 0.3s ease, background 0.3s ease, transform 0.3s ease',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.02)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-sage)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(241, 245, 249, 1)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '1.2rem' }}>{v.icon}</span>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-forest)', marginBottom: '0.75rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.75 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Full width split image */}
        <div style={{
          marginTop: 'clamp(3rem, 5vw, 5rem)',
          borderRadius: 'var(--border-radius-lg)',
          overflow: 'hidden',
          height: 'clamp(300px, 40vw, 500px)',
          position: 'relative',
        }}>
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=85&fit=crop"
            alt="Blue Bell team and hospitality"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.3) 100%)',
            display: 'flex',
            alignItems: 'center',
            padding: 'clamp(2rem, 5vw, 5rem)',
          }}>
            <div style={{ maxWidth: '460px' }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
                color: '#fff',
                lineHeight: 1.2,
                fontWeight: 800,
                marginBottom: '1rem',
              }}>
                Meet the Family Behind blue bell.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Over 150 dedicated naturalists, spa healers, executive chefs, and concierges — all united by a singular promise: to make your Wayanad stay truly unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
