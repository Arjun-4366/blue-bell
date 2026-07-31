'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import campfireImg from '@/assests/images/amenities/campfire.webp';
import bbqImg from '@/assests/images/amenities/bbq.webp';
import kidsParkImg from '@/assests/images/amenities/kids-park.webp';
import eventimg from '@/images/events/events-1.webp'
import tableTennis from '@/images/amenities/table tennis.webp'

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  {
    title: 'Campfire Evenings',
    category: 'Outdoors',
    accent: 'var(--brand-cyan)',
    image: campfireImg,
    imageAlt: 'Guests gathered around an evening campfire',
    desc: "As the sun drops behind the hills, we light the fire pit. Pull up a seat, order something warm, and let the evening go slow — no schedule, just good company and the forest settling in for the night.",
  },
  {
    title: 'Barbecue Nights',
    category: 'Dining',
    accent: 'var(--brand-blue)',
    image: bbqImg,
    imageAlt: 'Skewers cooking on an outdoor barbecue grill',
    desc: 'Charcoal-grilled skewers, marinated classics, and whatever\'s fresh that day, cooked right there on the grill and served hot. A regular fixture on evenings when guests want something more than a sit-down dinner.',
  },
  {
    title: "Kids' Play Park",
    category: 'Family',
    accent: 'var(--brand-green)',
    image: kidsParkImg,
    imageAlt: "Colourful children's play park surrounded by trees",
    desc: 'A dedicated play area gives younger guests their own patch of the property — slides, climbing frames, and open ground to run around, all within easy sight of the main grounds.',
  },
  {
    title: 'Indoor Games Room',
    category: 'Indoors',
    accent: 'var(--brand-cyan)',
    image: tableTennis,
    imageAlt: 'Close-up of hands playing carrom',
    desc: 'A range of indoor games and a few quiet corners for when the weather turns or the afternoon calls for something unhurried.',
  },

  {
    title: 'Events Hall',
    category: 'Gatherings',
    accent: 'var(--brand-blue)',
    image: eventimg,
    imageAlt: 'Small indoor hall set up for a family gathering',
    desc: 'A cosy indoor hall for small celebrations, family functions, and get-togethers — a modest, dedicated space right on the property when guests want somewhere of their own to gather.',
  },
];

export default function AmenitiesGrid() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.amenity-category-block', {
        scrollTrigger: { trigger: '.amenities-full-list', start: 'top 75%' },
        opacity: 0, y: 55, duration: 1, stagger: 0.2, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 5rem)' }}>
          <span className="section-label">The Amenities</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Things We Actually Offer</h2>
          <div className="divider center" />
        </div>

        <div className="amenities-full-list" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 8vw, 8rem)' }}>
          {amenities.map((a, idx) => (
            <div key={a.title} className="amenity-category-block" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(1.5rem, 5vw, 5rem)',
              alignItems: 'center',
            }}>
              {/* Image */}
              <div className="amenity-cat-image" style={{
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                aspectRatio: '4/3', boxShadow: '0 20px 60px rgba(13,30,53,0.08)',
                order: idx % 2 === 1 ? 2 : 1,
                position: 'relative',
              }}>
                <Image src={a.image} alt={a.imageAlt} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>

              {/* Content */}
              <div className="amenity-cat-content" style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.8vw, 0.62rem)', fontWeight: 700,
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: a.accent, display: 'block', marginBottom: '0.9rem',
                }}>{a.category}</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)',
                  fontWeight: 400, color: 'var(--color-text)',
                  marginBottom: 'clamp(1.2rem, 2vw, 1.6rem)', letterSpacing: '-0.01em',
                }}>{a.title}</h3>

                <p style={{
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: 1.85,
                  color: 'var(--color-text-mid)', borderLeft: `3px solid ${a.accent}`,
                  paddingLeft: 'clamp(1rem, 2vw, 1.4rem)',
                }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .amenities-full-list {
            gap: 3rem !important;
          }

          .amenity-category-block {
            gap: 2rem !important;
          }

          .amenity-cat-image {
            aspect-ratio: 16/9 !important;
            max-height: 350px;
          }

          .amenity-cat-image,
          .amenity-cat-content {
            order: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .amenities-full-list {
            gap: 2.5rem !important;
          }

          .amenity-category-block {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .amenity-cat-image {
            aspect-ratio: 4/3 !important;
            max-height: 280px;
          }

          .amenity-cat-content {
            text-align: center;
          }

          .amenity-cat-content p {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
