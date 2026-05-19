'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const allReviews = [
  { name: 'Priya Menon', location: 'Bangalore', rating: 5, date: 'March 2025', stay: 'Treehouse Suite', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&q=80&fit=crop', text: 'blue bell. is nothing short of magical. The treehouse suite exceeded all our expectations — waking up to the sound of birds with the forest at eye level was a dream. The Ayurvedic spa treatments were divine.' },
  { name: 'Arjun & Kavitha Sharma', location: 'Mumbai', rating: 5, date: 'February 2025', stay: 'Forest Pool Villa', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop', text: 'Our honeymoon at blue bell. was the most romantic experience of our lives. The private pool villa, the candlelit dinner by the forest, the attentive staff who anticipated our every need — it was perfection.' },
  { name: 'David Thompson', location: 'London, UK', rating: 5, date: 'January 2025', stay: 'Heritage Cottage', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&fit=crop', text: 'Nothing compares to blue bell. The seamless blend of luxury and nature, the impeccable service, and the genuinely warm Kerala hospitality set this resort apart. Truly a hidden gem of the world.' },
  { name: 'Ananya Krishnan', location: 'Chennai', rating: 5, date: 'December 2024', stay: 'Bamboo Garden Suite', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80&fit=crop', text: 'I\'ve been to many luxury resorts across India but blue bell. is something else entirely. The bamboo garden suite was magical — absolute silence, the fragrance of the garden, and the most comfortable bed I\'ve slept in.' },
  { name: 'Rahul Patel', location: 'Delhi', rating: 5, date: 'November 2024', stay: 'Family Bungalow', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&fit=crop', text: 'Brought the entire family for a week-long stay. The children absolutely loved the nature walks and the team was incredible with kids. The private pool bungalow gave us all the space we needed. Best family holiday ever.' },
  { name: 'Sophie Laurent', location: 'Paris, France', rating: 5, date: 'October 2024', stay: 'Treehouse Suite', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80&fit=crop', text: 'I travelled solo to blue bell. for a wellness retreat and it completely transformed me. The Ayurvedic treatments, the yoga sessions at sunrise, the organic food — every element was perfectly curated.' },
];

export default function ReviewsGrid() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.review-full-card', {
        scrollTrigger: { trigger: '.reviews-full-grid', start: 'top 75%' },
        opacity: 0, y: 50, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1px',
          background: 'rgba(241, 245, 249, 1)',
          border: '1px solid rgba(241, 245, 249, 1)',
          marginBottom: 'clamp(3rem, 5vw, 5rem)',
          borderRadius: 'var(--border-radius)',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.02)',
        }}>
          {[
            { label: 'Overall Rating', value: '4.9/5' },
            { label: 'Cleanliness', value: '5.0/5' },
            { label: 'Service', value: '4.9/5' },
            { label: 'Amenities', value: '4.8/5' },
            { label: 'Value', value: '4.7/5' },
          ].map((s) => (
            <div key={s.label} style={{
              background: 'var(--color-cream-dark)',
              padding: '2.5rem 2rem',
              textAlign: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-sage)', display: 'block', lineHeight: 1 }}>{s.value.split('/')[0]}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginTop: '8px', display: 'block' }}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="reviews-full-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {allReviews.map((r, i) => (
            <div key={i} className="review-full-card" style={{
              background: '#fff',
              border: '1px solid rgba(241, 245, 249, 1)',
              borderRadius: 'var(--border-radius)',
              padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
              boxShadow: '0 10px 35px rgba(15, 23, 42, 0.03)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 15px 45px rgba(15, 23, 42, 0.06)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-sage)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 35px rgba(15, 23, 42, 0.03)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(241, 245, 249, 1)';
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.25rem' }}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <span key={s} style={{ color: 'var(--color-gold)', fontSize: '1rem' }}>★</span>
                ))}
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                fontWeight: 500,
              }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid rgba(241, 245, 249, 1)', paddingTop: '1.25rem' }}>
                <img src={r.avatar} alt={r.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-sage)' }} />
                <div>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, color: 'var(--color-forest)', fontSize: '0.9rem', display: 'block' }}>{r.name}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'var(--color-text-light)', fontWeight: 600 }}>{r.location} · {r.stay} · {r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
