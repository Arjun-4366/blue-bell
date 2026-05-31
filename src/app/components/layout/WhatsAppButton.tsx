'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: visible ? 'all' : 'none',
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div
        style={{
          background: 'rgba(13, 30, 53, 0.95)',
          color: '#ffffff',
          padding: '0.6rem 1.1rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 500,
          letterSpacing: '0.05em',
          fontFamily: 'var(--font-sans)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          opacity: showTooltip ? 1 : 0,
          transform: showTooltip ? 'translateX(0)' : 'translateX(10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        Chat with our Concierge
      </div>

      {/* Button */}
      <a
        href="https://wa.me/919496000000"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366', // WhatsApp Green
          color: '#FFFFFF',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
          cursor: 'pointer',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, box-shadow 0.3s ease',
        }}
        className="hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 2.13.67 4.11 1.81 5.75L2 22l4.41-1.39A9.914 9.914 0 0 0 12.004 22c5.49 0 9.986-4.5 9.986-10S17.494 2 12.004 2zm0 18.3c-1.89 0-3.69-.53-5.26-1.46l-.38-.22-2.61.82.84-2.54-.25-.4a8.27 8.27 0 0 1-1.28-4.48c0-4.58 3.73-8.3 8.32-8.3 4.58 0 8.31 3.72 8.31 8.3s-3.73 8.3-8.31 8.3zm4.56-6.22c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8 1-.15.17-.3.2-.55.08-.25-.13-1.05-.39-2.01-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.36-.77-1.85-.2-.49-.4-.42-.56-.43-.15 0-.32-.02-.49-.02-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.74 4.33 3.84.6.26 1.08.42 1.45.54.61.19 1.16.17 1.59.1.49-.07 1.48-.61 1.69-1.19.2-.58.2-1.07.14-1.19-.06-.12-.22-.2-.47-.32z" />
        </svg>
      </a>
    </div>
  );
}
