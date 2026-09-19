'use client';

import { useEffect } from 'react';

/**
 * DjuboWidget
 * -----------
 * Embeds the Djubo booking-engine widget client-side (SSR-safe).
 *
 * Account GUID : Qw1m_MkbBjjUoksNjXFS1A
 * Property GUID: 7PdTVQfFEW85oyDFP02o5A
 */
export default function DjuboWidget() {
  useEffect(() => {
    const SCRIPT_SRC =
      'https://s3-ap-southeast-1.amazonaws.com/djubo-static/static/widget/js/widget.min.2.0.js';

    // Avoid double-injecting on re-mount
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Djubo widget mount point */}
      <div id="BEx4IDaY3bWD" style={{ position: 'relative', width: '100%' }}>
        <div id="BEx4IDaY3bWR" className="BEx4ZXaY3bWR" />
        <input type="hidden" value="Qw1m_MkbBjjUoksNjXFS1A" id="BEx4ZXaPkNmGuid" />
        <input type="hidden" value="7PdTVQfFEW85oyDFP02o5A" id="BEx4ZYaLkProGuid" />
      </div>

      {/* Djubo CSS overrides — aligned to Blue Bell design system */}
      <style>{`
        /* ── Widget outer container ────────────────────────────── */
        #BEx4IDaY3bWD .BEx4ZXaY3bWR {
          margin-top: 12px;
          width: 100% !important;
          position: relative !important;
          right: auto !important;
          top: auto !important;
          z-index: 10 !important;
          border-radius: var(--radius-lg) !important;
          border-color: rgba(6, 181, 211, 0.25) !important;
          box-shadow: 0 8px 32px rgba(13, 30, 53, 0.07) !important;
          overflow: hidden !important;
        }

        /* ── Input field height ────────────────────────────────── */
        .BEx4IDaY4cXE { height: 40px !important; }

        /* ── Date / pax pickers ────────────────────────────────── */
        #BEx4IDaY3bWR .BEx4ZXaY3bOP > div { margin-top: -24px !important; }

        /* ── Calendar dropdown positioning ─────────────────────── */
        #BEx4IDaY3bWD .BEx4ZXaY3bDPI {
          top: 31px !important;
          right: 31px !important;
        }

        /* ── Date inputs background ────────────────────────────── */
        #BEx4IDaY3bWD input[type="text"],
        #BEx4IDaY3bWD .BEx4ZXaY3bPC {
          background: #F7FAFC !important;
          color: #0D1E35 !important;
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          border-radius: 8px !important;
        }

        /* ── Select inputs ─────────────────────────────────────── */
        #BEx4IDaY3bWD select.BEx4ZXaY3bPC,
        #BEx4IDaY3bWD select.BEx4ZXaY3bPP {
          background: #F7FAFC !important;
          color: #0D1E35 !important;
          font-family: 'Plus Jakarta Sans', sans-serif !important;
        }

        /* ── Price comparison badge ─────────────────────────────── */
        .BEh8JJiwI1dPaBPrice {
          margin-top: 3px !important;
          width: 103px !important;
          padding: 0 0 19px 3px !important;
          text-transform: capitalize;
          background-color: #06B5D3 !important;
          border-radius: 4px !important;
        }

        /* ── Accent / brand text colours ───────────────────────── */
        .BEh4IDsZ4fZE,
        .BEh4IDsZ4dZENP {
          color: #0891B2 !important;
        }

        .widget .BEh4IDsZ4fZE,
        .widget .BEh4IDsZ4eZE,
        .widget .BEh4IDsZ4dZE,
        .widget .BEh4IDsZdPr0ZE span {
          color: #3D5474 !important;
        }

        .BEh4IDsZ4eZE { color: #0891B2 !important; }
        .BEh4IDsZ4dZE, .divWidth { color: #3D5474 !important; }

        /* ── BOOK NOW button — match .btn-primary ──────────────── */
        #BEx4IDaY3bWD input.BEx4ZXaY3bQBT {
          background: #06B5D3 !important;
          color: #ffffff !important;
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 0.68rem !important;
          font-weight: 600 !important;
          letter-spacing: 0.18em !important;
          text-transform: uppercase !important;
          border-radius: 3px !important;
          margin-bottom: 0 !important;
          margin-top: 14px !important;
          transition: background 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        /* ── Button hover — match .btn-primary:hover ───────────── */
        #BEx4IDaY3bWD .BEx4IDaY3bQBT:hover .BEx4ZXaY3bQBT,
        .BEx4ZXaY3bQBT:focus,
        #BEx4IDaY3bWD input.BEx4ZXaY3bQBT:hover {
          background: #0891B2 !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 32px rgba(6, 181, 211, 0.28) !important;
        }

        /* ── Link transitions ──────────────────────────────────── */
        #BEx4IDaY3bWD .BEx4ZXaY3bWR a {
          color: #0891B2 !important;
          transition: all 0.2s ease;
          -webkit-transition: all 0.2s ease;
        }

        /* ── Arrow / caret indicator ───────────────────────────── */
        .BExyz5i8narrowSingle-up {
          border-bottom: 5px solid #06B5D3 !important;
        }

        /* ── Modal fix ─────────────────────────────────────────── */
        .modalModifyCancel__inner { overflow: hidden !important; }

        /* ── Mobile ────────────────────────────────────────────── */
        @media only screen and (max-width: 812px) {
          #BEx4IDaY3bWD .BEx4ZXaY3bWR {
            right: auto !important;
            top: auto !important;
          }
        }
      `}</style>
    </>
  );
}
