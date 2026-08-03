import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0A162E 0%, #0F3D78 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 44, height: 2, background: '#06B5D3' }} />
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#06B5D3',
            }}
          >
            Periya · Wayanad, Kerala
          </div>
          <div style={{ width: 44, height: 2, background: '#06B5D3' }} />
        </div>

        <div
          style={{
            fontSize: 92,
            color: '#FFFFFF',
            fontWeight: 400,
            letterSpacing: -1,
          }}
        >
          Blue Bell
        </div>

        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.72)',
            marginTop: 22,
            letterSpacing: 0.5,
          }}
        >
          Treehouses &amp; Private-Pool Domes in the Hills of Wayanad
        </div>
      </div>
    ),
    { ...size }
  );
}
