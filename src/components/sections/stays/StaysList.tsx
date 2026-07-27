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
  { id: 1, name: 'Canopy Treehouse Suite',     type: 'Signature Treetop Villa',       size: '90 sqm',  guests: 2, image: stay1, tag: 'Best Seller',    features: ['Treetop Views', 'Sunrise Deck', 'Outdoor Clawfoot Bath', 'Teakwood Architecture', 'Organic Breakfast'],    desc: 'Perched high in the rainforest canopy, this hand-crafted treehouse is an engineering marvel. Modern premium amenities surrounded by pristine jungle.' },
  { id: 2, name: 'Earthen Dome Sanctuary',      type: 'Luxury Geodesic Dome',          size: '110 sqm', guests: 2, image: stay2, tag: 'Most Popular',  features: ['Geodesic Mud Walls', 'Private Garden Path', 'Tropical Garden View', 'Mist Deck', 'Eco-Luxury Bedding'], desc: 'Constructed from local clay and wood, our geodesic earthen dome blends traditional craftsmanship with futuristic architecture.' },
  { id: 3, name: 'Treehouse Nesting Room',       type: 'Cozy Canopy Interior Nest',    size: '60 sqm',  guests: 2, image: stay3, tag: 'Romantic Escape', features: ['Inner Forest Views', 'Warm Wood Panelling', 'Plush Bedding', 'Vintage Fixtures', 'Local Hand-woven Art'], desc: 'Adorned with warm teak walls, traditional Kerala styling, and circular ambient ceilings — the perfect romantic forest nest.' },
  { id: 4, name: 'Earthen Pool Dome',            type: 'Luxury Glamping Dome Villa',   size: '140 sqm', guests: 3, image: stay4, tag: 'Luxury Glamping', features: ['Private Plunge Pool', 'Clay-Carved Murals', 'Organic Mini-bar', 'Dedicated Butler', 'Garden Night Lighting'], desc: 'Our largest Earthen Dome with a private plunge pool steps from your entrance. Clay-carved mural walls and breathtaking garden lighting.' },
  { id: 5, name: 'Whispering Bamboo Treehouse',  type: 'Premium Treetop Sanctuary',    size: '95 sqm',  guests: 2, image: stay5, tag: 'Eco Award Winner', features: ['Multi-Level View Decks', 'Bamboo Grove Path', 'Clawfoot Bath', 'Rainforest Morning Mist', 'Premium Eco-Linens'], desc: 'Rising 40 feet above the forest floor surrounded by bamboo groves. Catch panoramic views of mist-clad tea plantations from your open deck.' },
  { id: 6, name: 'Treehouse Canopy Suite',       type: 'Treetop Luxury Studio',        size: '65 sqm',  guests: 2, image: stay6, tag: 'Best Value',     features: ['Smart TV & Concierge', 'Warm Teak Interiors', 'Ambient Lighting', 'Plush Linens', 'Forest Views'], desc: 'The perfect blend of modern comfort and pristine forest atmosphere with warm gold lighting and large windows onto the canopy.' },
];

export default function StaysList() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stay-full-card', 
        { opacity: 0, y: 55 },
        {
          scrollTrigger: { trigger: '.stays-full-grid', start: 'top 75%' },
          opacity: 1, y: 0, duration: 0.9, stagger: 0.14, ease: 'power3.out',
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 5rem)' }}>
          <span className="section-label">Our Accommodations</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Choose Your Sanctuary</h2>
          <div className="divider center" />
        </div>

        <div className="stays-full-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(1rem, 2.5vw, 2rem)',
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
              <div className="stay-image" style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <Image src={stay.image} alt={stay.name} fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.6s var(--ease)' }}
                  placeholder="blur"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {stay.tag && (
                  <span className="stay-tag" style={{
                    position: 'absolute', top: 'clamp(0.7rem, 1.2vw, 1rem)', left: 'clamp(0.7rem, 1.2vw, 1rem)',
                    background: 'var(--brand-cyan)', color: '#fff',
                    fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.75vw, 0.6rem)', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '5px 14px', borderRadius: '2px',
                  }}>{stay.tag}</span>
                )}
                <div className="stay-info-badge" style={{
                  position: 'absolute', bottom: 'clamp(0.7rem, 1.2vw, 1rem)', right: 'clamp(0.7rem, 1.2vw, 1rem)',
                  background: 'rgba(10,22,46,0.8)', backdropFilter: 'blur(8px)',
                  padding: '5px 12px', borderRadius: '3px',
                }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 0.8vw, 0.65rem)', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
                    {stay.guests} guests · {stay.size}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: 'clamp(1.2rem, 2vw, 1.8rem)' }}>
                <span style={{
                  fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.58rem, 0.78vw, 0.62rem)', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--brand-cyan-muted)', display: 'block', marginBottom: '0.4rem',
                }}>{stay.type}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 1.8vw, 1.4rem)', fontWeight: 400, color: 'var(--color-text)', marginBottom: '0.7rem' }}>
                  {stay.name}
                </h3>
                <p style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)', lineHeight: 1.75, color: 'var(--color-text-soft)', marginBottom: 'clamp(1rem, 1.5vw, 1.3rem)' }}>
                  {stay.desc}
                </p>

                {/* Feature tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.25rem, 0.4vw, 0.35rem)', marginBottom: 'clamp(1.2rem, 1.8vw, 1.6rem)' }}>
                  {stay.features.map((f) => (
                    <span key={f} style={{
                      fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.62rem, 0.82vw, 0.68rem)', fontWeight: 500,
                      color: 'var(--color-text-soft)',
                      background: 'var(--color-bg-accent)',
                      padding: '4px 10px', borderRadius: '3px',
                      border: '1px solid rgba(6,181,211,0.15)',
                      whiteSpace: 'nowrap',
                    }}>{f}</span>
                  ))}
                </div>

                <div className="stay-footer" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingTop: 'clamp(0.8rem, 1.2vw, 1.1rem)', borderTop: '1px solid rgba(13,30,53,0.07)' }}>
                  <Link href="/book-now" className="btn btn-primary" style={{ padding: 'clamp(0.55rem, 0.8vw, 0.62rem) clamp(1.2rem, 1.8vw, 1.5rem)', fontSize: 'clamp(0.58rem, 0.78vw, 0.63rem)' }}>Book Stay</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .stays-full-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 1.2rem !important;
          }
          
          .stay-image {
            aspect-ratio: 4/3 !important;
          }
        }
        
        @media (max-width: 480px) {
          .stays-full-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .stay-image {
            aspect-ratio: 3/2 !important;
          }
          
          .stay-tag {
            top: 0.7rem !important;
            left: 0.7rem !important;
            font-size: 0.55rem !important;
            padding: 4px 10px !important;
          }
          
          .stay-info-badge {
            bottom: 0.7rem !important;
            right: 0.7rem !important;
          }
          
          .stay-full-card > div:last-child {
            padding: 1.2rem !important;
          }
          
          .stay-footer {
            flex-direction: column;
            gap: 0.8rem;
            align-items: flex-start !important;
          }
          
          .stay-footer .btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}