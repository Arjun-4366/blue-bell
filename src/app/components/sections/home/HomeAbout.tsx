'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on main image
      gsap.fromTo('.about-img-main img',
        { y: -60 },
        {
          y: 60,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-img-main',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // Staggered reveal of text elements
      gsap.from('.about-reveal-el', {
        scrollTrigger: {
          trigger: '.about-text-group',
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });

      // Quick hover scale for stats
      const stats = gsap.utils.toArray('.about-stat-item');
      stats.forEach((stat: any) => {
        stat.addEventListener('mouseenter', () => {
          gsap.to(stat, { scale: 1.03, y: -4, borderColor: 'var(--color-sage)', duration: 0.3 });
        });
        stat.addEventListener('mouseleave', () => {
          gsap.to(stat, { scale: 1, y: 0, borderColor: 'rgba(241, 245, 249, 1)', duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: '#ffffff', overflow: 'hidden' }}>
      <div className="container" ref={containerRef}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(4rem, 8vw, 8rem)',
          alignItems: 'center',
        }}>
          {/* Overlapping Images */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div className="about-img-main" style={{
              borderRadius: 'var(--border-radius-lg)',
              overflow: 'hidden',
              aspectRatio: '4/5',
              boxShadow: '0 20px 80px rgba(15, 23, 42, 0.04)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&q=85&fit=crop"
                alt="Blue Bell Resort aerial view"
                style={{ width: '100%', height: '120%', objectFit: 'cover' }}
              />
            </div>
            <div className="about-img-accent" style={{
              position: 'absolute',
              bottom: '-3rem',
              right: '-1.5rem',
              width: '50%',
              aspectRatio: '1/1',
              borderRadius: 'var(--border-radius)',
              overflow: 'hidden',
              border: '8px solid #ffffff',
              boxShadow: '0 30px 60px rgba(15, 23, 42, 0.1)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=600&q=85&fit=crop"
                alt="Kerala spice garden"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Elegant Floating Badge */}
            <div style={{
              position: 'absolute',
              top: '2.5rem',
              left: '-1.5rem',
              background: 'var(--color-sage)',
              padding: '1.4rem 1.2rem',
              textAlign: 'center',
              borderRadius: 'var(--border-radius)',
              boxShadow: '0 15px 35px rgba(16, 185, 129, 0.3)',
            }}>
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1,
              }}>15+</span>
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginTop: '6px',
                lineHeight: 1.3,
              }}>Years of<br />Excellence</span>
            </div>
          </div>

          {/* About Text Content */}
          <div className="about-text-group">
            <span className="section-label about-reveal-el">Our Philosophy</span>
            <h2 className="section-title about-reveal-el" style={{ marginBottom: '1.5rem', fontWeight: 800 }}>
              A Sanctuary Born from Wayanad's Soul
            </h2>
            <div className="divider about-reveal-el" />
            <p className="about-reveal-el" style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: 'var(--color-text)' }}>
              Founded with a passion for preservation and premium living, blue bell. was built on a simple belief: that true luxury is found in raw harmony with nature. Nestled within 15 acres of lush rainforest in Vythiri, our resort is a living tribute to the biodiversity of Kerala.
            </p>
            <p className="about-reveal-el" style={{ marginBottom: '2.5rem', fontSize: '0.95rem' }}>
              Every detail—from our hand-woven eco-linens to our curated spice trail walks—reflects the warm, authentic hospitality that Kerala is famous for. We invite you to experience a deep homecoming to nature.
            </p>

            {/* Stat Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '3rem',
            }}
              className="about-reveal-el"
            >
              {[
                { value: '4.9★', label: 'Guest Rating' },
                { value: '42', label: 'Eco-Villas' },
                { value: '15+', label: 'Acres of Jungle' },
                { value: '100%', label: 'Sustainable' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="about-stat-item"
                  style={{
                    padding: '1.25rem',
                    background: 'var(--color-cream-dark)',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid rgba(241, 245, 249, 1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: 'var(--color-forest)',
                    lineHeight: 1,
                  }}>{stat.value}</span>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-light)',
                    marginTop: '6px',
                    display: 'block',
                  }}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about-reveal-el">
              <Link href="/about" className="btn btn-primary">
                Discover Our Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
