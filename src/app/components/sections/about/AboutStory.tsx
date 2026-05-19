'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: '2009', event: 'Blue Bell Resort founded on 15 acres of Wayanad rainforest.' },
  { year: '2012', event: 'Launched our signature Kerala Ayurveda Spa with 12 treatment rooms.' },
  { year: '2015', event: 'Awarded Best Eco-Resort in South India by the Tourism Board.' },
  { year: '2018', event: 'Expanded with 20 new luxury forest pool villas and the infinity pool.' },
  { year: '2021', event: 'Certified fully carbon-neutral — a first in Wayanad district.' },
  { year: '2024', event: 'Recognized as one of India\'s Top 10 Luxury Eco-Nature Resorts.' },
];

export default function AboutStory() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-text-reveal > *', {
        scrollTrigger: { trigger: '.story-text-reveal', start: 'top 80%' },
        opacity: 0, y: 35, duration: 0.9, stagger: 0.15, ease: 'power3.out',
      });
      gsap.from('.milestone-item', {
        scrollTrigger: { trigger: '.milestones-wrapper', start: 'top 75%' },
        opacity: 0, x: -30, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>
          <div className="story-text-reveal">
            <span className="section-label">The Blue Bell Story</span>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', fontWeight: 800 }}>
              15 Years of Crafting Dreams
            </h2>
            <div className="divider" />
            <p style={{ fontSize: '1rem', marginBottom: '1.20rem', color: 'var(--color-text)' }}>
              Blue Bell Resort was born in 2009 when Rajan and Meera Nair, lifelong residents of Wayanad, decided to share the magic of their highland home. What began as a modest 6-room boutique getaway has grown into one of South India's most celebrated sustainable nature resorts.
            </p>
            <p style={{ fontSize: '0.95rem', marginBottom: '1.20rem' }}>
              Every path, every eco-friendly structure, and every piece of local art at blue bell. tells a story of Vythiri — its ancient tribal traditions, breathtaking mist-laden valleys, and organic food forests.
            </p>
            <p style={{ fontSize: '0.95rem', marginBottom: '2.5rem' }}>
              We remain deeply committed to sustainable luxury: our resort runs on 60% solar energy, grows fresh produce on-site, and actively supports the livelihoods of over 200 local tribal families.
            </p>
            <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', height: '260px' }}>
              <img
                src="https://images.unsplash.com/photo-1605538883669-825200433f36?w=700&q=80&fit=crop"
                alt="Blue Bell spice estates"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div>
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.4rem',
              fontWeight: 850,
              color: 'var(--color-forest)',
              marginBottom: '2.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>Our Journey</h3>
            <div className="milestones-wrapper" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '19px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'var(--color-cream-dark)',
              }} />
              {milestones.map((m) => (
                <div key={m.year} className="milestone-item" style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'var(--color-sage)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      color: '#ffffff',
                    }}>{m.year}</span>
                  </div>
                  <div style={{ paddingTop: '0.4rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-sage)',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}>{m.year}</span>
                    <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-text)', fontWeight: 500 }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
