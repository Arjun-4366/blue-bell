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
    <>
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
          paddingTop: 'clamp(90px, 11vh, 130px)',
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
            // filter: 'brightness(0.78) saturate(1)',
          }}
        />

        {/* Gradient overlay — left-heavy for text legibility */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(100deg,
            rgba(6,13,26,0.75) 0%,
            rgba(6,13,26,0.32) 45%,
            rgba(6,13,26,0.05) 100%)`,
        }} />

        {/* Bottom fade for clean edge into next section */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '160px',
          zIndex: 1,
          background: 'linear-gradient(to bottom, transparent, rgba(6,13,26,0.4))',
        }} />

        {/* Black entry panel */}
        <div
          ref={blackRef}
          style={{
            position: 'absolute',
            inset: 0,
            background: '#060D1A',
            zIndex: 2,
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
            maxWidth: '700px',
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
                opacity: 0.6,
              }} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.5rem, 1.2vw, 0.62rem)',
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--brand-cyan)',
              }}>Periya · Wayanad, Kerala</span>
            </div>

            {/* Heading — Cormorant Garamond, refined size */}
            <h1 className="h-heading" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              marginBottom: '0.15em',
              opacity: 0,
              textShadow: '0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4)',
            }}>
              Wayanad&apos;s Best Resort<br />{' '}
              <span style={{
                fontStyle: 'italic',
                color: '#ffffff',
              }}>for Every Kind of Getaway</span>
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
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.85,
              maxWidth: '420px',
              marginBottom: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              opacity: 0,
              textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            }}>
              Treehouses and private-pool domes tucked into the forest in Periya — the best resort
              in Wayanad for family stays, and private-pool stays for couples.
            </p>

            {/* CTAs */}
            <div className="h-ctas" style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '0.75rem',
              flexWrap: 'wrap',
              opacity: 0,
            }}>
              <Link href="/stays" className="btn btn-primary h-cta-btn">Explore Sanctuaries</Link>
            </div>

          </div>
        </div>

    

<style jsx>{`
  @media (max-width: 768px) {
    .hero-section {
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
    }

    .h-bg-video {
      height: 100% !important;
      object-position: center 55% !important;
    
    }

    .hero-content {
      padding: 1.5rem !important;
    }

    .hero-content > div {
      margin: 0 auto !important;
      max-width: 100% !important;
    }

    .h-label {
      justify-content: center !important;
      margin-bottom: 1.5rem !important;
    }

    .h-heading {
      font-size: clamp(2rem, 8vw, 2.8rem) !important;
      text-align: center !important;
      margin-bottom: 0.7rem !important;
    }

    .h-heading br {
      display: none !important;
    }

    .h-sub {
      display: none !important;
    }

    /* Vertical stacked buttons */
    .h-ctas {
      flex-direction: column !important;
      align-items: center !important;
      gap: 0.8rem !important;
    }

    .h-cta-btn {
      width: 100% !important;
      max-width: 280px !important;
      padding: 0.9rem 1.5rem !important;
      font-size: 0.85rem !important;
      text-align: center !important;
      border-radius: 8px !important;
    }

    /* Divider centered */
    .hero-content > div > div:nth-child(3) {
      margin: 1.4rem auto 2rem !important;
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      padding-top: 70px !important;
    }

    .h-heading {
      font-size: clamp(1.8rem, 7vw, 2.2rem) !important;
      line-height: 1.2 !important;
    }

    .h-sub {
      font-size: 0.85rem !important;
      line-height: 1.6 !important;
    }
  }
`}</style>

      </section>
    </div>

    {/* Mobile-only value prop — hidden in the hero itself on small screens,
        shown here instead so the copy isn't lost, just relocated */}
    <div className="hero-mobile-intro" style={{
      display: 'none',
      background: '#fff',
      padding: 'clamp(1.75rem, 6vw, 2.25rem) 1.5rem',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9rem',
        color: 'var(--color-text-mid)',
        lineHeight: 1.85,
        maxWidth: '420px',
        margin: '0 auto',
      }}>
        Treehouses and private-pool domes tucked into the forest in Periya — the best resort
        in Wayanad for family stays, and private-pool stays for couples.
      </p>
    </div>
    </>
  );
}