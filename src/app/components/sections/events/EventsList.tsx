'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);

const allEvents = [
  { id: 1, date: { day: '14', month: 'Jun' }, title: 'Wayanad Spice Trail Experience',       type: 'Guided Experience',      desc: 'Walk through our 5-acre spice plantation with our expert naturalist. Discover cardamom, pepper, nutmeg and vanilla in their natural habitat.', price: '₹2,500', time: '09:00 AM – 12:00 PM' },
  { id: 2, date: { day: '21', month: 'Jun' }, title: 'Yoga & Sunrise Meditation Retreat',    type: 'Wellness Retreat',       desc: 'A 3-day immersive retreat combining forest bathing, sunrise yoga, and traditional pranayama sessions on our hilltop pavilion.', price: '₹8,000', time: '06:00 AM – 09:00 AM' },
  { id: 3, date: { day: '04', month: 'Jul' }, title: 'Kerala Cultural Gala Night',           type: 'Cultural Evening',       desc: 'An evening of authentic Kathakali performances, traditional Keralite cuisine, and folk music under the stars.', price: '₹3,500', time: '07:00 PM – 10:30 PM' },
  { id: 4, date: { day: '18', month: 'Jul' }, title: "Chef's Masterclass: Kerala Spices",   type: 'Culinary Masterclass',   desc: 'Learn the secrets of authentic Malabar cuisine from our executive chef. Master spice blending and prepare signature dishes.', price: '₹4,500', time: '11:30 AM – 02:30 PM' },
  { id: 5, date: { day: '01', month: 'Aug' }, title: 'Hillside Photography Workshop',        type: 'Creative Workshop',      desc: 'Capture the majestic mist and raw beauty of the Western Ghats, guided by award-winning landscape photographers.', price: '₹3,000', time: '05:30 AM – 09:30 AM' },
];

export default function EventsList() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.evt-card', {
        scrollTrigger: { trigger: '.evt-grid', start: 'top 80%' },
        opacity: 0, y: 35, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 4vw, 5rem)' }}>
          <span className="section-label">Calendar</span>
          <h2 className="section-title">Upcoming Experiences</h2>
          <div className="divider center" />
        </div>

        <div className="evt-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {allEvents.map((evt) => (
            <div key={evt.id} className="evt-card" style={{
              display: 'grid', gridTemplateColumns: 'auto 1fr auto',
              gap: '2rem',
              background: '#fff', borderRadius: 'var(--radius)',
              padding: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              boxShadow: '0 4px 20px rgba(13,30,53,0.04)',
              border: '1px solid rgba(6,181,211,0.1)',
              alignItems: 'center',
              transition: 'all 0.35s var(--ease)',
            }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 16px 45px rgba(6,181,211,0.1)';
                el.style.borderColor = 'var(--brand-cyan)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 20px rgba(13,30,53,0.04)';
                el.style.borderColor = 'rgba(6,181,211,0.1)';
              }}
            >
              {/* Date */}
              <div style={{
                textAlign: 'center', minWidth: '72px', padding: '1.1rem 0.8rem',
                background: 'var(--brand-cyan)', borderRadius: 'var(--radius)',
                boxShadow: '0 4px 14px rgba(6,181,211,0.3)',
              }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 700, color: '#fff', display: 'block', lineHeight: 1 }}>{evt.date.day}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: '3px', display: 'block' }}>{evt.date.month}</span>
              </div>

              {/* Content */}
              <div>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brand-blue)', display: 'block', marginBottom: '0.35rem' }}>{evt.type}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 400, color: 'var(--color-text)', marginBottom: '0.4rem' }}>{evt.title}</h3>
                <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: 'var(--color-text-soft)', marginBottom: '0.6rem' }}>{evt.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-soft)', fontSize: '0.78rem' }}>
                  <ClockIcon /> {evt.time}
                </div>
              </div>

              {/* Price & CTA */}
              <div style={{ textAlign: 'right', minWidth: '140px', borderLeft: '1px solid rgba(6,181,211,0.12)', paddingLeft: '2rem' }} className="evt-right">
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--brand-cyan-muted)', display: 'block', marginBottom: '0.7rem' }}>{evt.price}</span>
                <Link href="/book-now" className="btn btn-primary" style={{ padding: '0.62rem 1.4rem', fontSize: '0.63rem', width: '100%', justifyContent: 'center' }}>
                  Reserve
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .evt-card { grid-template-columns: 1fr !important; gap: 1.2rem !important; }
          .evt-right { border-left: none !important; padding-left: 0 !important; text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
