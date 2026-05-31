'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(blackRef.current, { opacity: 1 }, { opacity: 0, duration: 1.8 })
        .fromTo('.h-label',    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9 }, '-=1.2')
        .fromTo('.h-heading',  { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.1 }, '-=0.7')
        .fromTo('.h-sub',      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.7')
        .fromTo('.h-ctas',     { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.6')
        .fromTo('.h-scroll',   { opacity: 0 },        { opacity: 1, duration: 0.6 },        '-=0.3');

      gsap.fromTo('.h-bg-img', { y: 0 }, {
        y: '14%', ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-fixed-container">
      <section ref={heroRef} style={{
        position: 'relative', height: '100%', width: '100%',
        display: 'flex', alignItems: 'center', background: '#060D1A',
      }}>
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=90&fit=crop"
          alt="Misty Wayanad rainforest"
          className="h-bg-img"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '115%',
            objectFit: 'cover', objectPosition: 'center 55%',
            filter: 'brightness(0.48) saturate(0.8)',
          }}
        />

        {/* Gradient overlay — left-heavy for text legibility */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(100deg, rgba(6,13,26,0.88) 0%, rgba(6,13,26,0.45) 55%, rgba(6,13,26,0.1) 100%)',
        }} />

        {/* Bottom fade for clean edge into next section */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', zIndex: 1,
          background: 'linear-gradient(to bottom, transparent, rgba(6,13,26,0.6))',
        }} />

        {/* Black entry panel */}
        <div ref={blackRef} style={{ position: 'absolute', inset: 0, background: '#060D1A', zIndex: 2 }} />

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div style={{ maxWidth: '640px' }}>

            {/* Label */}
            <div className="h-label" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
              marginBottom: '1.5rem', opacity: 0,
            }}>
              <span style={{ width: '28px', height: '1px', background: 'var(--brand-cyan)', opacity: 0.6 }} />
              <span style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 600,
                letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brand-cyan)',
              }}>Vythiri · Wayanad, Kerala</span>
            </div>

            {/* Heading — Cormorant Garamond, refined size */}
            <h1 className="h-heading" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
              fontWeight: 300, lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff', marginBottom: '0.15em', opacity: 0,
            }}>
              Where the Forest<br />
              <span style={{ fontStyle: 'italic', color: 'var(--brand-cyan)' }}>Becomes Home.</span>
            </h1>

            {/* Divider */}
            <div style={{
              width: '44px', height: '1.5px',
              background: 'linear-gradient(to right, var(--brand-cyan), var(--brand-green))',
              margin: '1.8rem 0',
            }} />

            {/* Subtitle */}
            <p className="h-sub" style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.97rem',
              color: 'rgba(255,255,255,0.58)', lineHeight: 1.85,
              maxWidth: '420px', marginBottom: '2.2rem', opacity: 0,
            }}>
              A luxury nature retreat in the highlands of Vythiri — treetop treehouses,
              earthen dome sanctuaries, and timeless Kerala hospitality.
            </p>

            {/* CTAs */}
            <div className="h-ctas" style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', opacity: 0 }}>
              <Link href="/book-now" className="btn btn-primary">Reserve Your Stay</Link>
              <Link href="/stays" className="btn btn-outline">Explore Sanctuaries</Link>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="h-scroll" style={{
          position: 'absolute', bottom: '2.2rem', left: '50%',
          transform: 'translateX(-50%)', zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          opacity: 0,
        }}>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.55rem', fontWeight: 600,
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)',
          }}>Scroll</span>
          <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.12)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: '-100%', left: 0, width: '100%', height: '100%',
              background: 'var(--brand-cyan)',
              animation: 'scrollLine 2s ease infinite',
            }} />
          </div>
        </div>
      </section>
    </div>
  );
}