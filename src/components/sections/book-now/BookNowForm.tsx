'use client';

import { useState } from 'react';
import { Stay } from '@/types/stay';

const benefitIcons = [
  // Price tag
  <svg key="price" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>,
  // Info
  <svg key="info" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>,
  // Upgrade arrow
  <svg key="upgrade" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/><path d="M6 21V9"/><path d="M18 21V9"/></svg>,
  // Utensils
  <svg key="food" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>,
];

const benefits = [
  { title: 'No OTA Commissions',        desc: 'Book direct and skip the commission markups added by third-party travel sites — the same stay, at a fairer price.', iconIdx: 0 },
  { title: 'Know the Resort Inside Out', desc: 'Our team walks you through detailed information on the resort, rooms, and amenities before you confirm, so you know exactly what you’re booking.', iconIdx: 1 },
  { title: 'More Nights, Bigger Savings', desc: 'Stay two nights or more and you’ll automatically get our maximum available discount on direct bookings.', iconIdx: 2 },
  { title: 'Meals Made Your Way',        desc: 'Let us know your food preferences and dietary needs in advance, and our kitchen will prepare your meals accordingly.', iconIdx: 3 },
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

export default function BookNowForm({ stays = [] }: { stays: Stay[] }) {
  // Group stays by category
  const categories = Array.from(new Set(stays.map(s => s.categorySlug)));
  const villaGroups = categories.map(cat => ({
    category: cat,
    options: stays.filter(s => s.categorySlug === cat)
  })).filter(g => g.options.length > 0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    checkIn: '', checkOut: '', guests: '2',
    villaType: stays.length > 0 ? stays[0].slug : '', notes: '',
  });

  const update = (field: keyof typeof formData, val: string) => setFormData({ ...formData, [field]: val });

  return (
    <section className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div className="booking-layout" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>
          {/* Benefits column */}
          <div className="booking-benefits">
            <span className="section-label">Exclusive Benefits</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Why Book Direct With Us?</h2>
            <div className="divider" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.2rem, 2vw, 1.8rem)', marginTop: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              {benefits.map((b) => (
                <div key={b.title} className="benefit-item" style={{ display: 'flex', gap: 'clamp(0.8rem, 1.5vw, 1.2rem)', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 'clamp(38px, 5vw, 44px)', height: 'clamp(38px, 5vw, 44px)', borderRadius: '10px',
                    background: 'var(--color-bg-accent)', flexShrink: 0,
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
          </div>

          {/* Form column */}
          <div className="booking-form" style={{
            background: '#fff', padding: 'clamp(1.5rem, 3.5vw, 3.5rem)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 12px 50px rgba(13,30,53,0.06)',
            border: '1px solid rgba(6,181,211,0.12)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', color: 'var(--color-text)', marginBottom: 'clamp(1.2rem, 2vw, 1.8rem)' }}>
              Reservation Request
            </h3>

            {submitted ? (
              <div style={{
                background: 'var(--color-bg-accent)',
                border: '1.5px solid var(--brand-cyan)',
                padding: 'clamp(1.5rem, 2.5vw, 2.5rem)', borderRadius: 'var(--radius)', textAlign: 'center',
              }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--brand-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(1.2rem, 1.8vw, 1.4rem)', color: 'var(--color-text)', marginBottom: '0.6rem' }}>Request Submitted!</h4>
                <p style={{ fontSize: 'clamp(0.82rem, 1vw, 0.9rem)', color: 'var(--color-text-soft)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Your booking request has been forwarded to our Periya reservations desk.
                </p>
                <div style={{ background: 'var(--color-bg-warm)', padding: 'clamp(1rem, 1.5vw, 1.2rem) clamp(1rem, 1.8vw, 1.4rem)', borderRadius: 'var(--radius)', textAlign: 'left', fontSize: 'clamp(0.78rem, 1vw, 0.85rem)', fontFamily: 'var(--font-sans)', color: 'var(--color-text-mid)', lineHeight: 1.8 }}>
                  <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.4rem' }}>Booking Summary</strong>
                  Name: {formData.name}<br />
                  Check-In: {formData.checkIn}<br />
                  Check-Out: {formData.checkOut}<br />
                  Guests: {formData.guests}<br />
                  Stay: {stays.find(v => v.slug === formData.villaType)?.name || formData.villaType}
                </div>
                <p style={{ fontSize: 'clamp(0.7rem, 0.9vw, 0.78rem)', color: 'var(--color-text-soft)', marginTop: '1.2rem' }}>
                  We will call or email within 2 hours to confirm your dates.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.8rem, 1.2vw, 1.1rem)' }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Full Name</label>
                  <input type="text" id="name" required value={formData.name} onChange={(e) => update('name', e.target.value)} style={inputStyle} className="bb-input" />
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(0.7rem, 1.2vw, 1rem)' }}>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input type="email" id="email" required value={formData.email} onChange={(e) => update('email', e.target.value)} style={inputStyle} className="bb-input" />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input type="tel" id="phone" required value={formData.phone} onChange={(e) => update('phone', e.target.value)} style={inputStyle} className="bb-input" />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(0.7rem, 1.2vw, 1rem)' }}>
                  <div>
                    <label htmlFor="check-in" style={labelStyle}>Check-In</label>
                    <input type="date" id="check-in" required value={formData.checkIn} onChange={(e) => update('checkIn', e.target.value)} style={inputStyle} className="bb-input" />
                  </div>
                  <div>
                    <label htmlFor="check-out" style={labelStyle}>Check-Out</label>
                    <input type="date" id="check-out" required value={formData.checkOut} onChange={(e) => update('checkOut', e.target.value)} style={inputStyle} className="bb-input" />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(0.7rem, 1.2vw, 1rem)' }}>
                  <div>
                    <label htmlFor="villa-type" style={labelStyle}>Stay Type</label>
                    <select id="villa-type" value={formData.villaType} onChange={(e) => update('villaType', e.target.value)} style={inputStyle} className="bb-input">
                      {villaGroups.map(({ category, options }) => (
                        <optgroup key={category} label={category}>
                          {options.map(v => <option key={v.slug} value={v.slug}>{v.name}</option>)}
                        </optgroup>
                      ))}
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
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: 'clamp(0.7rem, 1.2vw, 0.85rem)' }}>
                  Request Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .bb-input:focus { border-color: var(--brand-cyan) !important; box-shadow: 0 0 0 3px rgba(6,181,211,0.08); }
        
        @media (max-width: 768px) {
          .booking-layout {
            gap: 2.5rem !important;
          }
          
          .booking-form {
            padding: 2rem 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .booking-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .booking-benefits {
            text-align: center;
          }
          
          .booking-benefits .divider {
            margin-left: auto;
            margin-right: auto;
          }
          
          .benefit-item {
            text-align: left;
          }
          
          .form-row {
            grid-template-columns: 1fr !important;
          }
          
          .booking-form {
            padding: 1.5rem 1.2rem !important;
          }
          
          input, select, textarea {
            font-size: 0.88rem !important;
            padding: 0.75rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}