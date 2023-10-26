import { API, gtr, zworpshop } from '../api.js'

/**
 * Handle POST requests
 * @param url The URL to send the request to
 * @param body The body to send with the request
 * @param token Your GTR API token
 * @param apiType The API to send the request to
 * @returns The response from the request
 * @private
 * @category Utilities
 */
export const handlePost = async <Response, Body>(
  url: string,
  body: Body,
  token: string,
  apiType: API = API.GTR
) => {
  const client = apiType === API.GTR ? gtr : zworpshop

  const { json } = await client.post(url, {
    json: body,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return json() as Response
}
