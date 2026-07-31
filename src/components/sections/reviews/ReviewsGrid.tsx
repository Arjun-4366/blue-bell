'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const allReviews = [
  { name: 'Priya Menon', location: 'Bangalore', rating: 5, date: 'March 2025', stay: 'Treehouse Suite', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&q=80&fit=crop', text: 'Blue Bell is nothing short of magical. The treehouse suite exceeded all expectations — waking to birdsong with the forest at eye level was a dream. The Ayurvedic spa treatments were divinely restorative.' },
  { name: 'Arjun & Kavitha Sharma', location: 'Mumbai', rating: 5, date: 'February 2025', stay: 'Forest Pool Dome', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop', text: 'Our honeymoon was the most romantic experience of our lives. The private pool villa, the candlelit forest dinner, the attentive staff who anticipated our every need — it was absolute perfection.' },
  { name: 'David Thompson', location: 'London, UK', rating: 5, date: 'January 2025', stay: 'Earthen Dome Sanctuary', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&fit=crop', text: 'Nothing compares to Blue Bell. The seamless blend of luxury and raw nature, the impeccable service, and the genuine Kerala warmth sets this resort apart as a true hidden gem of the world.' },
  { name: 'Ananya Krishnan', location: 'Chennai', rating: 5, date: 'December 2024', stay: 'Canopy Treehouse Suite', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80&fit=crop', text: 'I\'ve been to many luxury resorts but Blue Bell is something else entirely. Absolute silence, the fragrance of the rainforest, and the most comfortable bed I have ever slept in.' },
  { name: 'Rahul Patel', location: 'Delhi', rating: 5, date: 'November 2024', stay: 'Earthen Pool Dome', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&fit=crop', text: 'Brought the entire family for a week-long stay. The children loved the nature walks, the team was incredible with kids, and the private pool gave us all the space we needed. Best family holiday ever.' },
  { name: 'Sophie Laurent', location: 'Paris, France', rating: 5, date: 'October 2024', stay: 'Whispering Bamboo Treehouse', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80&fit=crop', text: 'I travelled solo for a wellness retreat and it completely transformed me. The Ayurvedic treatments, sunrise yoga, and organic food — every element was perfectly curated for genuine healing.' },
  { name: 'Dr. Amit Verma', location: 'Hyderabad', rating: 5, date: 'September 2024', stay: 'Veda Spa Suite', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&fit=crop', text: 'As a medical professional, I was deeply impressed by the authenticity of their Ayurveda program. The consultations were thorough, and the herbal gardens on-site are pristine. A wellness experience.' },
  { name: 'Elena Rostova', location: 'Berlin, Germany', rating: 5, date: 'August 2024', stay: 'Canopy Treehouse Suite', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80&fit=crop', text: 'Watching the sunrise over the misty tea valleys from the treehouse balcony is a memory I will cherish forever. Absolute serenity, eco-friendly practices, and top-tier luxury.' },
];

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--brand-cyan)" style={{ flexShrink: 0 }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function ReviewsGrid() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.review-full-card', 
        { opacity: 0, y: 45 },
        {
          scrollTrigger: { trigger: '.reviews-full-grid', start: 'top 75%' },
          opacity: 1, y: 0, duration: 0.9, stagger: 0.11, ease: 'power3.out',
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <span className="section-label">Guest Feedback</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>What Our Guests Say</h2>
          <div className="divider center" />
        </div>

        {/* Stats bar */}
        <div className="stats-bar" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          border: '1px solid rgba(6,181,211,0.12)',
          borderRadius: 'var(--radius)', overflow: 'hidden',
          marginBottom: 'clamp(2rem, 5vw, 5rem)',
          boxShadow: '0 4px 20px rgba(13,30,53,0.04)',
        }}>
          {[
            { label: 'Overall Rating', value: '4.9' },
            { label: 'Cleanliness',    value: '5.0' },
            { label: 'Service',        value: '4.9' },
            { label: 'Amenities',      value: '4.8' },
            { label: 'Location',       value: '4.9' },
            { label: 'Value',          value: '4.7' },
          ].map((s, i) => (
            <div key={s.label} className="stat-item" style={{
              background: i % 2 === 0 ? '#fff' : 'var(--color-bg-warm)',
              padding: 'clamp(1.2rem, 2.5vw, 2rem) clamp(1rem, 1.8vw, 1.5rem)', 
              textAlign: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 400, color: 'var(--brand-cyan-muted)', display: 'block', lineHeight: 1 }}>{s.value}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.75vw, 0.62rem)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-soft)', marginTop: '8px', display: 'block' }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div className="reviews-full-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(0.8rem, 1.8vw, 1.4rem)',
        }}>
          {allReviews.map((r, i) => (
            <div key={i} className="review-full-card" style={{
              background: '#fff', borderRadius: 'var(--radius)',
              border: '1px solid rgba(6,181,211,0.1)',
              padding: 'clamp(1.2rem, 2.5vw, 2.2rem)',
              boxShadow: '0 4px 20px rgba(13,30,53,0.04)',
              transition: 'all 0.35s var(--ease)',
            }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 16px 45px rgba(6,181,211,0.1)';
                el.style.transform = 'translateY(-4px)';
                el.style.borderColor = 'var(--brand-cyan)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = '0 4px 20px rgba(13,30,53,0.04)';
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(6,181,211,0.1)';
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: 'clamp(0.8rem, 1.2vw, 1.1rem)' }}>
                {Array.from({ length: r.rating }).map((_, s) => <StarIcon key={s} />)}
              </div>

              {/* Text */}
              <p style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)', fontWeight: 300,
                color: 'var(--color-text-mid)', lineHeight: 1.7, marginBottom: 'clamp(1rem, 1.5vw, 1.4rem)',
              }}>"{r.text}"</p>

              {/* Author */}
              <div className="review-author" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid rgba(13,30,53,0.07)', paddingTop: 'clamp(0.8rem, 1.2vw, 1.1rem)' }}>
                <img src={r.avatar} alt={r.name} style={{ width: 'clamp(36px, 5vw, 42px)', height: 'clamp(36px, 5vw, 42px)', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--brand-cyan)', flexShrink: 0 }} />
                <div className="review-author-info">
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-text)', fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)', display: 'block' }}>{r.name}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.65rem, 0.85vw, 0.72rem)', color: 'var(--color-text-soft)' }}>{r.location} · {r.stay} · {r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .stats-bar {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          .stat-item {
            padding: 1.2rem 0.8rem !important;
          }
          
          .stat-item:nth-child(4),
          .stat-item:nth-child(5) {
            border-top: 1px solid rgba(6,181,211,0.12);
          }
          
          .reviews-full-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .stats-bar {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .stat-item {
            padding: 1rem 0.6rem !important;
          }
          
          .stat-item:nth-child(odd) {
            border-right: 1px solid rgba(6,181,211,0.08);
          }
          
          .stat-item:nth-child(5) {
            grid-column: span 2;
          }
          
          .reviews-full-grid {
            grid-template-columns: 1fr !important;
            gap: 0.8rem !important;
          }
          
          .review-full-card {
            padding: 1.2rem !important;
          }
          
          .review-author-info span:last-child {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}