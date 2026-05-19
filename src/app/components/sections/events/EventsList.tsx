'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const allEvents = [
  {
    id: 1,
    date: { day: '14', month: 'Jun' },
    title: 'Wayanad Spice Trail Experience',
    type: 'Guided Experience',
    desc: 'Walk through our 5-acre spice plantation with our expert naturalist. Discover cardamom, pepper, nutmeg and vanilla in their natural habitat.',
    image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=600&q=80&fit=crop',
    price: '₹2,500 / person',
    time: '09:00 AM - 12:00 PM',
  },
  {
    id: 2,
    date: { day: '21', month: 'Jun' },
    title: 'Yoga & Sunrise Meditation Retreat',
    type: 'Wellness Retreat',
    desc: 'A 3-day immersive retreat combining forest bathing, sunrise yoga, and traditional pranayama sessions on our hilltop pavilion.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop',
    price: '₹8,000 / person',
    time: '06:00 AM - 09:00 AM (Daily)',
  },
  {
    id: 3,
    date: { day: '04', month: 'Jul' },
    title: 'Kerala Cultural Gala Night',
    type: 'Cultural Event',
    desc: 'An evening of authentic Kathakali performances, traditional Keralite cuisine, and folk music under the stars.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80&fit=crop',
    price: '₹3,500 / person',
    time: '07:00 PM - 10:30 PM',
  },
  {
    id: 4,
    date: { day: '18', month: 'Jul' },
    title: 'Chef\'s Masterclass: Kerala Spices',
    type: 'Culinary Masterclass',
    desc: 'Learn the secrets of authentic Malabar cuisine from our executive chef. Master the art of spice blending and prepare key signature dishes.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80&fit=crop',
    price: '₹4,500 / person',
    time: '11:30 AM - 02:30 PM',
  },
  {
    id: 5,
    date: { day: '01', month: 'Aug' },
    title: 'Hillside Photography Workshop',
    type: 'Creative Workshop',
    desc: 'Capture the majestic mist and raw beauty of Wayanad\'s Western Ghats. Guided by award-winning landscape photographers.',
    image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=600&q=80&fit=crop',
    price: '₹3,000 / person',
    time: '05:30 AM - 09:30 AM',
  },
];

export default function EventsList() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.evt-card', {
        scrollTrigger: { trigger: '.evt-grid', start: 'top 80%' },
        opacity: 0, y: 40, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">Calendar</span>
          <h2 className="section-title" style={{ fontWeight: 800 }}>Upcoming Experiences</h2>
          <div className="divider center" />
        </div>

        <div className="evt-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {allEvents.map((evt) => (
            <div
              key={evt.id}
              className="evt-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '2rem',
                background: '#ffffff',
                borderRadius: 'var(--border-radius)',
                padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)',
                border: '1px solid rgba(241, 245, 249, 1)',
                alignItems: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 15px 45px rgba(15, 23, 42, 0.06)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-sage)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.03)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(241, 245, 249, 1)';
              }}
            >
              {/* Date Box */}
              <div style={{
                textAlign: 'center',
                minWidth: '80px',
                padding: '1.2rem 1rem',
                background: 'var(--color-sage)',
                borderRadius: 'var(--border-radius)',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1,
                }}>{evt.date.day}</span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.9)',
                  marginTop: '4px',
                  display: 'block',
                }}>{evt.date.month}</span>
              </div>

              {/* Center Content */}
              <div>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold-dark)',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}>{evt.type}</span>
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--color-forest)',
                  marginBottom: '0.5rem',
                }}>{evt.title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{evt.desc}</p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                    🕒 {evt.time}
                  </span>
                </div>
              </div>

              {/* Right Booking */}
              <div style={{ textAlign: 'right', minWidth: '150px', borderLeft: '1px solid rgba(241, 245, 249, 1)', paddingLeft: '2rem' }} className="evt-right">
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  color: 'var(--color-sage)',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}>{evt.price.split(' ')[0]}</span>
                <Link href="/book-now" className="btn btn-primary" style={{ padding: '0.7rem 1.6rem', fontSize: '0.7rem', width: '100%', justifyContent: 'center' }}>
                  Reserve
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .evt-card {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .evt-right {
            border-left: none !important;
            padding-left: 0 !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
