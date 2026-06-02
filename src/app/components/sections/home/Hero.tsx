'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(err => console.log('Video play interrupted:', err));
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(blackRef.current, { opacity: 1 }, { opacity: 0, duration: 1.8 })
        .fromTo('.h-label',    { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9 }, '-=1.2')
        .fromTo('.h-heading',  { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.1 }, '-=0.7')
        .fromTo('.h-sub',      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.7')
        .fromTo('.h-ctas',     { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.6')
        .fromTo('.h-scroll, .h-video-toggle', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.3');

      gsap.fromTo('.h-bg-video', { y: 0 }, {
        y: isMobile ? '5%' : '14%', 
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, heroRef);
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div className="hero-fixed-container">
      <section 
        ref={heroRef} 
        className="hero-section"
        style={{
          position: 'relative', 
          height: '100%', 
          width: '100%',
          display: 'flex', 
          alignItems: 'center', 
          background: '#060D1A',
        }}
      >
        {/* Background video */}
        <video
          ref={videoRef}
          src="/heroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-bg-video"
          style={{
            position: 'absolute', 
            inset: 0, 
            width: '100%', 
            height: '115%',
            objectFit: 'cover', 
            objectPosition: 'center 55%',
            filter: 'brightness(0.62) saturate(0.95)',
          }}
        />

        {/* Gradient overlay — left-heavy for text legibility */}
        <div style={{
          position: 'absolute', 
          inset: 0, 
          zIndex: 1,
          background: `linear-gradient(100deg, 
            rgba(6,13,26,0.92) 0%, 
            rgba(6,13,26,0.45) 45%, 
            rgba(6,13,26,0.08) 100%)`,
        }} />

        {/* Bottom fade for clean edge into next section */}
        <div style={{
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          height: '160px', 
          zIndex: 1,
          background: 'linear-gradient(to bottom, transparent, rgba(6,13,26,0.6))',
        }} />

        {/* Black entry panel */}
        <div 
          ref={blackRef} 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: '#060D1A', 
            zIndex: 2 
          }} 
        />

        {/* Content */}
        <div 
          className="container hero-content"
          style={{ 
            position: 'relative', 
            zIndex: 3,
            padding: 'clamp(1rem, 3vw, 2rem)',
            width: '100%',
          }}
        >
          <div style={{ 
            maxWidth: '640px',
            margin: '0 auto',
            marginLeft: 'clamp(0rem, 2vw, 4rem)',
          }}>

            {/* Label */}
            <div className="h-label" style={{
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.7rem',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)', 
              opacity: 0,
            }}>
              <span style={{ 
                width: 'clamp(20px, 4vw, 28px)', 
                height: '1px', 
                background: 'var(--brand-cyan)', 
                opacity: 0.6 
              }} />
              <span style={{
                fontFamily: 'var(--font-sans)', 
                fontSize: 'clamp(0.5rem, 1.2vw, 0.62rem)', 
                fontWeight: 600,
                letterSpacing: '0.3em', 
                textTransform: 'uppercase', 
                color: 'var(--brand-cyan)',
              }}>Vythiri · Wayanad, Kerala</span>
            </div>

            {/* Heading — Cormorant Garamond, refined size */}
            <h1 className="h-heading" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5.5vw, 5rem)',
              fontWeight: 300, 
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff', 
              marginBottom: '0.15em', 
              opacity: 0,
            }}>
              Where the Forest<br />
              <span style={{ 
                fontStyle: 'italic', 
                color: 'var(--brand-cyan)' 
              }}>Becomes Home.</span>
            </h1>

            {/* Divider */}
            <div style={{
              width: '44px', 
              height: '1.5px',
              background: 'linear-gradient(to right, var(--brand-cyan), var(--brand-green))',
              margin: 'clamp(1.2rem, 2vw, 1.8rem) 0',
            }} />

            {/* Subtitle */}
            <p className="h-sub" style={{
              fontFamily: 'var(--font-sans)', 
              fontSize: 'clamp(0.85rem, 1.3vw, 0.97rem)',
              color: 'rgba(255,255,255,0.58)', 
              lineHeight: 1.85,
              maxWidth: '420px', 
              marginBottom: 'clamp(1.5rem, 2.5vw, 2.2rem)', 
              opacity: 0,
            }}>
              A luxury nature retreat in the highlands of Vythiri — treetop treehouses,
              earthen dome sanctuaries, and timeless Kerala hospitality.
            </p>

            {/* CTAs */}
            <div className="h-ctas" style={{ 
              display: 'flex', 
              gap: '0.9rem', 
              flexWrap: 'wrap', 
              opacity: 0,
              flexDirection: window.innerWidth < 480 ? 'column' : 'row',
            }}>
              <Link href="/book-now" className="btn btn-primary" style={{
                width: window.innerWidth < 480 ? '100%' : 'auto',
                textAlign: 'center',
              }}>Reserve Your Stay</Link>
              <Link href="/book-now" className="btn btn-outline" style={{
                width: window.innerWidth < 480 ? '100%' : 'auto',
                textAlign: 'center',
              }}>Explore Sanctuaries</Link>
            </div>

          </div>
        </div>

        {/* Video toggle button - responsive position */}
        <button
          onClick={togglePlay}
          className="h-video-toggle"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          style={{
            position: 'absolute',
            bottom: 'clamp(1rem, 3vw, 2rem)',
            right: 'clamp(1rem, 3vw, 2rem)',
            zIndex: 10,
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            width: 'clamp(36px, 5vw, 44px)',
            height: 'clamp(36px, 5vw, 44px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            opacity: 0,
          }}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>

        {/* Scroll indicator - hidden on mobile */}
        <div className="h-scroll" style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          opacity: 0,
          display: isMobile ? 'none' : 'block',
        }}>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
            margin: '0 auto 0.5rem',
          }} />
          <span style={{
            fontSize: '0.6rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'var(--font-sans)',
          }}>Scroll</span>
        </div>

        {/* Mobile-specific gradient adjustment */}
        <style jsx>{`
          @media (max-width: 768px) {
            .hero-section {
              align-items: flex-end !important;
              padding-bottom: 20vh;
            }
            
            .h-bg-video {
              height: 105% !important;
              object-position: center 60% !important;
            }
            
            .hero-content {
              padding-left: 1.5rem !important;
              padding-right: 1.5rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .hero-section {
              padding-bottom: 25vh;
            }
            
            .h-bg-video {
              filter: brightness(0.55) saturate(0.9) !important;
            }
          }
        `}</style>
      
      </section>
    </div>
  );
}