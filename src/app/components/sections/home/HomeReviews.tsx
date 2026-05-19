'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    rating: 5,
    text: "blue bell. is nothing short of magical. The treehouse suite exceeded all our expectations — waking up to the sound of birds with the misty rainforest surrounding us was an absolute dream. The Ayurvedic spa treatments were divine.",
    author: "Priya Menon",
    location: "Bangalore",
    stay: "Treehouse Suite",
  },
  {
    rating: 5,
    text: "Our honeymoon at blue bell. was the most romantic experience of our lives. The private pool villa, the candlelit dinner by the forest deck, the incredibly attentive staff who anticipated our every need — it was absolute perfection.",
    author: "Arjun & Kavitha Sharma",
    location: "Mumbai",
    stay: "Forest Pool Villa",
  },
  {
    rating: 5,
    text: "Nothing compares to blue bell. The seamless blend of luxury design and raw nature, the impeccable spice-garden dining, and the genuinely warm Kerala hospitality sets this resort apart. A hidden gem of the world.",
    author: "David Thompson",
    location: "London, UK",
    stay: "Heritage Cottage",
  },
];

export default function HomeReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const nextReview = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
        gsap.fromTo(contentRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4 }
        );
      }
    });
  };

  const prevReview = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: 20,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
        gsap.fromTo(contentRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4 }
        );
      }
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reviews-box', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = reviews[activeIndex];

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--color-cream-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title" style={{ fontWeight: 800 }}>Loved by Our Guests</h2>
        </div>

        <div className="reviews-box" style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: 'var(--border-radius-lg)',
          padding: 'clamp(2rem, 5vw, 5rem)',
          boxShadow: '0 15px 50px rgba(15, 23, 42, 0.04)',
          position: 'relative',
        }}>
          {/* Quote Icon decorative */}
          <span style={{
            position: 'absolute',
            top: '2rem',
            left: '2.5rem',
            fontFamily: 'var(--font-serif)',
            fontSize: '8rem',
            lineHeight: 1,
            color: 'rgba(16, 185, 129, 0.08)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}>“</span>

          <div ref={contentRef}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem', justifyContent: 'center' }}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <span key={i} style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>★</span>
              ))}
            </div>

            {/* Testimonial content */}
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              color: 'var(--color-forest)',
              lineHeight: 1.6,
              textAlign: 'center',
              marginBottom: '2.5rem',
              fontWeight: 600,
            }}>
              "{current.text}"
            </p>

            {/* Author */}
            <div style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                color: 'var(--color-sage)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.9rem',
                display: 'block',
                marginBottom: '4px',
              }}>
                {current.author}
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                color: 'var(--color-text-light)',
                fontWeight: 600,
              }}>
                {current.location} · Stayed in {current.stay}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(241, 245, 249, 1)',
          }}>
            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                  }}
                  aria-label={`Go to review ${idx + 1}`}
                  style={{
                    width: activeIndex === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: activeIndex === idx ? 'var(--color-sage)' : 'rgba(16, 185, 129, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={prevReview}
                aria-label="Previous testimonial"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  background: 'none',
                  color: 'var(--color-sage)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-sage)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = 'var(--color-sage)';
                }}
              >
                ←
              </button>
              <button
                onClick={nextReview}
                aria-label="Next testimonial"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  background: 'none',
                  color: 'var(--color-sage)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-sage)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = 'var(--color-sage)';
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link href="/reviews" className="btn btn-outline-dark" style={{ border: '2px solid var(--color-forest)' }}>
            Read All Guest Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
