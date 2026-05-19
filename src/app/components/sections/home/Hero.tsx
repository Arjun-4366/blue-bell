'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(overlayRef.current,
        { opacity: 1 },
        { opacity: 0.5, duration: 1.8 }
      )
      .fromTo('.hero-script-label',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2 },
        '-=1.2'
      )
      .fromTo('.hero-title-line',
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.4, stagger: 0.15 },
        '-=0.8'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.8'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, scale: 0.98, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=0.3'
      );

      // Parallax scroll on background image
      gsap.fromTo('.hero-bg-img',
        { y: 0 },
        {
          y: '15%',
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-fixed-container">
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#090d16',
        }}
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=85&fit=crop"
          alt="Wayanad misty hills aerial view"
          className="hero-bg-img"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '115%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Gradient Overlay */}
        <div
          ref={overlayRef}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(9,13,22,0.3) 0%, rgba(9,13,22,0.5) 60%, rgba(9,13,22,0.85) 100%)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Calligraphy label inspired by the logo */}
          <span className="hero-script-label" style={{
            display: 'block',
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            color: 'var(--color-brand-cyan)',
            marginBottom: '0.5rem',
            opacity: 0,
            lineHeight: 1,
          }}>
            Nature's Masterpiece
          </span>

          <h1 ref={titleRef} style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
            fontWeight: 500,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.75rem',
            letterSpacing: '-0.02em',
          }}>
            <span className="reveal-text-wrap" style={{ display: 'block' }}>
              <span className="hero-title-line" style={{ display: 'block', opacity: 0 }}>Escape to Wayanad's</span>
            </span>
            <span className="reveal-text-wrap" style={{ display: 'block' }}>
              <span className="hero-title-line" style={{ display: 'block', color: 'var(--color-brand-cyan)', opacity: 0 }}>Luxury Sanctuary</span>
            </span>
          </h1>

          <p
            ref={subtitleRef}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
              opacity: 0,
              fontWeight: 400,
            }}
          >
            Nestled inside Vythiri's organic highlands, blue bell. offers high-end sustainable pool villas, healing Ayurveda, and untouched mountain trails.
          </p>

          <div
            ref={ctaRef}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              opacity: 0,
            }}
          >
            <Link href="/book-now" className="btn btn-gold">
              Reserve Your Stay
            </Link>
            <Link href="/stays" className="btn btn-outline">
              Explore Villas
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollRef}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            opacity: 0,
          }}
        >
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
          }}>Scroll to Explore</span>
          <div style={{
            width: '2px',
            height: '50px',
            background: 'rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '2px',
          }}>
            <div style={{
              position: 'absolute',
              top: '-100%',
              left: 0,
              width: '100%',
              height: '100%',
              background: 'var(--color-brand-cyan)',
              animation: 'scrollLine 2s cubic-bezier(0.16, 1, 0.3, 1) infinite',
            }} />
          </div>
        </div>
      </section>
      <style>{`
        @keyframes scrollLine {
          0% { top: -100%; }
          60% { top: 100%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
}