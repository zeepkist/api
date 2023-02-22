import { api } from '../api.js'
import { stringifyObjectValues } from './index.js'
/**
 * @category Utilities
 */
export interface HandleGetResponse<T> {
  ok: boolean
  status: number
  statusText: string
  data: T
}

/**
 * Handle GET requests
 * @param url The URL to send the request to
 * @param parameters The parameters to send with the request
 * @returns The response from the request
 * @private
 * @category Utilities
 */
export const handleGet = async <T>(
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters?: Record<string, any>
) => {
  const searchParameters = new URLSearchParams(
    stringifyObjectValues(parameters)
  )

  const { status, ok, statusText, json } = await api.get(url, {
    searchParams: searchParameters
  })

  const response: HandleGetResponse<T> = {
    ok,
    status,
    statusText,
    data: (await json()) as T
  }

  return response
}
