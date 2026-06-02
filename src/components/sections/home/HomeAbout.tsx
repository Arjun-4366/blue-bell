'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import resortMain from '@/images/dining/DSC02122.webp';
import aboutAccent from '@/images/treehouse/kwfdzddhhvcbaglapaol.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeAbout() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect - only on desktop
      if (window.innerWidth >= 768) {
        gsap.fromTo('.about-img-main img', { y: -40 }, {
          y: 40, ease: 'none',
          scrollTrigger: { trigger: '.about-img-main', start: 'top bottom', end: 'bottom top', scrub: true },
        });
      }
      
      gsap.from('.about-reveal-el', {
        scrollTrigger: { trigger: '.about-text-group', start: 'top 85%' },
        opacity: 0, y: 35, duration: 0.9, stagger: 0.1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: '#fff', overflow: 'hidden' }}>
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(2rem, 8vw, 8rem)',
          alignItems: 'center',
        }}>
          {/* Image column */}
          <div style={{ position: 'relative' }}>
            <div className="about-img-main" style={{
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              aspectRatio: '4/5',
              boxShadow: '0 20px 60px rgba(13,30,53,0.08)',
            }}>
              <Image src={resortMain} alt="Blue Bell Resort" style={{ width: '100%', height: '120%', objectFit: 'cover' }} placeholder="blur" />
            </div>
            {/* Accent image */}
            <div className="about-accent-img" style={{
              position: 'absolute', bottom: '-2.5rem', right: '-1.2rem',
              width: '48%', aspectRatio: '1/1',
              borderRadius: 'var(--radius)', overflow: 'hidden',
              border: '6px solid #fff',
              boxShadow: '0 20px 50px rgba(13,30,53,0.12)',
            }}>
              <Image src={aboutAccent} alt="Treetop Treehouse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} placeholder="blur" />
            </div>
            {/* Badge */}
            <div className="about-badge" style={{
              position: 'absolute', top: '2.5rem', left: '-1.2rem',
              background: 'var(--brand-cyan)',
              padding: '1.2rem 1rem', textAlign: 'center',
              borderRadius: 'var(--radius)',
              boxShadow: '0 12px 30px rgba(6,181,211,0.25)',
            }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>15+</span>
              <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.5rem, 0.9vw, 0.55rem)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginTop: '5px', lineHeight: 1.3 }}>Years of<br />Excellence</span>
            </div>
          </div>

          {/* Text column */}
          <div className="about-text-group">
            <span className="section-label about-reveal-el">Our Philosophy</span>
            <h2 className="section-title about-reveal-el" style={{ marginBottom: '1.2rem', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              A Sanctuary Born from<br />Wayanad's Soul
            </h2>
            <div className="divider about-reveal-el" />
            <p className="about-reveal-el" style={{ marginBottom: '1.3rem', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', color: 'var(--color-text-mid)' }}>
              Founded with a passion for preservation and premium living, Blue Bell was built on a simple belief: that true luxury is found in raw harmony with nature. Nestled within 15 acres of lush rainforest in Vythiri, our resort features Earthen Geodesic Domes and wood-sculpted Treetop Treehouses.
            </p>
            <p className="about-reveal-el" style={{ marginBottom: '2.2rem', fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)', color: 'var(--color-text-soft)' }}>
              Every detail reflects the warm, authentic hospitality that Kerala is famous for. We invite you to experience a deep homecoming to nature.
            </p>

            {/* Stats */}
            <div className="about-reveal-el about-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '2.5rem' }}>
              {[
                { value: '4.9★', label: 'Guest Rating' },
                { value: '28', label: 'Sanctuaries' },
                { value: '15+', label: 'Jungle Acres' },
                { value: '100%', label: 'Sustainable' },
              ].map((stat) => (
                <div key={stat.label} style={{
                  padding: 'clamp(0.8rem, 1.5vw, 1.2rem)',
                  background: 'var(--color-bg-accent)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid rgba(6,181,211,0.1)',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand-cyan)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(6,181,211,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.1)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontWeight: 700, color: 'var(--brand-cyan-muted)', lineHeight: 1 }}>{stat.value}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 0.9vw, 0.68rem)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-soft)', marginTop: '6px', display: 'block' }}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about-reveal-el">
              <Link href="/about" className="btn btn-blue" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                Discover Our Story
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            gap: 3rem !important;
          }
          
          .about-img-main {
            aspect-ratio: 3/4 !important;
          }
          
          .about-accent-img {
            width: 40% !important;
            bottom: -1.5rem !important;
            right: -0.8rem !important;
            border-width: 4px !important;
          }
          
          .about-badge {
            top: 1.5rem !important;
            left: -0.8rem !important;
            padding: 0.8rem 0.7rem !important;
          }
          
          .about-stats-grid {
            gap: 0.6rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          
          .about-img-main {
            aspect-ratio: 4/5 !important;
          }
          
          .about-accent-img {
            width: 35% !important;
            bottom: -1rem !important;
            right: -0.5rem !important;
            border-width: 3px !important;
          }
          
          .about-badge {
            top: 1rem !important;
            left: -0.5rem !important;
            padding: 0.7rem 0.6rem !important;
          }
          
          .about-text-group {
            text-align: center;
          }
          
          .about-text-group .divider {
            margin-left: auto;
            margin-right: auto;
          }
          
          .about-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}