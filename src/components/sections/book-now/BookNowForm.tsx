'use client';

import DjuboWidget from './DjuboWidget';

const benefitIcons = [
  <svg key='price' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'><path d='M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z'/><circle cx='7.5' cy='7.5' r='.5' fill='currentColor'/></svg>,
  <svg key='info' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'><circle cx='12' cy='12' r='10'/><path d='M12 16v-4'/><path d='M12 8h.01'/></svg>,
  <svg key='upgrade' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'><path d='m18 15-6-6-6 6'/><path d='M6 21V9'/><path d='M18 21V9'/></svg>,
  <svg key='food' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'><path d='M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7'/></svg>,
];

const benefits = [
  { title: 'No OTA Commissions',         desc: 'Book direct and skip the commission markups added by third-party travel sites. Same stay, fairer price.', iconIdx: 0 },
  { title: 'Know the Resort Inside Out',  desc: 'Our team walks you through all rooms and amenities before you confirm, so you know exactly what you are booking.', iconIdx: 1 },
  { title: 'More Nights, Bigger Savings', desc: 'Stay two or more nights and get our maximum available direct booking discount automatically.', iconIdx: 2 },
  { title: 'Meals Made Your Way',         desc: 'Tell us your dietary needs in advance and our kitchen will prepare your meals accordingly.', iconIdx: 3 },
];

export default function BookNowForm() {
  return (
    <section className='section' style={{ background: '#fff' }}>
      <div className='container' style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div
          className='booking-layout'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 6vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* Benefits column */}
          <div className='booking-benefits'>
            <span className='section-label'>Exclusive Benefits</span>
            <h2 className='section-title' style={{ marginBottom: '1.2rem', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Why Book Direct With Us?
            </h2>
            <div className='divider' />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.2rem, 2vw, 1.8rem)', marginTop: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              {benefits.map((b) => (
                <div key={b.title} className='benefit-item' style={{ display: 'flex', gap: 'clamp(0.8rem, 1.5vw, 1.2rem)', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 'clamp(38px, 5vw, 44px)', height: 'clamp(38px, 5vw, 44px)',
                    borderRadius: '10px', background: 'var(--color-bg-accent)', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--brand-cyan-muted)',
                  }}>
                    {benefitIcons[b.iconIdx]}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)', color: 'var(--color-text)', marginBottom: '4px' }}>{b.title}</h3>
                    <p style={{ fontSize: 'clamp(0.78rem, 1vw, 0.87rem)', color: 'var(--color-text-soft)', lineHeight: 1.7 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Pay shortcut */}
            <div style={{ marginTop: 'clamp(2rem, 3vw, 2.8rem)', paddingTop: 'clamp(1.2rem, 2vw, 1.6rem)', borderTop: '1px solid rgba(13,30,53,0.08)' }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-soft)', marginBottom: '0.8rem', lineHeight: 1.6 }}>
                Already have a booking reference? Pay securely online.
              </p>
              <a
                href='https://payments.djubo.com/accounts/Qw1m_MkbBjjUoksNjXFS1A/properties/7PdTVQfFEW85oyDFP02o5A/payment/custom-payment/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-outline-dark'
                style={{ fontSize: '0.62rem', padding: '0.65rem 1.4rem' }}
              >
                Quick Pay &rarr;
              </a>
            </div>
          </div>

          {/* Djubo Booking Engine column */}
          <div
            className='booking-widget-wrap'
            style={{
              background: '#fff',
              padding: 'clamp(1.5rem, 3.5vw, 3.5rem)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 12px 50px rgba(13,30,53,0.06)',
              border: '1px solid rgba(6,181,211,0.12)',
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 400,
              fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
              color: 'var(--color-text)',
              marginBottom: 'clamp(0.8rem, 1.5vw, 1.2rem)',
            }}>
              Check Availability &amp; Book
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-soft)', marginBottom: '1rem', lineHeight: 1.7 }}>
              Select your dates and room type below to see live availability and confirm your reservation instantly.
            </p>
            <DjuboWidget />
          </div>
        </div>
      </div>
    </section>
  );
}