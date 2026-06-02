'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import wellnessImg from '@/images/dome/AAL04280.webp';
import diningImg from '@/images/dining/DSC02001.webp';
import adventureImg from '@/images/dome/AAL04289.webp';

gsap.registerPlugin(ScrollTrigger);

const amenityCategories = [
  {
    category: 'Wellness & Spa',
    accent: 'var(--brand-cyan)',
    image: wellnessImg,
    items: [
      { name: 'Ayurveda Spa',       desc: 'Organic mud-spa therapies and holistic treatments tailored for your body.' },
      { name: 'Yoga Pavilion',      desc: 'Open-air hilltop pavilion with guided daily yoga and breathing sessions.' },
      { name: 'Herbal Baths',       desc: 'Private bathing tubs with wild local herbs, organic flowers, and pure spice oils.' },
      { name: 'Meditation Garden',  desc: 'A secluded green grove for mindfulness walks and quiet contemplation.' },
    ],
  },
  {
    category: 'Dining & Culinary',
    accent: 'var(--brand-blue)',
    image: diningImg,
    items: [
      { name: 'The Canopy Restaurant', desc: 'Farm-to-table Kerala cuisine elevated with modern culinary techniques.' },
      { name: 'Organic Garden Café',   desc: 'Casual breakfasts and herbal teas in our working vegetable garden.' },
      { name: 'The Forest Deck Bar',   desc: 'Botanical signature cocktails on our overhanging jungle terrace.' },
      { name: 'Tea & Spice Tastings',  desc: 'Guided masterclasses exploring rare regional teas and selected spices.' },
    ],
  },
  {
    category: 'Recreation & Adventure',
    accent: 'var(--brand-green)',
    image: adventureImg,
    items: [
      { name: 'Earthen Dome Pool',  desc: 'Geodesic pool deck with panoramic views of the Wayanad rainforest.' },
      { name: 'Nature Treks',       desc: 'Waterfalls, coffee plantations, and mist trails with our naturalist.' },
      { name: 'Rock Climbing',      desc: 'Certified instructors on natural local granite for all skill levels.' },
      { name: 'Mountain Biking',    desc: 'Curated trails weaving through organic estates and tribal villages.' },
    ],
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
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 5rem)' }}>
          <span className="section-label">World-Class Facilities</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Every Experience Crafted for You</h2>
          <div className="divider center" />
        </div>

        <div className="amenities-full-list" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 8vw, 8rem)' }}>
          {amenityCategories.map((cat, catIdx) => (
            <div key={cat.category} className="amenity-category-block" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(1.5rem, 5vw, 5rem)',
              alignItems: 'center',
            }}>
              {/* Image */}
              <div className="amenity-cat-image" style={{ 
                borderRadius: 'var(--radius-lg)', overflow: 'hidden', 
                aspectRatio: '4/3', boxShadow: '0 20px 60px rgba(13,30,53,0.08)',
                order: catIdx % 2 === 1 ? 2 : 1,
              }}>
                <Image src={cat.image} alt={cat.category} style={{ width: '100%', height: '100%', objectFit: 'cover' }} placeholder="blur" />
              </div>

              {/* Items */}
              <div className="amenity-cat-content" style={{ order: catIdx % 2 === 1 ? 1 : 2 }}>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.8vw, 0.62rem)', fontWeight: 700,
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: cat.accent, display: 'block', marginBottom: '0.9rem',
                }}>{cat.category}</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)',
                  fontWeight: 400, color: 'var(--color-text)',
                  marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.01em',
                }}>{cat.category.split('&')[0].trim()} Offerings</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.7rem, 1.2vw, 1rem)' }}>
                  {cat.items.map((item) => (
                    <div key={item.name} className="amenity-item-card" style={{
                      display: 'flex', gap: 'clamp(0.8rem, 1.5vw, 1.2rem)', 
                      padding: 'clamp(1rem, 1.8vw, 1.3rem) clamp(1rem, 2vw, 1.5rem)',
                      background: 'var(--color-bg-warm)',
                      borderRadius: 'var(--radius)',
                      borderLeft: `3px solid ${cat.accent}`,
                      transition: 'all 0.3s var(--ease)',
                    }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = '#fff';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(13,30,53,0.07)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background = 'var(--color-bg-warm)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      }}
                    >
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.85rem, 1.2vw, 0.93rem)', fontWeight: 600, color: 'var(--color-text)', marginBottom: '3px' }}>{item.name}</h4>
                        <p style={{ fontSize: 'clamp(0.75rem, 1vw, 0.82rem)', lineHeight: 1.6, color: 'var(--color-text-soft)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
          
          .amenity-item-card {
            text-align: left;
            padding: 0.9rem 1rem !important;
          }
          
          .amenity-item-card h4 {
            font-size: 0.85rem !important;
          }
          
          .amenity-item-card p {
            font-size: 0.78rem !important;
          }
        }
      `}</style>
    </section>
  );
}