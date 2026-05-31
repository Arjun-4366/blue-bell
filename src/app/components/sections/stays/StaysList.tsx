'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import stay1 from '@/images/treehouse/zlkpjggmhq60elmgfepd.webp';
import stay2 from '@/images/dome/AAL04276.webp';
import stay3 from '@/images/treehouseroom/ewaplievvophiiabfsyy.webp';
import stay4 from '@/images/dome/AAL04289.webp';
import stay5 from '@/images/treehouse/aaimgllqgfwqnt83tkgy.webp';
import stay6 from '@/images/treehouseroom/cao4vmabymep8aciw3jd.webp';

gsap.registerPlugin(ScrollTrigger);

const stays = [
  { id: 1, name: 'Canopy Treehouse Suite',     type: 'Signature Treetop Villa',       price: '₹24,000', size: '90 sqm',  guests: 2, image: stay1, tag: 'Best Seller',    features: ['Treetop Views', 'Sunrise Deck', 'Outdoor Clawfoot Bath', 'Teakwood Architecture', 'Organic Breakfast'],    desc: 'Perched high in the rainforest canopy, this hand-crafted treehouse is an engineering marvel. Modern premium amenities surrounded by pristine jungle.' },
  { id: 2, name: 'Earthen Dome Sanctuary',      type: 'Luxury Geodesic Dome',          price: '₹19,500', size: '110 sqm', guests: 2, image: stay2, tag: 'Most Popular',  features: ['Geodesic Mud Walls', 'Private Garden Path', 'Tropical Garden View', 'Mist Deck', 'Eco-Luxury Bedding'], desc: 'Constructed from local clay and wood, our geodesic earthen dome blends traditional craftsmanship with futuristic architecture.' },
  { id: 3, name: 'Treehouse Nesting Room',       type: 'Cozy Canopy Interior Nest',    price: '₹16,500', size: '60 sqm',  guests: 2, image: stay3, tag: 'Romantic Escape', features: ['Inner Forest Views', 'Warm Wood Panelling', 'Plush Bedding', 'Vintage Fixtures', 'Local Hand-woven Art'], desc: 'Adorned with warm teak walls, traditional Kerala styling, and circular ambient ceilings — the perfect romantic forest nest.' },
  { id: 4, name: 'Earthen Pool Dome',            type: 'Luxury Glamping Dome Villa',   price: '₹28,000', size: '140 sqm', guests: 3, image: stay4, tag: 'Luxury Glamping', features: ['Private Plunge Pool', 'Clay-Carved Murals', 'Organic Mini-bar', 'Dedicated Butler', 'Garden Night Lighting'], desc: 'Our largest Earthen Dome with a private plunge pool steps from your entrance. Clay-carved mural walls and breathtaking garden lighting.' },
  { id: 5, name: 'Whispering Bamboo Treehouse',  type: 'Premium Treetop Sanctuary',    price: '₹26,500', size: '95 sqm',  guests: 2, image: stay5, tag: 'Eco Award Winner', features: ['Multi-Level View Decks', 'Bamboo Grove Path', 'Clawfoot Bath', 'Rainforest Morning Mist', 'Premium Eco-Linens'], desc: 'Rising 40 feet above the forest floor surrounded by bamboo groves. Catch panoramic views of mist-clad tea plantations from your open deck.' },
  { id: 6, name: 'Treehouse Canopy Suite',       type: 'Treetop Luxury Studio',        price: '₹18,000', size: '65 sqm',  guests: 2, image: stay6, tag: 'Best Value',     features: ['Smart TV & Concierge', 'Warm Teak Interiors', 'Ambient Lighting', 'Plush Linens', 'Forest Views'], desc: 'The perfect blend of modern comfort and pristine forest atmosphere with warm gold lighting and large windows onto the canopy.' },
];

// Input style helper
const inputStyle: React.CSSProperties = {
  padding: '0.85rem 1.2rem',
  border: '1.5px solid rgba(13,30,53,0.1)',
  background: '#fff',
  borderRadius: 'var(--radius)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.92rem',
  width: '100%',
  outline: 'none',
  color: 'var(--color-text)',
  transition: 'border-color 0.25s ease',
};

export default function StaysList() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stay-full-card', {
        scrollTrigger: { trigger: '.stays-full-grid', start: 'top 75%' },
        opacity: 0, y: 55, duration: 0.9, stagger: 0.14, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 5rem)' }}>
          <span className="section-label">Our Accommodations</span>
          <h2 className="section-title">Choose Your Sanctuary</h2>
          <div className="divider center" />
        </div>

        <div className="stays-full-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {stays.map((stay) => (
            <div key={stay.id} className="stay-full-card" style={{
              background: '#fff', borderRadius: 'var(--radius)',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(13,30,53,0.05)',
              border: '1px solid rgba(6,181,211,0.08)',
              transition: 'transform 0.4s var(--ease), box-shadow 0.4s var(--ease)',
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 55px rgba(13,30,53,0.1)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(13,30,53,0.05)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.08)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <Image src={stay.image} alt={stay.name} fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.6s var(--ease)' }}
                  placeholder="blur"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {stay.tag && (
                  <span style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    background: 'var(--brand-cyan)', color: '#fff',
                    fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '5px 14px', borderRadius: '2px',
                  }}>{stay.tag}</span>
                )}
                <div style={{
                  position: 'absolute', bottom: '1rem', right: '1rem',
                  background: 'rgba(10,22,46,0.8)', backdropFilter: 'blur(8px)',
                  padding: '5px 12px', borderRadius: '3px',
                }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
                    {stay.guests} guests · {stay.size}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.8rem' }}>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--brand-cyan-muted)', display: 'block', marginBottom: '0.4rem',
                }}>{stay.type}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--color-text)', marginBottom: '0.7rem' }}>
                  {stay.name}
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'var(--color-text-soft)', marginBottom: '1.3rem' }}>
                  {stay.desc}
                </p>

                {/* Feature tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.6rem' }}>
                  {stay.features.map((f) => (
                    <span key={f} style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 500,
                      color: 'var(--color-text-soft)',
                      background: 'var(--color-bg-accent)',
                      padding: '4px 10px', borderRadius: '3px',
                      border: '1px solid rgba(6,181,211,0.15)',
                    }}>{f}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.1rem', borderTop: '1px solid rgba(13,30,53,0.07)' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--brand-cyan-muted)' }}>{stay.price}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-text-soft)', marginLeft: '3px', fontFamily: 'var(--font-sans)' }}>/night</span>
                  </div>
                  <Link href="/book-now" className="btn btn-primary" style={{ padding: '0.62rem 1.5rem', fontSize: '0.63rem' }}>Book Stay</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
