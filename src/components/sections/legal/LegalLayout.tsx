'use client';

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ eyebrow, title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <section className="section-dark" style={{
        paddingTop: 'clamp(150px, 20vw, 210px)',
        paddingBottom: 'clamp(50px, 7vw, 80px)',
      }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', marginBottom: 'clamp(1rem, 2vw, 1.4rem)' }}>
            <span style={{ width: 'clamp(18px, 3vw, 24px)', height: '1px', background: 'rgba(6,181,211,0.5)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.9vw, 0.62rem)', fontWeight: 600,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brand-cyan)',
            }}>{eyebrow}</span>
            <span style={{ width: 'clamp(18px, 3vw, 24px)', height: '1px', background: 'rgba(6,181,211,0.5)' }} />
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontWeight: 400,
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#fff', lineHeight: 1.15,
          }}>{title}</h1>
          <div className="divider center" />
          <p style={{ fontSize: 'clamp(0.75rem, 1vw, 0.82rem)', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-prose" style={{ maxWidth: '780px' }}>
          {children}
        </div>
      </section>

      <style jsx global>{`
        .legal-prose h2 {
          font-size: clamp(1.25rem, 2.2vw, 1.55rem);
          margin-top: clamp(2.4rem, 4vw, 3.2rem);
          margin-bottom: 0.9rem;
        }
        .legal-prose h2:first-child { margin-top: 0; }
        .legal-prose p { margin-bottom: 1.1rem; }
        .legal-prose ul {
          padding-left: 1.3rem;
          margin: 0 0 1.2rem;
          list-style: disc;
        }
        .legal-prose li {
          color: var(--color-text-mid);
          line-height: 1.85;
          font-size: 0.95rem;
          margin-bottom: 0.55rem;
        }
        .legal-prose li:last-child { margin-bottom: 0; }
        .legal-prose strong { color: var(--color-text); font-weight: 600; }
        .legal-prose a { color: var(--brand-blue); text-decoration: underline; text-underline-offset: 2px; }
      `}</style>
    </>
  );
}
