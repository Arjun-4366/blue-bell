'use client';

import { useState } from 'react';

// SVG icons for contact items
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.02-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.92 17Z"/>
  </svg>
);
const EventIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>
  </svg>
);
const SpaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12M12 12C12 12 9 9 6 6.5 3 4 3 4c3 0 6.5 1.5 9 5.5C14.5 5.5 18 4 21 4c0 0 0 0-3 2.5C15 9 12 12 12 12Z"/>
  </svg>
);

const inputFocus = `
  .bb-input:focus { border-color: var(--brand-cyan) !important; box-shadow: 0 0 0 3px rgba(6,181,211,0.08); }
`;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  };

  const inputStyle: React.CSSProperties = {
    padding: '0.85rem 1.2rem',
    border: '1.5px solid rgba(13,30,53,0.1)',
    background: 'var(--color-bg-warm)',
    borderRadius: 'var(--radius)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.92rem',
    width: '100%',
    outline: 'none',
    color: 'var(--color-text)',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.65rem',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--color-text-soft)',
    marginBottom: '6px',
    display: 'block',
  };

  interface ContactItem {
    title: string;
    text: string;
    email: string | null;
    Icon: React.ComponentType;
    link?: string;
    linkText?: string;
  }

  const contactItems: ContactItem[] = [
    { 
      title: 'Location', 
      text: 'Periya, Wayanad, Kerala 670644, India', 
      email: null, 
      Icon: LocationIcon,
      link: 'https://www.google.com/maps/place/Blue+Bell+Resort+Wayanad+-+Periya/@11.8167165,75.8512375,17z/data=!3m1!4b1!4m9!3m8!1s0x3ba5d157f9094acf:0x94b5ad585705afe7!5m2!4m1!1i2!8m2!3d11.8167113!4d75.8538124!16s%2Fg%2F11c1wwf0n3?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D',
      linkText: 'View on Google Maps'
    },
    { title: 'General Enquiries & Bookings', text: '+91 94960 00000',                       email: 'stay@bluebellresort.in',          Icon: PhoneIcon },
    { title: 'Events & Wedding Planning',    text: '+91 94960 11111',                       email: 'events@bluebellresort.in',        Icon: EventIcon },
    { title: 'Ayurveda & Wellness',          text: '+91 94960 22222',                       email: 'spa@bluebellresort.in',           Icon: SpaIcon },
  ];

  return (
    <section className="section" style={{ background: '#fff' }}>
      <style>{inputFocus}</style>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>
          {/* Contact details */}
          <div>
            <span className="section-label">Reach Us</span>
            <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>Resort Contact Details</h2>
            <div className="divider" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', marginTop: '2rem' }}>
              {contactItems.map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'var(--color-bg-accent)', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--brand-cyan-muted)',
                  }}>
                    <item.Icon />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: '4px' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-mid)', lineHeight: 1.6 }}>{item.text}</p>
                    {item.email && <p style={{ fontSize: '0.88rem', color: 'var(--brand-cyan-muted)', marginTop: '2px', fontWeight: 500 }}>{item.email}</p>}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--brand-cyan-muted)',
                          marginTop: '6px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontWeight: 500,
                          textDecoration: 'underline',
                          textUnderlineOffset: '3px'
                        }}
                        className="hover:text-brand-blue"
                      >
                        {item.linkText}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{ marginTop: '2.5rem', borderRadius: 'var(--radius)', overflow: 'hidden', height: '240px', border: '1px solid rgba(6,181,211,0.12)' }}>
              <iframe
                title="Blue Bell Resort Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.593740212001!2d75.8512375!3d11.8167165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5d157f9094acf%3A0x94b5ad585705afe7!2sBlue%20Bell%20Resort%20Wayanad%20-%20Periya!5e0!3m2!1sen!2sin!4v1716140000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen={false} loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: '#fff',
            padding: 'clamp(2rem, 3.5vw, 3.5rem)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 12px 50px rgba(13,30,53,0.06)',
            border: '1px solid rgba(6,181,211,0.1)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '1.8rem' }}>
              Send Us a Message
            </h3>

            {submitted ? (
              <div style={{
                background: 'var(--color-bg-accent)',
                border: '1.5px solid var(--brand-cyan)',
                padding: '2.5rem', borderRadius: 'var(--radius)', textAlign: 'center',
              }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--brand-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: '1.3rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Message Sent!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-soft)', lineHeight: 1.7 }}>
                  Our guest relations desk will reach out to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { id: 'name',  label: 'Full Name',    type: 'text',  key: 'name' as const },
                  { id: 'email', label: 'Email Address', type: 'email', key: 'email' as const },
                  { id: 'phone', label: 'Phone Number',  type: 'tel',   key: 'phone' as const },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} style={labelStyle}>{field.label}</label>
                    <input type={field.type} id={field.id} required value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      style={inputStyle} className="bb-input" />
                  </div>
                ))}
                <div>
                  <label htmlFor="subject" style={labelStyle}>Subject</label>
                  <select id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} style={inputStyle} className="bb-input">
                    <option>General Enquiry</option>
                    <option>Room Booking Request</option>
                    <option>Wedding &amp; Event Hosting</option>
                    <option>Ayurveda Treatment Package</option>
                    <option>Feedback &amp; Comments</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea id="message" required rows={4} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, borderRadius: 'var(--radius)', resize: 'vertical' }}
                    className="bb-input" />
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
