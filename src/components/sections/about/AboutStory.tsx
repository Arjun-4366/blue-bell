'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import storyImage from '@/images/dining/DSC02122.webp';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: '2009', event: 'Blue Bell Resort founded with our first high-canopy treetop suites.' },
  { year: '2012', event: 'Launched signature Earthen Geodesic Domes and private garden walkways.' },
  { year: '2015', event: 'Awarded Best Eco-Resort in South India by the Kerala Tourism Board.' },
  { year: '2018', event: 'Expanded to 28 premium sanctuaries including pool-side dome villas.' },
  { year: '2021', event: 'Certified fully carbon-neutral — a first in Wayanad district.' },
  { year: '2024', event: 'Recognised as one of India\'s Top 10 Luxury Eco-Nature Resorts.' },
];

export default function AboutStory() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-text-reveal > *', {
        scrollTrigger: { trigger: '.story-text-reveal', start: 'top 80%' },
        opacity: 0, y: 35, duration: 0.9, stagger: 0.14, ease: 'power3.out',
      });
      gsap.from('.milestone-item', {
        scrollTrigger: { trigger: '.milestones-wrapper', start: 'top 78%' },
        opacity: 0, x: -25, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
        <div className="story-layout" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 6vw, 7rem)',
          alignItems: 'start',
        }}>
          {/* Story text */}
          <div className="story-text-reveal">
            <span className="section-label">The Blue Bell Story</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>15 Years of Crafting Dreams</h2>
            <div className="divider" />
            <p style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)', marginBottom: '1.2rem', color: 'var(--color-text-mid)' }}>
              Blue Bell Resort was born in 2009 when Rajan and Meera Nair, lifelong residents of Wayanad,
              decided to share the magic of their highland home. What began as a modest boutique getaway
              has grown into one of South India's most celebrated sustainable nature resorts.
            </p>
            <p style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)', marginBottom: '1.2rem', color: 'var(--color-text-soft)' }}>
              Every path, structure, and piece of local art at Blue Bell tells a story of Vythiri —
              its ancient tribal traditions, earthen domes, treetop architecture, and organic food forests.
            </p>
            <p style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)', marginBottom: '2.4rem', color: 'var(--color-text-soft)' }}>
              We remain committed to sustainable luxury: our resort runs on 60% solar energy, grows fresh
              produce on-site, and actively supports over 200 local tribal families.
            </p>
            <div className="story-image" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', height: 'clamp(200px, 30vw, 240px)', position: 'relative' }}>
              <Image src={storyImage} alt="Blue Bell main lodge" fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} placeholder="blur" />
            </div>
          </div>

          {/* Timeline */}
          <div className="timeline-section">
            <h3 style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 1.8vw, 1.4rem)', fontWeight: 400,
              color: 'var(--color-text)', marginBottom: 'clamp(1.8rem, 2.5vw, 2.5rem)',
            }}>Our Journey</h3>

            <div className="milestones-wrapper" style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div className="timeline-line" style={{
                position: 'absolute', left: '19px', top: 0, bottom: 0,
                width: '1.5px', background: 'rgba(6,181,211,0.15)',
              }} />

              {milestones.map((m) => (
                <div key={m.year} className="milestone-item" style={{
                  display: 'flex', gap: 'clamp(0.8rem, 1.5vw, 1.4rem)',
                  marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)', position: 'relative',
                }}>
                  {/* Dot */}
                  <div className="milestone-dot" style={{
                    width: 'clamp(32px, 4vw, 38px)', height: 'clamp(32px, 4vw, 38px)', borderRadius: '50%',
                    background: 'var(--brand-cyan)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, position: 'relative', zIndex: 1,
                    boxShadow: '0 4px 14px rgba(6,181,211,0.25)',
                  }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.5rem, 0.7vw, 0.55rem)', fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>{m.year}</span>
                  </div>

                  <div style={{ paddingTop: '0.3rem' }}>
                    <span className="milestone-year" style={{
                      fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 0.8vw, 0.65rem)', fontWeight: 700,
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: 'var(--brand-cyan-muted)', display: 'block', marginBottom: '0.25rem',
                    }}>{m.year}</span>
                    <p style={{ fontSize: 'clamp(0.82rem, 1.1vw, 0.92rem)', lineHeight: 1.65, color: 'var(--color-text-mid)' }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .story-layout {
            gap: 3rem !important;
          }
          
          .story-image {
            height: 220px !important;
          }
          
          .timeline-line {
            left: 16px !important;
          }
          
          .milestone-dot {
            width: 32px !important;
            height: 32px !important;
          }
          
          .milestone-item {
            gap: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .story-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          
          .story-text-reveal {
            text-align: center;
          }
          
          .story-text-reveal .divider {
            margin-left: auto;
            margin-right: auto;
          }
          
          .story-image {
            height: 200px !important;
          }
          
          .timeline-section {
            text-align: left;
          }
          
          .timeline-section h3 {
            text-align: center;
          }
          
          .timeline-line {
            left: 15px !important;
          }
          
          .milestone-dot {
            width: 30px !important;
            height: 30px !important;
          }
          
          .milestone-dot span {
            font-size: 0.48rem !important;
          }
          
          .milestone-year {
            font-size: 0.58rem !important;
          }
          
          .milestone-item p {
            font-size: 0.82rem !important;
          }
        }
      `}</style>
    </section>
  );
}