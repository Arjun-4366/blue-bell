'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assests/images/logo.png';

const footerLinks = {
  Explore: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Stays', href: '/stays' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
  ],
  Discover: [
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book Now', href: '/book-now' },
  ],
};

// Real SVG social icons
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

import { ContactInfoContent } from '@/types/siteContent';

export default function Footer({ contactInfo }: { contactInfo?: ContactInfoContent }) {
  return (
    <footer className="footer" style={{
      background: '#FFFFFF',
      color: 'var(--color-text-mid)',
      paddingTop: 'clamp(60px, 10vw, 120px)',
      position: 'relative', zIndex: 20,
      borderTop: '1px solid rgba(13, 30, 53, 0.08)',
    }}>
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)',
          paddingBottom: 'clamp(30px, 6vw, 60px)',
          borderBottom: '1px solid rgba(13, 30, 53, 0.08)',
        }}>

          {/* Brand column */}
          <div className="footer-brand" style={{ gridColumn: 'span 1' }}>
            <Link href="/" className="footer-logo-link" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', marginBottom: '1.5rem', width: '100%' }}>
              <Image
                src={logo}
                alt="Blue Bell Logo"
                height={48}
                style={{
                  height: "48px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "invert(1) hue-rotate(180deg) brightness(0.85)",
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
                  fontWeight: 'normal',
                  color: 'var(--color-text)',
                  display: 'block',
                  lineHeight: 1.1,
                }}>Blue Bell</span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.42rem, 0.65vw, 0.48rem)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--brand-blue)',
                  opacity: 0.9,
                  display: 'block',
                  marginTop: '2px',
                }}>Nature's Masterpiece</span>
              </div>
            </Link>
            <p style={{
              fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)', lineHeight: 1.8,
              color: 'var(--color-text-mid)', maxWidth: '280px',
            }}>
              Nestled in the lush highlands of Periya, Wayanad, Blue Bell is a premium organic
              sanctuary crafted for deep rejuvenation and quiet wonder.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              {[
                { label: 'Instagram', icon: <IconInstagram />, href: contactInfo?.instagramUrl || "https://www.instagram.com/bluebell_wayanad?igsh=N3lsZmd6bGhpY3By" },
                { label: 'Facebook', icon: <IconFacebook />, href: contactInfo?.facebookUrl || "https://www.facebook.com/share/1DFmvkGUuo/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 'clamp(34px, 4.5vw, 38px)', height: 'clamp(34px, 4.5vw, 38px)',
                    border: '1px solid rgba(13, 30, 53, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-text-mid)',
                    transition: 'all 0.35s var(--ease)',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'var(--brand-blue)';
                    el.style.borderColor = 'var(--brand-blue)';
                    el.style.color = '#ffffff';
                    el.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'transparent';
                    el.style.borderColor = 'rgba(13, 30, 53, 0.1)';
                    el.style.color = 'var(--color-text-mid)';
                    el.style.transform = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer-nav">
              <h4 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.58rem, 0.8vw, 0.62rem)', fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--brand-blue)', marginBottom: 'clamp(1.2rem, 2vw, 1.75rem)',
              }}>{group}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'clamp(0.7rem, 1.2vw, 0.9rem)' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                        color: 'var(--color-text-mid)',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand-blue)';
                        e.currentTarget.style.paddingLeft = '6px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--color-text-mid)';
                        e.currentTarget.style.paddingLeft = '0px';
                      }}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="footer-contact">
            <h4 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.58rem, 0.8vw, 0.62rem)', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--brand-blue)', marginBottom: 'clamp(1.2rem, 2vw, 1.75rem)',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
              {[
                { label: 'Address', value: contactInfo?.address || 'Peria Korome Rd, Alattil, Kerala 670644, India' },
                { label: 'Phone', value: contactInfo?.phone || '+91 73060 45321' },
                { label: 'Email', value: contactInfo?.email || 'bluebelllwayanad0@gmail.com', isEmail: true },
              ].map((item) => (
                <div key={item.label}>
                  <span style={{
                    display: 'block', fontSize: 'clamp(0.55rem, 0.75vw, 0.6rem)', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'var(--color-text-soft)', marginBottom: '4px',
                    fontFamily: 'var(--font-sans)',
                  }}>{item.label}</span>
                  {item.isEmail ? (
                    <a
                      href={`mailto:${item.value}`}
                      style={{
                        fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)', color: 'var(--brand-blue)',
                        fontFamily: 'var(--font-sans)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                        transition: 'color 0.25s ease',
                        wordBreak: 'break-all',
                      }}
                      className="hover:text-brand-blue-deep"
                    >{item.value}</a>
                  ) : (
                    <span style={{
                      fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)', color: 'var(--color-text)',
                      fontFamily: 'var(--font-sans)',
                    }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: 'clamp(1.2rem, 2vw, 1.75rem) 0', flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{
            fontSize: 'clamp(0.7rem, 0.9vw, 0.78rem)', color: 'var(--color-text-soft)',
            fontFamily: 'var(--font-sans)',
          }}>
            © {new Date().getFullYear()} Blue Bell Resort, Wayanad. All rights reserved.
          </p>
          <div className="footer-legal" style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Service', href: '/terms-of-service' },
            ].map((item) => (
              <Link
                key={item.href} href={item.href}
                style={{
                  fontSize: 'clamp(0.65rem, 0.85vw, 0.72rem)', color: 'var(--color-text-soft)',
                  fontFamily: 'var(--font-sans)', transition: 'color 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-soft)')}
              >{item.label}</Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.footer-logo-link) {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          text-decoration: none;
          justify-content: flex-start;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important;
            gap: 2rem !important;
          }
          
          .footer-brand {
            grid-column: span 2 !important;
          }
          
          .footer-brand p {
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          :global(.footer-logo-link) {
            justify-content: center !important;
          }

          .footer {
            padding-top: 50px !important;
          }
          
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem 1.5rem !important;
          }
          
          .footer-brand {
            grid-column: span 2 !important;
            text-align: center;
          }
          
          .footer-brand p {
            margin: 0 auto;
          }
          
          .footer-brand > div:last-child {
            justify-content: center;
          }
          
          .footer-nav h4,
          .footer-contact h4 {
            font-size: 0.58rem !important;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 0.8rem !important;
            padding: 1.2rem 0 !important;
          }
          
          .footer-legal {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem !important;
          }
          
          .footer-legal a {
            font-size: 0.68rem !important;
          }
        }
      `}</style>
    </footer>
  );
}