'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import eventImg1 from '@/assests/images/events/events-3.webp';
import eventImg2 from '@/assests/images/events/events-1.webp';
import eventImg3 from '@/assests/images/dining/dining-5.webp';
import eventImg4 from '@/assests/images/dome/dome-5.webp';
import eventImg5 from '@/assests/images/events/events-7.webp';
import eventImg7 from '@/assests/images/events/events-2.webp';
import eventImg8 from '@/assests/images/events/events-4.webp';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    day: '14', month: 'Jun',
    title: 'Grand Monsoon Wedding Fair',
    desc: 'Tour our scenic outdoor lawns, lakeside pavilions, and meet elite wedding designers.',
    image: eventImg1,
  },
  {
    day: '21', month: 'Jun',
    title: 'Royal Malabar Banquet & Sangeet',
    desc: 'An evening of classical sangeet and a curated feast of royal Malabar cuisine.',
    image: eventImg2,
  },
  {
    day: '28', month: 'Jun',
    title: 'Kathakali & Traditional Art Night',
    desc: 'Witness the dramatic storytelling art of Kathakali live in our open-air amphitheater.',
    image: eventImg7,
  },
  {
    day: '04', month: 'Jul',
    title: 'Wayanad Spice Trail & Dining',
    desc: 'Discover organic spice farming followed by a traditional Malabar woodfire dinner.',
    image: eventImg3,
  },
  {
    day: '12', month: 'Jul',
    title: 'Lakeside Sufi & Ghazal Soiree',
    desc: 'A soulful evening of live Sufi and Ghazal music by the lakeside with local barbecue.',
    image: eventImg8,
  },
  {
    day: '18', month: 'Jul',
    title: 'Forest Dome Sunrise Yoga',
    desc: 'Rejuvenate with a morning yoga class and breathing exercises under our glass domes.',
    image: eventImg4,
  },
];

export default function HomeEvents() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.event-row', 
        { opacity: 0, x: -30 },
        {
          scrollTrigger: { trigger: '.events-list', start: 'top 80%' },
          opacity: 1, x: 0, duration: 0.8, stagger: 0.14, ease: 'power3.out',
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-tint">
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div className="events-layout" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 6vw, 7rem)',
          alignItems: 'start',
        }}>
          {/* Left — intro */}
          <div className="events-intro">
            <span className="section-label">Happenings</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Events &amp; Experiences
            </h2>
            <div className="divider" />
            <p style={{ color: 'var(--color-text-soft)', marginBottom: '2.4rem', lineHeight: 1.85, fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)' }}>
              Seasonal activities that connect you deeply with Kerala's vibrant heritage,
              culinary flavours, and lush tropical landscape.
            </p>
            <Link href="/events" className="btn btn-blue">View All Experiences</Link>
          </div>

          {/* Right — event rows */}
          <div className="events-list" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.8rem, 1.5vw, 1.1rem)' }}>
            {events.map((evt, idx) => (
              <div key={idx} className="event-row" style={{
                display: 'flex', gap: 'clamp(0.8rem, 1.5vw, 1.4rem)', 
                padding: 'clamp(1rem, 1.8vw, 1.5rem)',
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
                {/* Image Container with Floating Date */}
                <div className="event-img-container" style={{
                  position: 'relative',
                  width: '120px',
                  height: '90px',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}>
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                  />
                  <div className="event-date" style={{
                    position: 'absolute',
                    top: '6px',
                    left: '6px',
                    zIndex: 2,
                    background: 'var(--brand-cyan)',
                    borderRadius: 'calc(var(--radius) - 6px)',
                    padding: '0.35rem 0.3rem', 
                    textAlign: 'center',
                    minWidth: '46px', 
                    color: '#fff',
                    boxShadow: '0 4px 10px rgba(6,181,211,0.25)',
                  }}>
                    <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1 }}>{evt.day}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.45rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.8, marginTop: '1px', display: 'block' }}>{evt.month}</span>
                  </div>
                </div>
                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', fontWeight: 400, color: 'var(--color-text)', marginBottom: '0.3rem' }}>{evt.title}</h3>
                  <p style={{ fontSize: 'clamp(0.72rem, 1vw, 0.82rem)', lineHeight: 1.6, color: 'var(--color-text-soft)' }}>{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .events-layout {
            gap: 2.5rem !important;
          }
          
          .event-row:hover {
            transform: translateX(3px) !important;
          }
        }
        
        @media (max-width: 480px) {
          .events-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .events-intro {
            text-align: center;
          }
          
          .events-intro .divider {
            margin-left: auto;
            margin-right: auto;
          }
          
          .events-intro .btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          
          .event-row {
            flex-direction: column;
            align-items: stretch !important;
            gap: 0.8rem !important;
            padding: 1.2rem !important;
          }
          
          .event-row:hover {
            transform: translateY(-3px) !important;
          }
          
          .event-img-container {
            width: 100% !important;
            height: 160px !important;
          }
          
          .event-date {
            padding: 0.5rem 0.4rem !important;
            min-width: 52px !important;
          }
          
          .event-date span:first-child {
            font-size: 1.1rem !important;
          }
          
          .event-date span:last-child {
            font-size: 0.5rem !important;
          }
          
          .events-list {
            gap: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}