'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    rating: 5,
    text: 'Blue Bell is nothing short of magical. The treehouse suite exceeded every expectation — waking to birdsong with the misty rainforest surrounding us was an absolute dream.',
    author: 'Priya Menon',
    location: 'Bangalore',
    stay: 'Canopy Treehouse Suite',
  },
  {
    rating: 5,
    text: 'Our honeymoon at Blue Bell was the most romantic experience of our lives. The private pool villa, candlelit forest dinner — it was absolute perfection in every sense.',
    author: 'Arjun & Kavitha Sharma',
    location: 'Mumbai',
    stay: 'Earthen Pool Dome',
  },
  {
    rating: 5,
    text: 'Nothing compares to Blue Bell. The seamless blend of luxury design and raw nature, the impeccable spice-garden dining, and the warm Kerala hospitality sets this resort apart.',
    author: 'David Thompson',
    location: 'London, UK',
    stay: 'Earthen Dome Sanctuary',
  },
  {
    rating: 5,
    text: "I've been to many luxury resorts but Blue Bell is something else entirely. Absolute silence, the fragrance of the rainforest, and the most comfortable bed I have ever slept in.",
    author: 'Ananya Krishnan',
    location: 'Chennai',
    stay: 'Canopy Treehouse Suite',
  },
  {
    rating: 5,
    text: 'Brought the entire family for a week-long stay. The children loved the nature walks, the team was incredible with kids, and the private pool gave us all the space we needed.',
    author: 'Rahul Patel',
    location: 'Delhi',
    stay: 'Earthen Pool Dome',
  },
  {
    rating: 5,
    text: 'I travelled solo for a wellness retreat and it completely transformed me. The Ayurvedic treatments, sunrise yoga, and organic food — every element was perfectly curated for healing.',
    author: 'Sophie Laurent',
    location: 'Paris, France',
    stay: 'Whispering Bamboo Treehouse',
  },
  {
    rating: 5,
    text: 'As a medical professional, I was deeply impressed by the authenticity of their Ayurveda program. The consultations were thorough, and the herbal gardens on-site are pristine.',
    author: 'Dr. Amit Verma',
    location: 'Hyderabad',
    stay: 'Veda Spa Suite',
  },
  {
    rating: 5,
    text: 'Watching the sunrise over the misty tea valleys from the treehouse balcony is a memory I will cherish forever. Absolute serenity, eco-friendly practices, and top-tier luxury.',
    author: 'Elena Rostova',
    location: 'Berlin, Germany',
    stay: 'Canopy Treehouse Suite',
  },
];

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--brand-cyan)" style={{ flexShrink: 0 }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="review-marquee-card" style={{
      flex: '0 0 auto',
      width: 'min(85vw, 380px)',
      background: 'linear-gradient(135deg, #F7FAFC 0%, #EEF6FA 100%)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(6,181,211,0.1)',
      boxShadow: '0 10px 40px rgba(13,30,53,0.05)',
      padding: 'clamp(1.4rem, 2.5vw, 2.2rem)',
    }}>
      <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
        {Array.from({ length: review.rating }).map((_, i) => <StarIcon key={i} />)}
      </div>

      <p style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic',
        fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)', fontWeight: 300,
        color: 'var(--color-text)', lineHeight: 1.65,
        marginBottom: '1.6rem', minHeight: 'clamp(6.5rem, 12vw, 7.5rem)',
      }}>
        "{review.text}"
      </p>

      <div style={{ borderTop: '1px solid rgba(6,181,211,0.12)', paddingTop: '1.1rem' }}>
        <span style={{
          display: 'block', fontFamily: 'var(--font-sans)', fontWeight: 600,
          color: 'var(--brand-cyan-muted)', letterSpacing: '0.06em',
          textTransform: 'uppercase', fontSize: 'clamp(0.7rem, 0.9vw, 0.78rem)', marginBottom: '3px',
        }}>{review.author}</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.68rem, 0.85vw, 0.74rem)', color: 'var(--color-text-soft)' }}>
          {review.location} · {review.stay}
        </span>
      </div>
    </div>
  );
}

export default function HomeReviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reviews-marquee-wrap',
        { opacity: 0, y: 50 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: '#fff', overflow: 'hidden' }}>
      <div className="container" style={{ padding: 0 }}>

        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)', padding: '0 clamp(1rem, 3vw, 2rem)' }}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Loved by Our Guests</h2>
        </div>

        <div className="reviews-marquee-wrap" style={{ position: 'relative' }}>
          <div className="reviews-marquee-fade reviews-marquee-fade-left" />
          <div className="reviews-marquee-fade reviews-marquee-fade-right" />

          <div className="reviews-marquee-track">
            {reviews.map((r, i) => <ReviewCard key={`a-${i}`} review={r} />)}
            {reviews.map((r, i) => <ReviewCard key={`b-${i}`} review={r} />)}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'clamp(2rem, 3vw, 3rem)' }}>
          <Link href="/reviews" className="btn btn-outline-dark">Read All Guest Reviews</Link>
        </div>
      </div>

      <style jsx>{`
        .reviews-marquee-track {
          display: flex;
          gap: clamp(1rem, 2vw, 1.6rem);
          width: max-content;
          animation: reviews-scroll 48s linear infinite;
        }

        .reviews-marquee-wrap:hover .reviews-marquee-track {
          animation-play-state: paused;
        }

        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .reviews-marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(2rem, 8vw, 8rem);
          z-index: 2;
          pointer-events: none;
        }

        .reviews-marquee-fade-left {
          left: 0;
          background: linear-gradient(to right, #fff, rgba(255,255,255,0));
        }

        .reviews-marquee-fade-right {
          right: 0;
          background: linear-gradient(to left, #fff, rgba(255,255,255,0));
        }

        @media (prefers-reduced-motion: reduce) {
          .reviews-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
