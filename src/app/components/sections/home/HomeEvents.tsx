'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    day: '14', month: 'Jun',
    title: 'Wayanad Spice Trail Walk',
    desc: 'Unearth local flora, cardamom, and wild pepper vines on a guided plantation path.',
    price: '₹2,500',
  },
  {
    day: '21', month: 'Jun',
    title: 'Hillside Sunrise Meditation',
    desc: 'A three-day yoga escape on our panoramic valley deck at first light.',
    price: '₹8,000',
  },
  {
    day: '04', month: 'Jul',
    title: 'Kathakali Cultural Night',
    desc: 'Immerse in legendary Kerala theatrical dance and classical instruments.',
    price: '₹3,500',
  },
];

export default function HomeEvents() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.event-row', {
        scrollTrigger: { trigger: '.events-list', start: 'top 80%' },
        opacity: 0, x: -30, duration: 0.8, stagger: 0.14, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-tint">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 7rem)',
          alignItems: 'start',
        }}>
          {/* Left — intro */}
          <div>
            <span className="section-label">Happenings</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>
              Events &amp; Experiences
            </h2>
            <div className="divider" />
            <p style={{ color: 'var(--color-text-soft)', marginBottom: '2.4rem', lineHeight: 1.85 }}>
              Seasonal activities that connect you deeply with Kerala's vibrant heritage,
              culinary flavours, and lush tropical landscape.
            </p>
            <Link href="/events" className="btn btn-blue">View All Experiences</Link>
          </div>

          {/* Right — event rows */}
          <div className="events-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {events.map((evt, idx) => (
              <div key={idx} className="event-row" style={{
                display: 'flex', gap: '1.4rem', padding: '1.5rem',
                background: '#fff', borderRadius: 'var(--radius)',
                border: '1px solid rgba(6,181,211,0.1)',
                boxShadow: '0 2px 16px rgba(13,30,53,0.04)',
                alignItems: 'center',
                transition: 'all 0.35s var(--ease)',
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand-cyan)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateX(5px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(6,181,211,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.1)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(13,30,53,0.04)';
                }}
              >
                {/* Date chip */}
                <div style={{
                  background: 'var(--brand-cyan)', borderRadius: 'var(--radius)',
                  padding: '1rem 0.8rem', textAlign: 'center', minWidth: '64px', color: '#fff', flexShrink: 0,
                }}>
                  <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '1.7rem', fontWeight: 700, lineHeight: 1 }}>{evt.day}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginTop: '2px', display: 'block' }}>{evt.month}</span>
                </div>
                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--color-text)', marginBottom: '0.3rem' }}>{evt.title}</h3>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: 'var(--color-text-soft)', marginBottom: '0.5rem' }}>{evt.desc}</p>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--brand-cyan-muted)' }}>{evt.price} / person</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
