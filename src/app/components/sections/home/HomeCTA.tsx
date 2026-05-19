'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0, y: 40, duration: 0.9, stagger: 0.15, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1439130490301-25e322d88054?w=1920&q=85&fit=crop"
        alt="Wayanad misty valley"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="cta-content" style={{ maxWidth: '750px', margin: '0 auto' }}>
          <span className="section-label">Begin Your Journey</span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color: 'var(--color-forest)',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Your Perfect Wayanad Escape Awaits You
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'var(--color-text-light)',
            maxWidth: '550px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
            fontWeight: 500,
          }}>
            Reserve your villa direct today and receive a complimentary Ayurvedic welcome treatment, a guided spice garden tour, and sunrise yoga session.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-now" className="btn btn-primary">
              Book Direct Now
            </Link>
            <Link href="/contact" className="btn btn-outline-dark" style={{ border: '2px solid var(--color-forest)' }}>
              Enquire Now
            </Link>
          </div>
          <p style={{
            marginTop: '2.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--color-text-light)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            Best rate guaranteed · Free cancellation · 24/7 concierge
          </p>
        </div>
      </div>
    </section>
  );
}
