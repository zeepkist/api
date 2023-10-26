import { API, gtr, zworpshop } from '../api.js'
import { stringifyObjectValues } from './index.js'

/**
 * Handle GET requests
 * @param url The URL to send the request to
 * @param parameters The parameters to send with the request
 * @param apiType The API to send the request to
 * @returns The response from the request
 * @private
 * @category Utilities
 */
export const handleGet = async <Response>(
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters?: Record<string, any>,
  apiType: API = API.GTR
) => {
  const client = apiType === API.GTR ? gtr : zworpshop

  const searchParameters = new URLSearchParams(
    stringifyObjectValues(parameters)
  )

  const { json } = client.get(url, {
    searchParams: searchParameters
  })

  return json() as Response
}
