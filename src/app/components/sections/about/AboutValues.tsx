'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import valuesImage from '@/images/dome/AAL04280.webp';

gsap.registerPlugin(ScrollTrigger);

// SVG icons — no emoji
const ValueIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    leaf: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
    handshake: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17a4 4 0 0 1-8 0c0-1.13.28-2.2.76-3.14"/><path d="M12 17c0 1.65-1.35 3-3 3s-3-1.35-3-3"/><path d="m15 14-5 5"/><path d="M18 11V4a2 2 0 0 0-2-2h-2.5"/><path d="m18 11-4.65 4.65a4 4 0 0 1-5.65-5.65L12 6"/></svg>,
    palette: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    sparkle: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.63 5.63l2.83 2.83M15.54 15.54l2.83 2.83M5.63 18.37l2.83-2.83M15.54 8.46l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>,
  };
  return icons[type] || null;
};

const values = [
  { iconType: 'leaf',      title: 'Sustainability First',    desc: 'Every decision at Blue Bell is guided by our commitment to preserving Wayanad\'s precious rainforest ecosystem for future generations.' },
  { iconType: 'handshake', title: 'Authentic Hospitality',   desc: 'We practice the ancient tradition of "Atithi Devo Bhava" — the guest is divine. Every visitor is welcomed with genuine warmth.' },
  { iconType: 'palette',   title: 'Cultural Preservation',   desc: 'We support local weavers, promote tribal art forms, and preserve the rich indigenous heritage of the Western Ghats.' },
  { iconType: 'sparkle',   title: 'Effortless Comfort',      desc: 'True luxury is subtle. We obsess over details so our guests can simply disconnect, breathe deeply, and find peace.' },
];

export default function AboutValues() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-value-card', {
        scrollTrigger: { trigger: '.about-values-grid', start: 'top 78%' },
        opacity: 0, y: 45, duration: 0.9, stagger: 0.13, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-tint">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 5rem)' }}>
          <span className="section-label">What We Stand For</span>
          <h2 className="section-title">Our Core Values</h2>
        </div>

        <div className="about-values-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.4rem',
        }}>
          {values.map((v) => (
            <div key={v.title} className="about-value-card" style={{
              padding: 'clamp(1.6rem, 3vw, 2.4rem)',
              background: '#fff',
              border: '1px solid rgba(6,181,211,0.1)',
              borderRadius: 'var(--radius)',
              boxShadow: '0 4px 20px rgba(13,30,53,0.04)',
              transition: 'all 0.35s var(--ease)',
            }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--brand-cyan)';
                el.style.transform = 'translateY(-5px)';
                el.style.boxShadow = '0 16px 40px rgba(6,181,211,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(6,181,211,0.1)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 20px rgba(13,30,53,0.04)';
              }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: 'var(--color-bg-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--brand-cyan-muted)', marginBottom: '1.2rem',
              }}>
                <ValueIcon type={v.iconType} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--color-text)', marginBottom: '0.6rem' }}>{v.title}</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-soft)', lineHeight: 1.75 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Full-width banner */}
        <div style={{
          marginTop: 'clamp(3rem, 5vw, 5rem)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          height: 'clamp(280px, 35vw, 460px)', position: 'relative',
        }}>
          <Image src={valuesImage} alt="Blue Bell team" fill sizes="(max-width:768px) 100vw, 80vw" style={{ objectFit: 'cover' }} placeholder="blur" />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(10,22,46,0.88) 0%, rgba(6,50,90,0.3) 100%)',
            display: 'flex', alignItems: 'center',
            padding: 'clamp(2rem, 5vw, 5rem)',
          }}>
            <div style={{ maxWidth: '440px' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--brand-cyan)', display: 'block', marginBottom: '1rem' }}>Our Team</span>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.2vw, 3rem)',
                fontWeight: 300, fontStyle: 'italic', color: '#fff',
                lineHeight: 1.15, marginBottom: '1rem',
              }}>
                Meet the Family Behind Blue Bell.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: 1.75 }}>
                Over 150 dedicated naturalists, spa healers, executive chefs, and concierges — united by a singular promise: to make your Wayanad stay truly unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
