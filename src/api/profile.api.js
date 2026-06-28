import api from './api'

// NOTE: api.js baseURL is already set to http://localhost:3000/api
// so all paths here are relative to that base (no /api prefix needed)

/**
 * Fetch the authenticated user's profile.
 * GET /api/my-profile
 */
export const getMyProfile = () => api.get('/my-profile')

/**
 * Update the authenticated user's profile fields.
 * PUT /api/update-profile
 * @param {{ name?: string, phone?: string, bio?: string }} payload
 */
export const updateMyProfile = (payload) => api.put('/update-profile', payload)

/**
 * Upload / replace the authenticated user's avatar.
 * POST /api/profile/avatar  (multipart/form-data)
 * @param {File} file - The image file to upload.
 */
export const uploadAvatar = (file) => {
  const form = new FormData()
  form.append('avatar', file)
  return api.post('/profile/avatar', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

/**
 * Change the authenticated user's password.
 * POST /api/auth/change-password
 * @param {{ currentPassword: string, newPassword: string }} payload
 */
export const changePassword = (payload) => api.post('/auth/change-password', payload)
