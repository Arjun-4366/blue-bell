'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  headingItalic?: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  scopeClass: string;
}

export default function PageHero({
  eyebrow, heading, headingItalic, subtitle, imageSrc, imageAlt, scopeClass,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(blackRef.current, { opacity: 1 }, { opacity: 0, duration: 1.8 })
        .fromTo(`.${scopeClass}-inner > *`, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, '-=1.2');
      gsap.fromTo(`.${scopeClass}-bg`, { y: 0 }, {
        y: '14%', ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, [scopeClass]);

  return (
    <div className="hero-fixed-container">
      <section ref={ref} style={{
        position: 'relative', height: '100%', width: '100%',
        display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#060D1A',
      }}>
        <img
          src={imageSrc} alt={imageAlt} className={`${scopeClass}-bg`}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '115%',
            objectFit: 'cover', objectPosition: 'center 50%',
            filter: 'brightness(0.45) saturate(0.8)',
          }}
        />

        {/* Central gradient — darkens all edges */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(6,13,26,0.3) 0%, rgba(6,13,26,0.5) 50%, rgba(6,13,26,0.82) 100%)',
        }} />

        <div ref={blackRef} style={{ position: 'absolute', inset: 0, background: '#060D1A', zIndex: 2 }} />

        {/* Centred content */}
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <div className={`${scopeClass}-inner`} style={{ maxWidth: '700px', margin: '0 auto' }}>

            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
              marginBottom: '1.4rem', opacity: 0,
            }}>
              <span style={{ width: '24px', height: '1px', background: 'rgba(6,181,211,0.5)' }} />
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 600,
                letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brand-cyan)',
              }}>{eyebrow}</span>
              <span style={{ width: '24px', height: '1px', background: 'rgba(6,181,211,0.5)' }} />
            </div>

            {/* Heading */}
            <h1 style={{ margin: '0 0 0.1em', opacity: 0 }}>
              <span style={{
                display: 'block', fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', fontWeight: 300,
                color: '#FFFFFF', lineHeight: 1.05, letterSpacing: '-0.02em',
              }}>{heading}</span>
              {headingItalic && (
                <span style={{
                  display: 'block', fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', fontWeight: 300,
                  fontStyle: 'italic', color: 'var(--brand-cyan)',
                  lineHeight: 1.1, letterSpacing: '-0.01em',
                }}>{headingItalic}</span>
              )}
            </h1>

            {/* Rule */}
            <div style={{
              width: '40px', height: '1.5px', margin: '1.8rem auto',
              background: 'linear-gradient(to right, var(--brand-cyan), var(--brand-green))',
              opacity: 0,
            }} />

            {/* Subtitle */}
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.55)', maxWidth: '480px',
              margin: '0 auto', lineHeight: 1.85, opacity: 0,
            }}>{subtitle}</p>

          </div>
        </div>
      </section>
    </div>
  );
}
