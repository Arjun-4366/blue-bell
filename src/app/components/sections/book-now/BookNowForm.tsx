'use client';

import { useState } from 'react';

const villasList = [
  { id: 'treehouse',       name: 'Canopy Treehouse Suite — ₹24,000/night' },
  { id: 'dome',           name: 'Earthen Dome Sanctuary — ₹19,500/night' },
  { id: 'nest',           name: 'Treehouse Nesting Room — ₹16,500/night' },
  { id: 'pool-dome',      name: 'Earthen Pool Dome — ₹28,000/night' },
  { id: 'bamboo',         name: 'Whispering Bamboo Treehouse — ₹26,500/night' },
  { id: 'canopy-suite',   name: 'Treehouse Canopy Suite — ₹18,000/night' },
];

const benefitIcons = [
  // Price tag
  <svg key="price" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>,
  // Spa leaf
  <svg key="spa" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  // Upgrade arrow
  <svg key="upgrade" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/><path d="M6 21V9"/><path d="M18 21V9"/></svg>,
  // Calendar
  <svg key="cal" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/></svg>,
];

const benefits = [
  { title: 'Best Rate Guaranteed',        desc: 'No booking agent commissions. Direct reservations always receive our lowest guaranteed rates.', iconIdx: 0 },
  { title: 'Complimentary Welcome Massage', desc: 'Relax on arrival with a complimentary 15-minute Ayurvedic foot therapy.', iconIdx: 1 },
  { title: 'Priority Villa Upgrades',     desc: 'Enjoy complimentary villa upgrades based on availability at check-in.', iconIdx: 2 },
  { title: 'Flexible Cancellations',      desc: 'Change or cancel bookings up to 14 days before arrival at no charge.', iconIdx: 3 },
];

const inputStyle: React.CSSProperties = {
  padding: '0.85rem 1.2rem',
  border: '1.5px solid rgba(13,30,53,0.1)',
  background: 'var(--color-bg-warm)',
  borderRadius: 'var(--radius)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.92rem', width: '100%', outline: 'none',
  color: 'var(--color-text)', transition: 'border-color 0.25s ease',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700,
  letterSpacing: '0.16em', textTransform: 'uppercase',
  color: 'var(--color-text-soft)', marginBottom: '6px', display: 'block',
};

export default function BookNowForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    checkIn: '', checkOut: '', guests: '2',
    villaType: 'treehouse', notes: '',
  });

  const update = (field: keyof typeof formData, val: string) => setFormData({ ...formData, [field]: val });

  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>
          {/* Benefits column */}
          <div>
            <span className="section-label">Exclusive Benefits</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>Why Book Direct With Us?</h2>
            <div className="divider" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', marginTop: '2rem' }}>
              {benefits.map((b) => (
                <div key={b.title} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'var(--color-bg-accent)', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--brand-cyan-muted)',
                  }}>
                    {benefitIcons[b.iconIdx]}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: '4px' }}>{b.title}</h3>
                    <p style={{ fontSize: '0.87rem', color: 'var(--color-text-soft)', lineHeight: 1.7 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div style={{
            background: '#fff', padding: 'clamp(2rem, 3.5vw, 3.5rem)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 12px 50px rgba(13,30,53,0.06)',
            border: '1px solid rgba(6,181,211,0.12)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1.8rem' }}>
              Reservation Request
            </h3>

            {submitted ? (
              <div style={{
                background: 'var(--color-bg-accent)',
                border: '1.5px solid var(--brand-cyan)',
                padding: '2.5rem', borderRadius: 'var(--radius)', textAlign: 'center',
              }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--brand-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '0.6rem' }}>Request Submitted!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-soft)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Your booking request has been forwarded to our Vythiri reservations desk.
                </p>
                <div style={{ background: 'var(--color-bg-warm)', padding: '1.2rem 1.4rem', borderRadius: 'var(--radius)', textAlign: 'left', fontSize: '0.85rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text-mid)', lineHeight: 1.8 }}>
                  <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.4rem' }}>Booking Summary</strong>
                  Name: {formData.name}<br />
                  Check-In: {formData.checkIn}<br />
                  Check-Out: {formData.checkOut}<br />
                  Guests: {formData.guests}<br />
                  Villa: {villasList.find(v => v.id === formData.villaType)?.name.split(' —')[0]}
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-soft)', marginTop: '1.2rem' }}>
                  We will call or email within 2 hours to confirm your dates.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Full Name</label>
                  <input type="text" id="name" required value={formData.name} onChange={(e) => update('name', e.target.value)} style={inputStyle} className="bb-input" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input type="email" id="email" required value={formData.email} onChange={(e) => update('email', e.target.value)} style={inputStyle} className="bb-input" />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input type="tel" id="phone" required value={formData.phone} onChange={(e) => update('phone', e.target.value)} style={inputStyle} className="bb-input" />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="check-in" style={labelStyle}>Check-In</label>
                    <input type="date" id="check-in" required value={formData.checkIn} onChange={(e) => update('checkIn', e.target.value)} style={inputStyle} className="bb-input" />
                  </div>
                  <div>
                    <label htmlFor="check-out" style={labelStyle}>Check-Out</label>
                    <input type="date" id="check-out" required value={formData.checkOut} onChange={(e) => update('checkOut', e.target.value)} style={inputStyle} className="bb-input" />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="villa-type" style={labelStyle}>Villa / Suite</label>
                    <select id="villa-type" value={formData.villaType} onChange={(e) => update('villaType', e.target.value)} style={inputStyle} className="bb-input">
                      {villasList.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" style={labelStyle}>Guests</label>
                    <select id="guests" value={formData.guests} onChange={(e) => update('guests', e.target.value)} style={inputStyle} className="bb-input">
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="notes" style={labelStyle}>Special Requests</label>
                  <textarea id="notes" rows={3} placeholder="Airport transfers, dietary requirements, Ayurvedic packages…" value={formData.notes} onChange={(e) => update('notes', e.target.value)} style={{ ...inputStyle, resize: 'vertical' }} className="bb-input" />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  Request Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`.bb-input:focus { border-color: var(--brand-cyan) !important; box-shadow: 0 0 0 3px rgba(6,181,211,0.08); }`}</style>
    </section>
  );
}
