export interface GoogleReview {
  authorName: string;
  authorPhotoUrl: string | null;
  rating: number;
  relativeTime: string;
  text: string;
  time: number;
}

export interface GooglePlaceReviews {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
  mapsUrl: string;
}

// Cache the upstream call for a day — Google's API terms ask that you not
// serve review data indefinitely stale, but there's no need to hit the API
// on every request either.
const REVALIDATE_SECONDS = 60 * 60 * 24;

export async function getGooglePlaceReviews(): Promise<GooglePlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', placeId);
  url.searchParams.set('fields', 'rating,user_ratings_total,reviews,url');
  url.searchParams.set('reviews_sort', 'newest');
  url.searchParams.set('key', apiKey);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== 'OK' || !data.result) return null;

    const result = data.result;

    return {
      rating: result.rating ?? 0,
      totalReviews: result.user_ratings_total ?? 0,
      mapsUrl: result.url ?? '',
      reviews: (result.reviews ?? []).map((r: {
        author_name: string;
        profile_photo_url?: string;
        rating: number;
        relative_time_description: string;
        text: string;
        time: number;
      }) => ({
        authorName: r.author_name,
        authorPhotoUrl: r.profile_photo_url ?? null,
        rating: r.rating,
        relativeTime: r.relative_time_description,
        text: r.text,
        time: r.time,
      })),
    };
  } catch {
    return null;
  }
}
