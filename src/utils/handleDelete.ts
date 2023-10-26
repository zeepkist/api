import { API, gtr, zworpshop } from '../api.js'

/**
 * Handle DELETE requests
 * @param url The URL to send the request to
 * @param body The body to send with the request
 * @param token Your GTR API token
 * @param apiType The API to send the request to
 * @returns The response from the request
 * @private
 * @category Utilities
 */
export const handleDelete = async (
  url: string,
  token: string,
  apiType: API = API.GTR
) => {
  const client = apiType === API.GTR ? gtr : zworpshop

  await client.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
