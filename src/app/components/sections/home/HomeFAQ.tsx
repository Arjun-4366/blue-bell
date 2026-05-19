'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'How do I reach Blue Bell Resort in Wayanad?',
    answer: 'We are located in Vythiri, Wayanad. The nearest airport is Calicut International Airport (CCJ), about 75 km away (a 2.5-hour scenic drive). The nearest railway station is Kozhikode (KLT). We provide premium private airport transfers upon request.',
  },
  {
    question: 'What are the check-in and check-out timings?',
    answer: 'Our standard check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in or late check-out is subject to room availability and may incur nominal additional fees.',
  },
  {
    question: 'Is internet/Wi-Fi available at the resort?',
    answer: 'Yes, we provide complimentary high-speed fiber Wi-Fi throughout all guest villas, suites, and public spaces, ensuring you stay connected while nestled in nature.',
  },
  {
    question: 'Are spa treatments included in the villa rates?',
    answer: 'Standard rates do not include full spa treatments, though most direct bookings include a complimentary 15-minute Ayurvedic welcome foot massage. We highly recommend booking wellness packages in advance.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Free cancellation is available if requested up to 14 days before your scheduled check-in. Cancellations made within 14 days of arrival are subject to a fee equal to the cost of one night stay.',
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-accordion-item', {
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 80%',
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: 'var(--color-cream-dark)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>
          {/* Info column */}
          <div>
            <span className="section-label">Common Queries</span>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', fontWeight: 800 }}>Frequently Asked Questions</h2>
            <div className="divider" />
            <p style={{ marginBottom: '2.5rem' }}>
              Have questions about your stay, reaching Vythiri, or custom Ayurvedic packages? Here are answers to our guests' most common inquiries.
            </p>
            <div style={{
              background: '#ffffff',
              padding: '2rem',
              borderRadius: 'var(--border-radius)',
              boxShadow: '0 8px 30px rgba(15, 23, 42, 0.03)',
            }}>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, color: 'var(--color-forest)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Still need help?</h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '1.5rem' }}>Our guest support desk is online 24/7 to help coordinate your travel planning.</p>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Contact Support
              </Link>
            </div>
          </div>

          {/* Accordion Column */}
          <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="faq-accordion-item"
                  style={{
                    background: '#ffffff',
                    borderRadius: 'var(--border-radius)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.02)',
                    border: '1px solid rgba(241, 245, 249, 1)',
                  }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.5rem 2rem',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: isOpen ? 'var(--color-sage)' : 'var(--color-forest)',
                      transition: 'color 0.3s ease',
                      paddingRight: '1.5rem',
                    }}>{faq.question}</span>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      color: isOpen ? 'var(--color-sage)' : 'var(--color-text-light)',
                      transition: 'transform 0.4s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      lineHeight: 1,
                    }}>+</span>
                  </button>

                  {/* Answer wrapper */}
                  <div style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}>
                    <div style={{ padding: '0 2rem 2rem', fontSize: '0.92rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
                      {faq.answer}
                    </div>
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
