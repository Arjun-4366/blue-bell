/**
 * Simple native fetch wrapper for Server Components.
 * Automatically throws on non-2xx responses.
 */
export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit & { next?: { revalidate?: number; tags?: string[] } }
): Promise<T> {
  const res = await fetch(endpoint, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!res.ok) {
    let errorMsg = `API Error: ${res.status} ${res.statusText}`;
    try {
      const errBody = await res.json();
      if (errBody.message) errorMsg += ` - ${errBody.message}`;
    } catch {
      // Ignore if body isn't JSON
    }
    throw new Error(errorMsg);
  }

  return res.json();
}
