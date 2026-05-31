'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import treehouseMain from '@/images/treehouse/zlkpjggmhq60elmgfepd.webp';
import domeMain from '@/images/dome/AAL04276.webp';
import treehouseRoom from '@/images/treehouseroom/ewaplievvophiiabfsyy.webp';
import domeSuite from '@/images/dome/AAL04289.webp';

gsap.registerPlugin(ScrollTrigger);

const stays = [
  { id: 1, name: 'Canopy Treehouse Suite',   tag: 'Signature Treetop', price: '₹24,000', image: treehouseMain, size: '90 sqm',  guests: '2 Guests' },
  { id: 2, name: 'Earthen Dome Sanctuary',    tag: 'Popular Geodesic',  price: '₹19,500', image: domeMain,       size: '110 sqm', guests: '2 Guests' },
  { id: 3, name: 'Canopy Nesting Room',       tag: 'Cozy Retreat',      price: '₹16,500', image: treehouseRoom,  size: '60 sqm',  guests: '2 Guests' },
  { id: 4, name: 'Earthen Pool Dome',         tag: 'Luxury Villa',      price: '₹28,000', image: domeSuite,      size: '140 sqm', guests: '3 Guests' },
];

export default function FeaturedStays() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stay-card', {
        scrollTrigger: { trigger: '.stays-grid', start: 'top 80%' },
        opacity: 0, y: 50, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-tint">
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2.5rem, 4vw, 4rem)', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="section-label">Sanctuaries</span>
            <h2 className="section-title">Choose Your Luxury Space</h2>
          </div>
          <Link href="/stays" className="btn btn-outline-dark">View All Stays</Link>
        </div>

        {/* Grid */}
        <div className="stays-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
          {stays.map((stay) => (
            <div key={stay.id} className="stay-card" style={{
              background: '#ffffff',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(13,30,53,0.05)',
              border: '1px solid rgba(6,181,211,0.08)',
              transition: 'transform 0.4s var(--ease), box-shadow 0.4s var(--ease)',
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(13,30,53,0.1)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(13,30,53,0.05)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.08)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image src={stay.image} alt={stay.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s var(--ease)' }}
                  placeholder="blur"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <span style={{
                  position: 'absolute', top: '0.9rem', left: '0.9rem',
                  background: 'var(--brand-cyan)', color: '#fff',
                  fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '4px 12px', borderRadius: '2px',
                }}>{stay.tag}</span>
              </div>

              {/* Body */}
              <div style={{ padding: '1.6rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--color-text)', marginBottom: '0.8rem' }}>
                  {stay.name}
                </h3>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--color-text-soft)', marginBottom: '1.4rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
                  <span>{stay.size}</span>
                  <span>·</span>
                  <span>{stay.guests}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.1rem', borderTop: '1px solid rgba(13,30,53,0.07)' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--brand-cyan-muted)' }}>{stay.price}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-text-soft)', marginLeft: '3px', fontFamily: 'var(--font-sans)' }}>/night</span>
                  </div>
                  <Link href="/book-now" className="btn btn-primary" style={{ padding: '0.55rem 1.3rem', fontSize: '0.62rem' }}>Reserve</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
