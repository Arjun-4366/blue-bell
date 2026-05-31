'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'How do I reach Blue Bell Resort in Wayanad?',
    answer: 'We are located in Vythiri, Wayanad. The nearest airport is Calicut International Airport (CCJ), approximately 75 km away — a 2.5-hour scenic drive. The nearest railway station is Kozhikode. We offer premium private airport transfers upon request.',
  },
  {
    question: 'What are the check-in and check-out timings?',
    answer: 'Standard check-in is at 2:00 PM and check-out at 11:00 AM. Early check-in or late check-out is available based on availability and may incur a nominal charge.',
  },
  {
    question: 'Is high-speed Wi-Fi available at the resort?',
    answer: 'Yes — complimentary high-speed fibre Wi-Fi is available throughout all sanctuaries and public spaces, ensuring you stay connected while immersed in nature.',
  },
  {
    question: 'Are spa treatments included in the room rates?',
    answer: 'Standard rates do not include full spa packages, though most direct bookings include a complimentary 15-minute Ayurvedic welcome foot massage. We recommend booking wellness packages in advance.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Free cancellation is available if requested 14 days or more before check-in. Cancellations within 14 days are subject to a one-night charge.',
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
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 7rem)',
          alignItems: 'start',
        }}>
          {/* Left — intro + help card */}
          <div>
            <span className="section-label">Common Queries</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>
              Frequently Asked Questions
            </h2>
            <div className="divider" />
            <p style={{ color: 'var(--color-text-soft)', marginBottom: '2.4rem', lineHeight: 1.85 }}>
              Questions about reaching Vythiri, Ayurvedic packages, or your stay?
              Our most common guest enquiries are answered here.
            </p>

            {/* Help card */}
            <div style={{
              background: 'linear-gradient(135deg, var(--color-bg-accent) 0%, var(--color-bg-warm) 100%)',
              padding: '2rem', borderRadius: 'var(--radius)',
              border: '1px solid rgba(6,181,211,0.15)',
            }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, color: 'var(--color-text)', fontSize: '1.15rem', marginBottom: '0.6rem' }}>Still have questions?</h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '1.4rem', color: 'var(--color-text-soft)' }}>
                Our guest support team is online 24/7 to assist with your travel planning.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Contact Support
              </Link>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
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
                    width: '100%', padding: '1.4rem 1.8rem',
                    background: 'none', border: 'none',
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', textAlign: 'left', cursor: 'pointer', gap: '1rem',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)', fontSize: '0.97rem', fontWeight: 600,
                      color: isOpen ? 'var(--brand-cyan-muted)' : 'var(--color-text)',
                      transition: 'color 0.3s ease', flex: 1,
                    }}>{faq.question}</span>
                    <span style={{
                      fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 300,
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
                      padding: '0 1.8rem 1.5rem',
                      fontSize: '0.9rem', color: 'var(--color-text-soft)', lineHeight: 1.8,
                    }}>{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
