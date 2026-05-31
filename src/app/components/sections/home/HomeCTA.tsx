'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ctaBg from '@/images/dome/AAL04317.webp';

gsap.registerPlugin(ScrollTrigger);

export default function HomeCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        opacity: 0, y: 40, duration: 1, stagger: 0.15, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{
      position: 'relative', minHeight: '60vh', display: 'flex',
      alignItems: 'center', overflow: 'hidden',
    }}>
      <Image src={ctaBg} alt="Misty Wayanad valley from dome suites" fill
        sizes="100vw"
        style={{ objectFit: 'cover', filter: 'brightness(0.45) saturate(0.9)' }}
        placeholder="blur"
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(135deg, rgba(10,22,46,0.88) 0%, rgba(6,60,100,0.55) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div className="cta-content" style={{ maxWidth: '700px', margin: '0 auto' }}>

          {/* Eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.6rem' }}>
            <span style={{ width: '28px', height: '1px', background: 'var(--brand-cyan)', opacity: 0.6 }} />
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brand-cyan)',
            }}>Begin Your Journey</span>
            <span style={{ width: '28px', height: '1px', background: 'var(--brand-cyan)', opacity: 0.6 }} />
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
            fontWeight: 300, fontStyle: 'italic',
            color: '#fff', lineHeight: 1.1, marginBottom: '1.4rem', letterSpacing: '-0.015em',
          }}>
            Your Earthen Sanctuary Awaits.
          </h2>

          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.97rem',
            color: 'rgba(255,255,255,0.55)', maxWidth: '480px',
            margin: '0 auto 2.4rem', lineHeight: 1.85,
          }}>
            Reserve direct and receive a complimentary Ayurvedic welcome treatment,
            a guided spice garden tour, and sunrise yoga session.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-now" className="btn btn-primary">Book Direct Now</Link>
            <Link href="/contact" className="btn btn-outline">Enquire Now</Link>
          </div>

          <p style={{
            marginTop: '2.4rem', fontFamily: 'var(--font-sans)', fontSize: '0.68rem',
            fontWeight: 600, color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Best rate guaranteed · Free cancellation · 24/7 concierge
          </p>
        </div>
      </div>
    </section>
  );
}
