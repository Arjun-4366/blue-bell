'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    day: '14',
    month: 'Jun',
    title: 'Wayanad Spice Trail Walk',
    desc: 'Unearth local flora, cardamom, and wild pepper vines on a guided plantation path.',
    price: '₹2,500',
  },
  {
    day: '21',
    month: 'Jun',
    title: 'Hillside Sunrise Meditation',
    desc: 'Breathe deep in a panoramic 3-day yoga escape atop our valley deck.',
    price: '₹8,000',
  },
  {
    day: '04',
    month: 'Jul',
    title: 'Kathakali Cultural Night',
    desc: 'Immerse yourself in legendary Kerala theatrical dance and classical instruments.',
    price: '₹3,500',
  },
];

export default function HomeEvents() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.event-row', {
        scrollTrigger: {
          trigger: '.events-list-container',
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
        }}>
          {/* Left info column */}
          <div>
            <span className="section-label">Happenings</span>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', fontWeight: 800 }}>Events & Experiences</h2>
            <div className="divider" />
            <p style={{ marginBottom: '2.5rem' }}>
              At blue bell., we curate seasonal activities designed to connect you deeply with Kerala's vibrant heritage, culinary flavors, and lush tropical landscapes.
            </p>
            <Link href="/events" className="btn btn-primary">
              View All Experiences
            </Link>
          </div>

          {/* Right events listing */}
          <div className="events-list-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {events.map((evt, idx) => (
              <div
                key={idx}
                className="event-row"
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  padding: '1.5rem',
                  background: 'var(--color-cream-dark)',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid rgba(241, 245, 249, 1)',
                  transition: 'all 0.3s ease',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-sage)';
                  (e.currentTarget as HTMLDivElement).style.background = '#ffffff';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(241, 245, 249, 1)';
                  (e.currentTarget as HTMLDivElement).style.background = 'var(--color-cream-dark)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)';
                }}
              >
                {/* Date stamp */}
                <div style={{
                  background: 'var(--color-sage)',
                  borderRadius: 'var(--border-radius)',
                  padding: '1rem 0.8rem',
                  textAlign: 'center',
                  minWidth: '70px',
                  color: '#ffffff',
                }}>
                  <span style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    lineHeight: 1,
                  }}>{evt.day}</span>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    opacity: 0.8,
                    marginTop: '2px',
                    display: 'block',
                  }}>{evt.month}</span>
                </div>

                {/* Details */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--color-forest)',
                    marginBottom: '0.25rem',
                  }}>{evt.title}</h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '0.5rem' }}>{evt.desc}</p>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--color-sage)',
                  }}>{evt.price} / person</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
