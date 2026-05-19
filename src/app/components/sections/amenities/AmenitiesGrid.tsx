'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const amenityCategories = [
  {
    category: 'Wellness & Spa',
    color: 'var(--color-sage)',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop',
    items: [
      { icon: '🌿', name: 'Ayurveda Spa', desc: '12 luxury treatment rooms with qualified Ayurvedic physicians and authentic Kerala protocols.' },
      { icon: '🧘', name: 'Yoga Pavilion', desc: 'Beautifully crafted open-air hilltop pavilion with guided daily yoga and breathing sessions.' },
      { icon: '🛁', name: 'Herbal Baths', desc: 'Private bathing tubs utilizing wild local herbs, organic flowers, and pure spice oils.' },
      { icon: '💆', name: 'Meditation Garden', desc: 'A quiet, secluded green grove designed specifically for mindfulness walks and contemplation.' },
    ],
  },
  {
    category: 'Dining & Culinary',
    color: 'var(--color-gold-dark)',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop',
    items: [
      { icon: '🍃', name: 'The Canopy Restaurant', desc: 'Enjoy farm-to-table traditional Kerala cuisine elevated with modern culinary techniques.' },
      { icon: '🌾', name: 'Organic Garden Café', desc: 'Casual organic breakfasts and herbal teas in our working vegetable and spice garden.' },
      { icon: '🍹', name: 'The Forest Deck Bar', desc: 'Botanical signature cocktails served on our overhanging jungle terrace under the stars.' },
      { icon: '🫖', name: 'Tea & Spice Tastings', desc: 'Guided masterclasses exploring rare regional tea leaves and hand-selected spices.' },
    ],
  },
  {
    category: 'Recreation & Adventures',
    color: '#0284c7', /* Vibrant blue accent */
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop',
    items: [
      { icon: '🏊', name: 'Infinity Pool', desc: 'Our signature 40-metre pool with stunning views of the Wayanad valleys and peaks.' },
      { icon: '🦅', name: 'Nature Treks', desc: 'Explore nearby waterfalls, coffee plantations, and mist trails with our naturalist.' },
      { icon: '🧗', name: 'Adventure Climbing', desc: 'Certified instructors lead beginner and advanced sessions on natural local granite.' },
      { icon: '🚵', name: 'Mountain Biking', desc: 'Curated cycling paths weaving through organic coffee estates and tribal villages.' },
    ],
  },
];

export default function AmenitiesGrid() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.amenity-category-block', {
        scrollTrigger: { trigger: '.amenities-full-list', start: 'top 75%' },
        opacity: 0, y: 60, duration: 1, stagger: 0.2, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <span className="section-label">World-Class Facilities</span>
          <h2 className="section-title" style={{ fontWeight: 800 }}>Every Experience Crafted for You</h2>
          <div className="divider center" />
        </div>

        <div className="amenities-full-list" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 8vw, 8rem)' }}>
          {amenityCategories.map((cat, catIdx) => (
            <div key={cat.category} className="amenity-category-block" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(2rem, 5vw, 5rem)',
              alignItems: 'center',
              direction: catIdx % 2 === 1 ? 'rtl' : 'ltr',
            }}>
              <div style={{ direction: 'ltr', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 20px 50px rgba(15, 23, 42, 0.04)' }}>
                <img
                  src={cat.image}
                  alt={cat.category}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ direction: 'ltr' }}>
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: cat.color,
                  marginBottom: '1rem',
                }}>{cat.category}</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'var(--color-forest)',
                  marginBottom: '2rem',
                  letterSpacing: '-0.01em',
                }}>{cat.category.split(' ')[0]} Offerings</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {cat.items.map((item) => (
                    <div key={item.name} style={{
                      display: 'flex',
                      gap: '1.25rem',
                      padding: '1.5rem',
                      background: 'var(--color-cream-dark)',
                      borderRadius: 'var(--border-radius)',
                      borderLeft: `4px solid ${cat.color}`,
                      border: '1px solid rgba(241, 245, 249, 1)',
                      borderLeftWidth: '4px',
                    }}>
                      <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{item.icon}</span>
                      <div>
                        <h4 style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--color-forest)',
                          marginBottom: '4px',
                        }}>{item.name}</h4>
                        <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
