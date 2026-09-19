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

      {/* Djubo CSS overrides — Blue Bell brand colours */}
      <style>{`
        /* Widget container — override absolute positioning for in-page use */
        #BEx4IDaY3bWD .BEx4ZXaY3bWR {
          margin-top: 10px;
          width: 100% !important;
          position: relative !important;
          right: auto !important;
          top: auto !important;
          z-index: 10 !important;
          border-color: #6f3932 !important;
        }

        .BEx4IDaY4cXE { height: 38px !important; }

        #BEx4IDaY3bWR .BEx4ZXaY3bOP > div { margin-top: -24px !important; }

        #BEx4IDaY3bWD .BEx4ZXaY3bDPI {
          top: 31px !important;
          right: 31px !important;
        }

        .BEh8JJiwI1dPaBPrice {
          margin-top: 3px !important;
          width: 103px !important;
          padding: 0px 0px 19px 3px !important;
          text-transform: capitalize;
          background-color: #6f3932 !important;
        }

        .BEh4IDsZ4fZE,
        .BEh4IDsZ4dZENP,
        .widget .BEh4IDsZ4fZE,
        .widget .BEh4IDsZ4eZE,
        .widget .BEh4IDsZ4dZE,
        .widget .BEh4IDsZdPr0ZE span {
          color: #6f3932 !important;
        }

        .BEh4IDsZ4eZE { color: #005C93 !important; }
        .BEh4IDsZ4dZE, .divWidth { color: #333 !important; }

        #BEx4IDaY3bWD select.BEx4ZXaY3bPC,
        #BEx4IDaY3bWD select.BEx4ZXaY3bPP {
          background: #fff !important;
          color: #000 !important;
        }

        #BEx4IDaY3bWD input.BEx4ZXaY3bQBT {
          background: #6f3932 !important;
          margin-bottom: 0 !important;
          margin-top: 14px !important;
          transition: all 0.2s ease !important;
        }

        #BEx4IDaY3bWD .BEx4IDaY3bQBT:hover .BEx4ZXaY3bQBT,
        .BEx4ZXaY3bQBT:focus {
          background: #ffffff !important;
          color: #ed8323 !important;
          transition: all 0.2s ease !important;
        }

        #BEx4IDaY3bWD .BEx4ZXaY3bWR a {
          transition: all 0.2s ease;
          -webkit-transition: all 0.2s ease;
        }

        .BExyz5i8narrowSingle-up { border-bottom: 5px solid #6f3932 !important; }

        .modalModifyCancel__inner { overflow: hidden !important; }

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
