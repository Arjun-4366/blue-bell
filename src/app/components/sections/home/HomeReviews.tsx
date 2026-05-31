'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    rating: 5,
    text: 'Blue Bell is nothing short of magical. The treehouse suite exceeded every expectation — waking to birdsong with the misty rainforest surrounding us was an absolute dream. The Ayurvedic treatments were divinely restorative.',
    author: 'Priya Menon',
    location: 'Bangalore',
    stay: 'Canopy Treehouse Suite',
  },
  {
    rating: 5,
    text: 'Our honeymoon at Blue Bell was the most romantic experience of our lives. The private pool villa, candlelit forest dinner, the genuinely attentive staff — it was absolute perfection in every sense.',
    author: 'Arjun & Kavitha Sharma',
    location: 'Mumbai',
    stay: 'Earthen Pool Dome',
  },
  {
    rating: 5,
    text: 'Nothing compares to Blue Bell. The seamless blend of luxury design and raw nature, the impeccable spice-garden dining, and the warm Kerala hospitality sets this resort apart as a hidden gem of the world.',
    author: 'David Thompson',
    location: 'London, UK',
    stay: 'Earthen Dome Sanctuary',
  },
];

export default function HomeReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number) => {
    gsap.to(contentRef.current, {
      opacity: 0, y: 10, duration: 0.25,
      onComplete: () => {
        setActiveIndex(idx);
        gsap.fromTo(contentRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 });
      },
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reviews-box', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0, y: 50, duration: 1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const current = reviews[activeIndex];

  return (
    <section ref={sectionRef} className="section" style={{ background: '#fff' }}>
      <div className="container">

        {/* Header — centred */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 5rem)' }}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Loved by Our Guests</h2>
        </div>

        {/* Review card */}
        <div className="reviews-box" style={{
          maxWidth: '780px', margin: '0 auto',
          background: 'linear-gradient(135deg, #F7FAFC 0%, #EEF6FA 100%)',
          borderRadius: 'var(--radius-lg)', padding: 'clamp(2.5rem, 5vw, 5rem)',
          border: '1px solid rgba(6,181,211,0.1)',
          position: 'relative',
          boxShadow: '0 20px 70px rgba(13,30,53,0.06)',
        }}>
          {/* Large quote mark */}
          <span style={{
            position: 'absolute', top: '1.5rem', left: '2.5rem',
            fontFamily: 'var(--font-serif)', fontSize: '7rem', lineHeight: 1,
            color: 'rgba(6,181,211,0.1)', pointerEvents: 'none', userSelect: 'none',
          }}>"</span>

          <div ref={contentRef}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: '3px', marginBottom: '1.6rem', justifyContent: 'center' }}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--brand-cyan)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            {/* Review text */}
            <p style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', fontWeight: 300,
              color: 'var(--color-text)', lineHeight: 1.65,
              textAlign: 'center', marginBottom: '2.2rem',
            }}>
              "{current.text}"
            </p>

            {/* Author */}
            <div style={{ textAlign: 'center' }}>
              <span style={{
                display: 'block', fontFamily: 'var(--font-sans)', fontWeight: 600,
                color: 'var(--brand-cyan-muted)', letterSpacing: '0.08em',
                textTransform: 'uppercase', fontSize: '0.82rem', marginBottom: '4px',
              }}>{current.author}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-text-soft)' }}>
                {current.location} · {current.stay}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginTop: '3rem', paddingTop: '2rem',
            borderTop: '1px solid rgba(6,181,211,0.12)',
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {reviews.map((_, idx) => (
                <button key={idx} onClick={() => goTo(idx)} aria-label={`Review ${idx + 1}`} style={{
                  width: activeIndex === idx ? '28px' : '8px', height: '8px',
                  borderRadius: '4px', border: 'none', cursor: 'pointer',
                  background: activeIndex === idx ? 'var(--brand-cyan)' : 'rgba(6,181,211,0.2)',
                  transition: 'all 0.35s var(--ease)',
                }} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {(['←', '→'] as const).map((arrow, dir) => (
                <button key={dir} onClick={() => goTo(dir === 0 ? (activeIndex - 1 + reviews.length) % reviews.length : (activeIndex + 1) % reviews.length)}
                  aria-label={dir === 0 ? 'Previous' : 'Next'}
                  style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    border: '1.5px solid rgba(6,181,211,0.25)', background: 'none',
                    color: 'var(--brand-cyan-muted)', cursor: 'pointer',
                    fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--brand-cyan)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--brand-cyan)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--brand-cyan-muted)'; e.currentTarget.style.borderColor = 'rgba(6,181,211,0.25)'; }}
                >{arrow}</button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/reviews" className="btn btn-outline-dark">Read All Guest Reviews</Link>
        </div>
      </div>
    </section>
  );
}
