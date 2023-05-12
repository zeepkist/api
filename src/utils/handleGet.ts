import { api } from '../api.js'
import { stringifyObjectValues } from './index.js'

/**
 * Handle GET requests
 * @param url The URL to send the request to
 * @param parameters The parameters to send with the request
 * @returns The response from the request
 * @private
 * @category Utilities
 */
export const handleGet = async <Response>(
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters?: Record<string, any>
) => {
  const searchParameters = new URLSearchParams(
    stringifyObjectValues(parameters)
  )

  const { json } = api.get(url, {
    searchParams: searchParameters
  })

  return json() as Response
}
