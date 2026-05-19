'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stays = [
  {
    id: 1,
    name: 'Forest Pool Villa',
    tag: 'Popular Signature',
    price: '₹18,500',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80&fit=crop',
    size: '120 sqm',
    guests: '2 Guests',
  },
  {
    id: 2,
    name: 'Canopy Treehouse Suite',
    tag: 'Bestseller Treetop',
    price: '₹24,000',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop',
    size: '90 sqm',
    guests: '2 Guests',
  },
  {
    id: 3,
    name: 'Heritage Cottage',
    tag: 'Traditional Luxury',
    price: '₹12,500',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80&fit=crop',
    size: '70 sqm',
    guests: '2 Guests',
  },
  {
    id: 4,
    name: 'Family Bungalow',
    tag: 'Spacious Retreat',
    price: '₹32,000',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80&fit=crop',
    size: '280 sqm',
    guests: '6 Guests',
  },
];

export default function FeaturedStays() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards entrance
      gsap.from('.stay-card', {
        scrollTrigger: {
          trigger: '.stays-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--color-cream-dark)' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 'clamp(3rem, 5vw, 5rem)',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <span className="section-label">Sanctuaries</span>
            <h2 className="section-title" style={{ fontWeight: 800 }}>Choose Your Luxury Space</h2>
          </div>
          <Link href="/stays" className="btn btn-outline-dark" style={{ border: '2px solid var(--color-forest)' }}>
            View All Stays
          </Link>
        </div>

        {/* Stays Grid */}
        <div className="stays-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {stays.map((stay) => (
            <div
              key={stay.id}
              className="stay-card"
              style={{
                background: '#ffffff',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(15, 23, 42, 0.03)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(15, 23, 42, 0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 40px rgba(15, 23, 42, 0.03)';
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={stay.image}
                  alt={stay.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'var(--color-sage)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '30px',
                }}>
                  {stay.tag}
                </span>
              </div>

              <div style={{ padding: '2rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--color-forest)',
                  marginBottom: '1rem',
                }}>{stay.name}</h3>

                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-light)',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                }}>
                  <span>📏 {stay.size}</span>
                  <span>👥 {stay.guests}</span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(241, 245, 249, 1)',
                }}>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--color-sage)',
                    }}>{stay.price}</span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-light)',
                      marginLeft: '3px',
                      fontFamily: 'var(--font-sans)',
                    }}>/night</span>
                  </div>
                  <Link href="/book-now" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.68rem' }}>
                    Reserve
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
