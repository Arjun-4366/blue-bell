'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(overlayRef.current,
        { opacity: 1 },
        { opacity: 0.5, duration: 1.8 }
      );
      gsap.from('.about-hero-content > *', {
        opacity: 0, y: 60, duration: 1.1, stagger: 0.15, ease: 'power3.out', delay: 0.3,
      });

      // Parallax scroll on bg
      gsap.fromTo('.about-hero-bg',
        { y: 0 },
        {
          y: '15%',
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-fixed-container">
      <section ref={ref} style={{
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#090d16',
      }}>
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=85&fit=crop"
          alt="Wayanad forest canopy"
          className="about-hero-bg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '115%', objectFit: 'cover' }}
        />
        <div
          ref={overlayRef}
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(9,13,22,0.3) 0%, rgba(9,13,22,0.5) 60%, rgba(9,13,22,0.85) 100%)',
            zIndex: 1,
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="about-hero-content">
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              color: 'var(--color-brand-cyan)',
              marginBottom: '0.5rem',
              lineHeight: 1,
            }}>
              Our Story
            </span>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 auto',
              maxWidth: '900px',
            }}>
              Born from the Heart of Wayanad
            </h1>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '520px',
              margin: '1.5rem auto 0',
              lineHeight: 1.8,
              fontWeight: 400,
            }}>
              A story of passion, nature conservation, and the pursuit of raw tropical luxury.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
