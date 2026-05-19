'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
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
          {/* Details */}
          <div>
            <span className="section-label">Reach Us</span>
            <h2 className="section-title" style={{ marginBottom: '2rem', fontWeight: 800 }}>Resort Contact Details</h2>
            <div className="divider" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
              {[
                { title: 'Location', text: 'Vythiri, Wayanad, Kerala 673576, India', icon: '📍' },
                { title: 'General Inquiries & Bookings', text: '+91 94960 00000', label2: 'stay@bluebellresort.in', icon: '📞' },
                { title: 'Event Planning & Weddings', text: '+91 94960 11111', label2: 'events@bluebellresort.in', icon: '✨' },
                { title: 'Ayurveda Spa & Wellness', text: '+91 94960 22222', label2: 'spa@bluebellresort.in', icon: '🌿' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '1.2rem' }}>
                  <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-forest)', marginBottom: '4px' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text)', lineHeight: 1.6 }}>{item.text}</p>
                    {item.label2 && <p style={{ fontSize: '0.92rem', color: 'var(--color-sage)', fontWeight: 700, marginTop: '2px' }}>{item.label2}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Embed Map */}
            <div style={{ marginTop: '3rem', borderRadius: 'var(--border-radius)', overflow: 'hidden', height: '260px', background: 'var(--color-cream-dark)', border: '1px solid rgba(241, 245, 249, 1)' }}>
              <iframe
                title="Blue Bell Resort Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5458319692473!2d76.04018267578712!3d11.548545888651036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60be1c4a03bc5%3A0x6b4efb0be141c2c3!2sVythiri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1716140000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
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
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-forest)', marginBottom: '1.5rem' }}>Send Us a Message</h3>

            {submitted ? (
              <div style={{
                background: 'rgba(16,185,129,0.04)',
                border: '2px solid var(--color-sage)',
                padding: '2.5rem',
                borderRadius: 'var(--border-radius)',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>✉️</span>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '0.5rem' }}>Thank You!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                  Your message was sent successfully. Our Vythiri guest relations desk will reach out to you within the next 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="name" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="email" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Email Address</label>
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
                  <label htmlFor="phone" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="subject" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Subject</label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ padding: '0.85rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '30px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', outline: 'none' }}
                  >
                    <option>General Enquiry</option>
                    <option>Room Booking Request</option>
                    <option>Wedding & Event Hosting</option>
                    <option>Ayurveda Treatment Package</option>
                    <option>Feedback & Comments</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="message" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-light)' }}>Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ padding: '0.9rem 1.2rem', border: '1px solid rgba(241, 245, 249, 1)', background: 'var(--color-cream-dark)', borderRadius: '15px', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', width: '100%', resize: 'vertical', outline: 'none' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
