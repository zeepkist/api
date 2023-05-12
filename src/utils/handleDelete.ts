import { api } from '../api.js'

/**
 * Handle DELETE requests
 * @param url The URL to send the request to
 * @param body The body to send with the request
 * @param token Your GTR API token
 * @returns The response from the request
 * @private
 * @category Utilities
 */
export const handleDelete = async (url: string, token: string) => {
  await api.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
