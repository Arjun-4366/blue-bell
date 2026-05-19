'use client';

import Link from 'next/link';

const footerLinks = {
  Explore: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Stays', href: '/stays' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
  ],
  Discover: [
    { label: 'Events', href: '/events' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book Now', href: '/book-now' },
  ],
};

const socialLinks = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'Facebook', href: '#', icon: 'FB' },
  { label: 'Twitter', href: '#', icon: 'TW' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-forest-dark)',
      color: 'rgba(255,255,255,0.7)',
      paddingTop: 'clamp(80px, 10vw, 120px)',
      position: 'relative',
      zIndex: 20, /* Always scroll on top of fixed/pinned components */
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(3rem, 5vw, 5rem)',
          paddingBottom: 'clamp(40px, 6vw, 60px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ display: 'block', marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 800,
                color: '#fff',
                display: 'block',
                letterSpacing: '-0.02em',
              }}>blue bell.</span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'var(--color-sage)',
              }}>Resort & Spa · Wayanad</span>
            </Link>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '300px',
            }}>
              Nestled in the lush valleys of Wayanad's highlands, Blue Bell Resort is a premium organic sanctuary crafted for deep rejuvenation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-sage)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-sage)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-sage)',
                marginBottom: '1.75rem',
              }}>{group}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        color: 'rgba(255,255,255,0.5)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-sage)';
                        e.currentTarget.style.paddingLeft = '6px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                        e.currentTarget.style.paddingLeft = '0px';
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-sage)',
              marginBottom: '1.75rem',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Address', value: 'Vythiri, Wayanad, Kerala 673576, India' },
                { label: 'Phone', value: '+91 94960 00000' },
                { label: 'Email', value: 'stay@bluebellresort.in' },
              ].map((item) => (
                <div key={item.label}>
                  <span style={{
                    display: 'block',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-sans)',
                  }}>{item.label}</span>
                  <span style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                    fontFamily: 'var(--font-sans)',
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 0',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'var(--font-sans)',
          }}>
            © {new Date().getFullYear()} Blue Bell Resort & Spa. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.3)',
                  fontFamily: 'var(--font-sans)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-sage)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
