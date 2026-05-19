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
    type: 'Signature Villa',
    price: '₹18,500',
    size: '120 sqm',
    guests: 2,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85&fit=crop',
    features: ['Private Infinity Pool', 'Valley Views', 'King Bed', 'Jungle Deck', 'Butler Service', 'Outdoor Fire Pit'],
    desc: 'Perched on a private ridge surrounded by ancient canopy, this villa is the ultimate romantic escape. The private infinity pool opens directly to panoramic mountain mist.',
    tag: 'Most Popular',
  },
  {
    id: 2,
    name: 'Canopy Treehouse Suite',
    type: 'Signature Suite',
    price: '₹24,000',
    size: '90 sqm',
    guests: 2,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85&fit=crop',
    features: ['Treetop Views', 'Sunrise Deck', 'Outdoor Clawfoot Bath', 'Forest Sounds', 'Organic Welcome Basket'],
    desc: 'Live amongst the green treetops in our signature elevated canopy treehouse. Wake up to birdsong, local mist, and a private sunrise bath.',
    tag: 'Bestseller',
  },
  {
    id: 3,
    name: 'Heritage Cottage',
    type: 'Classic Stay',
    price: '₹12,500',
    size: '70 sqm',
    guests: 2,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=85&fit=crop',
    features: ['Garden View', 'Sit-out Veranda', 'Traditional Kerala Craftsmanship', 'Private Courtyard'],
    desc: 'A beautifully restored space capturing the charm of traditional Kerala architecture with teak wood finishings, vintage fittings, and a garden veranda.',
    tag: null,
  },
  {
    id: 4,
    name: 'Family Bungalow',
    type: 'Family Retreat',
    price: '₹32,000',
    size: '280 sqm',
    guests: 6,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=85&fit=crop',
    features: ['3 Bed & Bath', 'Private Pool', 'Kitchenette', 'Dedicated Butler', 'Kids Play Space', 'Indoor Games'],
    desc: 'Our largest villa layout, perfect for multi-generational families or group escapes. Expansive private pool decks and absolute privacy guaranteed.',
    tag: 'Best for Families',
  },
  {
    id: 5,
    name: 'Bamboo Garden Suite',
    type: 'Garden Suite',
    price: '₹15,800',
    size: '95 sqm',
    guests: 2,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85&fit=crop',
    features: ['Private Bamboo Grove', 'Premium Soaking Tub', 'Outdoor Rain Shower', 'In-villa Garden Dining'],
    desc: 'Surrounded by a private whispering bamboo forest, this suite offers absolute tranquility. Enjoy private al fresco dinners in your personal garden.',
    tag: null,
  },
  {
    id: 6,
    name: 'Spice Garden Cottage',
    type: 'Boutique Cottage',
    price: '₹9,800',
    size: '55 sqm',
    guests: 2,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=85&fit=crop',
    features: ['Spice Plantation Access', 'Cozy Interiors', 'Veranda Hammock', 'Mist Views'],
    desc: 'Our most intimate nature option. Tucked beside cardamom and pepper vines, enjoy the hammocks, mountain breezes, and quiet rustic charm.',
    tag: 'Best Value',
  },
];

export default function StaysList() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stay-full-card', {
        scrollTrigger: { trigger: '.stays-full-grid', start: 'top 75%' },
        opacity: 0, y: 60, duration: 0.9, stagger: 0.15, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <span className="section-label">Our Accommodations</span>
          <h2 className="section-title" style={{ fontWeight: 800 }}>Choose Your Sanctuary</h2>
          <div className="divider center" />
        </div>

        <div className="stays-full-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
        }}>
          {stays.map((stay) => (
            <div key={stay.id} className="stay-full-card" style={{
              background: '#ffffff',
              borderRadius: 'var(--border-radius)',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(15, 23, 42, 0.04)',
              border: '1px solid rgba(241, 245, 249, 1)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(15, 23, 42, 0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 40px rgba(15, 23, 42, 0.04)';
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <img
                  src={stay.image}
                  alt={stay.name}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {stay.tag && (
                  <span style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    background: 'var(--color-sage)', color: '#ffffff',
                    fontFamily: 'var(--font-sans)', fontSize: '0.62rem',
                    fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '6px 14px', borderRadius: '30px',
                  }}>{stay.tag}</span>
                )}
                <div style={{
                  position: 'absolute', bottom: '1rem', right: '1rem',
                  background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(8px)',
                  padding: '6px 14px', borderRadius: '30px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-sans)', fontSize: '0.68rem',
                    color: 'rgba(255,255,255,0.95)', fontWeight: 700,
                  }}>Up to {stay.guests} guests · {stay.size}</span>
                </div>
              </div>

              <div style={{ padding: '2rem' }}>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.68rem',
                  fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--color-sage)', display: 'block', marginBottom: '0.5rem',
                }}>{stay.type}</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: '1.6rem',
                  fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.75rem',
                }}>{stay.name}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{stay.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                  {stay.features.map((f) => (
                    <span key={f} style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.7rem',
                      color: 'var(--color-text-light)', background: 'var(--color-cream-dark)',
                      padding: '4px 12px', borderRadius: '30px',
                      border: '1px solid rgba(241, 245, 249, 1)',
                      fontWeight: 600,
                    }}>{f}</span>
                  ))}
                </div>

                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(241, 245, 249, 1)',
                }}>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-sans)', fontSize: '1.6rem',
                      fontWeight: 800, color: 'var(--color-sage)',
                    }}>{stay.price}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginLeft: '4px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>/night</span>
                  </div>
                  <Link href="/book-now" className="btn btn-primary" style={{ padding: '0.7rem 1.6rem', fontSize: '0.7rem' }}>
                    Book Stay
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
