'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What\'s the difference between the Tree Trunk and the Tree Hut?',
    answer: 'Both are three-floor treehouse stays, but built for different groups. The Tree Trunk is non-AC and made for two — a private room on each floor, best for couples. The Tree Hut is air-conditioned and built for families, comfortably fitting 3-4 guests per room with an extra bed available.',
  },
  {
    question: 'How do I reach Blue Bell Resort in Wayanad?',
    answer: 'Blue Bell is in Periya, in Wayanad\'s quieter northern belt, easily reached from both Bangalore and Mysore — making it a natural weekend option for Karnataka travelers as well as guests from within Kerala.',
  },
  {
    question: 'Can guests choose their meals, and is a candlelight dinner available?',
    answer: 'Yes — the in-house kitchen serves North Indian, South Indian, and Chinese food, so guests choose what suits them rather than a fixed set menu. Candlelight dinner is also available, as per wants.',
  },
  {
    question: 'What are the check-in and check-out timings?',
    answer: 'Check-in is at 2 PM and check-out is at 11 AM.',
  },
  {
    question: 'What\'s with all the artwork on the walls at Blue Bell?',
    answer: 'It\'s not decoration for its own sake — the artistic, tribal-inspired walls are Blue Bell\'s way of keeping the stay connected to Periya and Wayanad\'s own local culture.',
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: { trigger: '.faq-list', start: 'top 82%' },
        opacity: 0, y: 28, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div className="faq-layout" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 6vw, 7rem)',
          alignItems: 'start',
        }}>
          {/* Left — intro + help card */}
          <div className="faq-intro">
            <span className="section-label">Common Queries</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Frequently Asked Questions
            </h2>
            <div className="divider" />
            <p style={{ color: 'var(--color-text-soft)', marginBottom: '2.4rem', lineHeight: 1.85, fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)' }}>
              Questions about reaching Periya, Ayurvedic packages, or your stay?
              Our most common guest enquiries are answered here.
            </p>

            {/* Help card */}
            <div style={{
              background: 'linear-gradient(135deg, var(--color-bg-accent) 0%, var(--color-bg-warm) 100%)',
              padding: 'clamp(1.5rem, 2.5vw, 2rem)', borderRadius: 'var(--radius)',
              border: '1px solid rgba(6,181,211,0.15)',
            }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, color: 'var(--color-text)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', marginBottom: '0.6rem' }}>Still have questions?</h4>
              <p style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)', marginBottom: '1.4rem', color: 'var(--color-text-soft)' }}>
                Our guest support team is online 24/7 to assist with your travel planning.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Contact Support
              </Link>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.6rem, 1vw, 0.85rem)' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="faq-item" style={{
                  background: '#fff', borderRadius: 'var(--radius)',
                  border: `1px solid ${isOpen ? 'var(--brand-cyan)' : 'rgba(13,30,53,0.08)'}`,
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 8px 28px rgba(6,181,211,0.08)' : '0 2px 12px rgba(13,30,53,0.03)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}>
                  <button onClick={() => setOpenIndex(isOpen ? null : idx)} style={{
                    width: '100%', padding: 'clamp(1rem, 1.8vw, 1.4rem) clamp(1.2rem, 2vw, 1.8rem)',
                    background: 'none', border: 'none',
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', textAlign: 'left', cursor: 'pointer', gap: '1rem',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.85rem, 1.2vw, 0.97rem)', fontWeight: 600,
                      color: isOpen ? 'var(--brand-cyan-muted)' : 'var(--color-text)',
                      transition: 'color 0.3s ease', flex: 1,
                    }}>{faq.question}</span>
                    <span style={{
                      fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.2rem, 1.8vw, 1.4rem)', fontWeight: 300,
                      color: isOpen ? 'var(--brand-cyan)' : 'var(--color-text-soft)',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.35s var(--ease), color 0.3s ease',
                      lineHeight: 1, flexShrink: 0,
                    }}>+</span>
                  </button>
                  <div style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s var(--ease)',
                  }}>
                    <div style={{
                      padding: '0 clamp(1.2rem, 2vw, 1.8rem) clamp(1.2rem, 1.8vw, 1.5rem)',
                      fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)', color: 'var(--color-text-soft)', lineHeight: 1.8,
                    }}>{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .faq-layout {
            gap: 2.5rem !important;
          }
          
          .faq-item button {
            padding: 1.1rem 1.3rem !important;
          }
          
          .faq-item button span:first-child {
            font-size: 0.88rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .faq-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .faq-intro {
            text-align: center;
          }
          
          .faq-intro .divider {
            margin-left: auto;
            margin-right: auto;
          }
          
          .faq-item button {
            padding: 1rem 1.2rem !important;
            gap: 0.8rem !important;
          }
          
          .faq-item button span:first-child {
            font-size: 0.85rem !important;
            line-height: 1.4 !important;
          }
          
          .faq-item button span:last-child {
            font-size: 1.3rem !important;
          }
          
          .faq-item > div > div {
            padding: 0 1.2rem 1rem !important;
            font-size: 0.82rem !important;
          }
        }
      `}</style>
    </section>
  );
}