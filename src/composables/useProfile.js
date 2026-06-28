import { useAuthStore } from '@/stores/authStore'

/**
 * Composable that exposes the authenticated user's profile and a manual
 * refresh helper. The actual fetch logic lives in the Pinia store so the
 * profile is globally reactive and shared across every component.
 *
 * @example
 * const { user, refreshProfile } = useProfile()
 */
export function useProfile() {
  const authStore = useAuthStore()

  return {
    /** Reactive reference to the current user object (or null if logged out). */
    user: authStore.user,

    /** Re-fetch the profile from the server (e.g. after updating it). */
    refreshProfile: () => authStore.fetchProfile(),
  }
}
