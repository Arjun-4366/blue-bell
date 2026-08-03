import { getGooglePlaceReviews } from '@/lib/google-reviews';

function GoogleLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.6C29.6 35.6 26.9 36.5 24 36.5c-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.6 39.6 16.3 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l6.6 5.6C41.5 36.3 44 30.7 44 24c0-1.3-.1-2.7-.4-3.5z" />
    </svg>
  );
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#FBBC04' : 'rgba(13,30,53,0.15)'}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const AVATAR_COLORS = ['#06B5D3', '#1A5FAD', '#0EA875', '#E67E22', '#C0392B', '#8E44AD'];

function colorForName(name: string) {
  const idx = name.charCodeAt(0) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

export default async function GoogleReviewsWidget() {
  const data = await getGooglePlaceReviews();

  if (!data || data.reviews.length === 0) return null;

  return (
    <section className="section-tint">
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <span className="section-label">Straight From Google</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Live Guest Reviews</h2>
          <div className="divider center" />
        </div>

        <div style={{
          maxWidth: '900px', margin: '0 auto',
          background: '#fff', borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(13,30,53,0.08)',
          boxShadow: '0 12px 50px rgba(13,30,53,0.06)',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <a
            href={data.mapsUrl || undefined}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              borderBottom: '1px solid rgba(13,30,53,0.08)',
              textDecoration: 'none',
            }}
          >
            <GoogleLogo />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', color: 'var(--color-text)' }}>
                {data.rating.toFixed(1)}
              </span>
              <div style={{ display: 'flex', gap: '2px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < Math.round(data.rating)} />
                ))}
              </div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-soft)' }}>
                {data.totalReviews} Google reviews
              </span>
            </div>
          </a>

          {/* Review list */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            maxHeight: '520px', overflowY: 'auto',
          }}>
            {data.reviews.map((r, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0.9rem',
                padding: 'clamp(1rem, 2vw, 1.4rem) clamp(1.2rem, 2.5vw, 1.8rem)',
                borderBottom: i === data.reviews.length - 1 ? 'none' : '1px solid rgba(13,30,53,0.06)',
              }}>
                {r.authorPhotoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={r.authorPhotoUrl}
                    alt={r.authorName}
                    referrerPolicy="no-referrer"
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                ) : (
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
                    background: colorForName(r.authorName),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9rem',
                  }}>
                    {r.authorName.charAt(0).toUpperCase()}
                  </div>
                )}

                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text)' }}>
                      {r.authorName}
                    </span>
                    <GoogleLogo size={14} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '3px 0 6px' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {Array.from({ length: 5 }).map((_, s) => <StarIcon key={s} filled={s < r.rating} />)}
                    </div>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'var(--color-text-soft)' }}>{r.relativeTime}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-text-mid)', lineHeight: 1.7 }}>
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
