'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Stays', href: '/stays' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen && mobileMenuRef.current) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
      const links = mobileMenuRef.current.querySelectorAll('.mobile-link');
      gsap.fromTo(links,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease',
          background: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.96)',
          boxShadow: scrolled || !isHome ? '0 10px 40px rgba(0, 0, 0, 0.04)' : 'none',
          backdropFilter: scrolled || !isHome ? 'blur(16px)' : 'none',
          padding: scrolled ? '0.6rem 0' : '1rem 0',
          borderBottom: isTransparent ? 'none' : '1px solid rgba(241, 245, 249, 0.8)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo with butterfly/bellflower vector emblem */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', lineHeight: 1 }}>
            {/* SVG Logo Emblem */}
            <svg width="42" height="42" viewBox="0 0 200 150" fill="none" style={{ marginRight: '6px' }}>
              <defs>
                <linearGradient id="logoBlueCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="bellFlowerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              
              {/* Butterfly wings */}
              <path d="M120 40 C145 10, 190 35, 175 75 C160 115, 130 90, 120 75 C110 90, 80 115, 65 75 C50 35, 95 10, 120 40 Z" fill="url(#logoBlueCyan)" opacity="0.95" />
              <path d="M120 55 C130 35, 150 45, 142 65 C135 85, 125 75, 120 70 C115 75, 105 85, 98 65 C90 45, 110 35, 120 55 Z" fill="#10b981" opacity="0.85" />
              
              {/* Antennae */}
              <path d="M115 35 Q118 20 125 15" stroke={isTransparent ? '#ffffff' : '#006097'} strokeWidth="3" strokeLinecap="round" />
              <path d="M125 35 Q122 20 115 15" stroke={isTransparent ? '#ffffff' : '#006097'} strokeWidth="3" strokeLinecap="round" />
              
              {/* Left hanging bellflowers with green stem */}
              <path d="M25 80 Q35 50 65 62" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" />
              
              {/* Bellflower 1 */}
              <path d="M20 98 C12 105, 15 125, 25 125 C35 125, 38 105, 30 98 Z" fill="url(#bellFlowerGrad)" />
              <path d="M18 120 L25 130 L32 120" stroke="#10b981" strokeWidth="2" fill="none" />
              
              {/* Bellflower 2 */}
              <path d="M50 78 C42 85, 45 105, 55 105 C65 105, 68 85, 60 78 Z" fill="url(#bellFlowerGrad)" />
            </svg>

            {/* Logo Text Styling inspired by the image */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-script)',
                fontSize: '1.9rem',
                fontWeight: 'normal',
                color: isTransparent ? '#ffffff' : 'var(--color-brand-deep)',
                transition: 'color 0.4s ease',
                lineHeight: 0.9,
              }}>
                Blue Bell
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.45rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: isTransparent ? 'rgba(255, 255, 255, 0.75)' : 'var(--color-text-light)',
                transition: 'color 0.4s ease',
                marginTop: '1px',
              }}>
                Nature's Masterpiece
              </span>
            </div>
          </Link>

          {/* Desktop Nav links with semi-bold font weights */}
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: 'clamp(1rem, 1.6vw, 2rem)',
            alignItems: 'center',
          }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 600, // Semi-bold
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isTransparent ? 'rgba(255, 255, 255, 0.9)' : 'var(--color-forest)',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                    paddingBottom: '4px',
                  }}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: pathname === link.href ? '100%' : '0%',
                    height: '2px',
                    background: 'var(--color-brand-cyan)',
                    transition: 'width 0.3s ease',
                  }} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Pill button for CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
            <Link
              href="/book-now"
              className={isTransparent ? "btn btn-gold" : "btn btn-primary"}
              style={{ padding: '0.65rem 1.6rem', fontSize: '0.68rem' }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="hamburger"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '6px',
              padding: '6px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  background: isTransparent ? '#fff' : 'var(--color-forest)',
                  transition: 'all 0.3s ease',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5.5px, 5.5px)'
                      : i === 1 ? 'scale(0)'
                        : 'rotate(-45deg) translate(5.5px, -5.5px)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'var(--color-forest-dark)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '3rem 2rem 2rem',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-script)',
              fontSize: '3rem',
              color: '#fff',
              display: 'block',
            }}>Blue Bell</span>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-brand-cyan)',
              marginTop: '1px',
            }}>Nature's Masterpiece</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.8rem',
                    fontWeight: 500,
                    color: pathname === link.href ? 'var(--color-brand-cyan)' : '#fff',
                    display: 'block',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '2.5rem' }}>
            <Link
              href="/book-now"
              className="btn btn-gold"
              onClick={() => setMenuOpen(false)}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
        .nav-link:hover span { width: 100% !important; }
        .nav-link:hover { color: var(--color-brand-cyan) !important; }
      `}</style>
    </>
  );
}
