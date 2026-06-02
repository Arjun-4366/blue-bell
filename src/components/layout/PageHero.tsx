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
      
      // Only apply parallax on desktop
      if (window.innerWidth >= 768) {
        gsap.fromTo(`.${scopeClass}-bg`, { y: 0 }, {
          y: '14%', ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
        });
      } else {
        gsap.fromTo(`.${scopeClass}-bg`, { y: 0 }, {
          y: '5%', ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
        });
      }
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
        <div className="hero-gradient" style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(6,13,26,0.3) 0%, rgba(6,13,26,0.5) 50%, rgba(6,13,26,0.82) 100%)',
        }} />

        <div ref={blackRef} style={{ position: 'absolute', inset: 0, background: '#060D1A', zIndex: 2 }} />

        {/* Centred content */}
        <div className="container" style={{ 
          position: 'relative', zIndex: 3, textAlign: 'center',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
        }}>
          <div className={`${scopeClass}-inner`} style={{ maxWidth: '700px', margin: '0 auto' }}>

            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
              marginBottom: 'clamp(1rem, 2vw, 1.4rem)', opacity: 0,
            }}>
              <span style={{ width: 'clamp(18px, 3vw, 24px)', height: '1px', background: 'rgba(6,181,211,0.5)' }} />
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.9vw, 0.62rem)', fontWeight: 600,
                letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brand-cyan)',
                whiteSpace: 'nowrap',
              }}>{eyebrow}</span>
              <span style={{ width: 'clamp(18px, 3vw, 24px)', height: '1px', background: 'rgba(6,181,211,0.5)' }} />
            </div>

            {/* Heading */}
            <h1 style={{ margin: '0 0 0.1em', opacity: 0 }}>
              <span style={{
                display: 'block', fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 4.8rem)', fontWeight: 300,
                color: '#FFFFFF', lineHeight: 1.05, letterSpacing: '-0.02em',
              }}>{heading}</span>
              {headingItalic && (
                <span style={{
                  display: 'block', fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 4.8rem)', fontWeight: 300,
                  fontStyle: 'italic', color: 'var(--brand-cyan)',
                  lineHeight: 1.1, letterSpacing: '-0.01em',
                }}>{headingItalic}</span>
              )}
            </h1>

            {/* Rule */}
            <div style={{
              width: 'clamp(32px, 5vw, 40px)', height: '1.5px', 
              margin: 'clamp(1.2rem, 2.5vw, 1.8rem) auto',
              background: 'linear-gradient(to right, var(--brand-cyan), var(--brand-green))',
              opacity: 0,
            }} />

            {/* Subtitle */}
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)',
              color: 'rgba(255,255,255,0.55)', maxWidth: '480px',
              margin: '0 auto', lineHeight: 1.85, opacity: 0,
            }}>{subtitle}</p>

          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-gradient {
            background: linear-gradient(to bottom, rgba(6,13,26,0.25) 0%, rgba(6,13,26,0.55) 50%, rgba(6,13,26,0.85) 100%) !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            align-items: center !important;
            padding-bottom: 0 !important;
          }
          
          .hero-gradient {
            background: linear-gradient(to bottom, rgba(6,13,26,0.2) 0%, rgba(6,13,26,0.6) 60%, rgba(6,13,26,0.92) 100%) !important;
          }
          
          h1 span {
            font-size: clamp(1.8rem, 7vw, 2.4rem) !important;
          }
          
          .hero-inner p {
            font-size: 0.85rem !important;
            line-height: 1.7 !important;
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}