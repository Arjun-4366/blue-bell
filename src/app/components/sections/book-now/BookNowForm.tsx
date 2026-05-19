'use client';

import { useState } from 'react';

const villasList = [
  { id: 'pool-villa', name: 'Forest Pool Villa (₹18,500/night)' },
  { id: 'treehouse', name: 'Canopy Treehouse Suite (₹24,000/night)' },
  { id: 'cottage', name: 'Heritage Cottage (₹12,500/night)' },
  { id: 'family-bungalow', name: 'Family Bungalow (₹32,000/night)' },
  { id: 'bamboo-suite', name: 'Bamboo Garden Suite (₹15,800/night)' },
  { id: 'spice-cottage', name: 'Spice Garden Cottage (₹9,800/night)' },
];

export default function BookNowForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    villaType: 'pool-villa',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>
          {/* Why Book Direct */}
          <div>
            <span className="section-label">Exclusive Benefits</span>
            <h2 className="section-title" style={{ marginBottom: '2rem', fontWeight: 800 }}>Why Book Direct With Us?</h2>
            <div className="divider" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2.5rem' }}>
              {[
                { title: 'Best Rate Guaranteed', desc: 'No booking agent commissions. Direct reservations will always receive our lowest rates.', icon: '🏷️' },
                { title: 'Complimentary Welcome Massage', desc: 'Relax immediately with a complimentary 15-minute Ayurvedic foot therapy on arrival.', icon: '💆' },
                { title: 'Priority Villa Upgrades', desc: 'Enjoy complimentary villa category upgrades based on availability during check-in.', icon: '✨' },
                { title: 'Flexible Cancellations', desc: 'Change or cancel bookings up to 14 days before arrival at no extra charge.', icon: '📅' },
              ].map((b) => (
                <div key={b.title} style={{ display: 'flex', gap: '1.25rem' }}>
                  <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{b.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-forest)', marginBottom: '4px' }}>{b.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: '#ffffff',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: '0 15px 50px rgba(15, 23, 42, 0.04)',
            border: '1px solid rgba(241, 245, 249, 1)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.4rem', color: 'var(--color-forest)', marginBottom: '1.5rem' }}>Reservation Request</h3>

            {submitted ? (
              <div style={{
                background: 'rgba(16,185,129,0.04)',
                border: '2px solid var(--color-sage)',
                padding: '2.5rem',
                borderRadius: 'var(--border-radius)',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>🎉</span>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>Request Submitted!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Your booking request has been forwarded to our Vythiri reservations desk.
                </p>
                <div style={{
                  background: 'var(--color-cream-dark)',
                  padding: '1rem',
                  borderRadius: 'var(--border-radius)',
                  textAlign: 'left',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text)',
                  lineHeight: 1.5,
                }}>
                  <strong>Details Summary:</strong><br />
                  👤 Name: {formData.name}<br />
                  📅 Check-In: {formData.checkIn}<br />
                  📅 Check-Out: {formData.checkOut}<br />
                  👥 Guests: {formData.guests}<br />
                  🏡 Villa: {villasList.find(v => v.id === formData.villaType)?.name.split(' (')[0]}
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginTop: '1.5rem' }}>
                  We will call or email you within 2 hours to confirm your dates and process payment deposits.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="name" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="email" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="phone" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="check-in" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Check-In Date</label>
                    <input
                      type="date"
                      id="check-in"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="check-out" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Check-Out Date</label>
                    <input
                      type="date"
                      id="check-out"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="villa-type" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Select Villa / Cottage</label>
                    <select
                      id="villa-type"
                      value={formData.villaType}
                      onChange={(e) => setFormData({ ...formData, villaType: e.target.value })}
                      style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                    >
                      {villasList.map(v => (
                        <option key={v.id} value={v.id}>{v.name}</option>
                      ))}
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="guests" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Number of Guests</label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                        <option key={n} value={n.toString()}>{n} Guest{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="notes" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 850, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Special Requests / Diet / Spa Booking</label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="E.g., requesting airport transfers, gluten-free dining options, specific Ayurvedic packages..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ padding: '0.9rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '15px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', resize: 'vertical', outline: 'none' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  Request Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
