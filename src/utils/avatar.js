/**
 * Generates a personalized initials-based avatar URL using ui-avatars.com.
 * Used when the user has not uploaded a profile picture.
 *
 * @param {string} name - The user's display name (used for initials).
 * @returns {string} A URL that renders a colored avatar with the user's initials.
 */
export function getFallbackAvatar(name = 'User') {
  const encodedName = encodeURIComponent(name)
  return `https://ui-avatars.com/api/?background=6366f1&color=fff&size=128&bold=true&name=${encodedName}`
}

/**
 * Resolves an avatar path to a full, usable URL.
 *
 * Rules:
 *  - null / empty  → personalized fallback avatar (initials)
 *  - absolute URL  → returned as-is
 *  - relative path → prepended with the API server base URL
 *
 * @param {string|null} path   - The avatar value stored in the user object.
 * @param {string}      name   - The user's name (for fallback initials).
 * @returns {string} A valid image URL ready to use in <img :src="...">
 */
export function resolveAvatarUrl(path, name = 'User') {
  if (!path) return getFallbackAvatar(name)
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const base = import.meta.env.VITE_API_BASE_URL?.replace('/api', '') ?? ''
  return `${base}${path}`
}
