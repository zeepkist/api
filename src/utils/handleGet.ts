import { api } from '../api.js'
import { stringifyObjectValues } from './index.js'

export interface ErrorMessage {
  property: string
  message: string
}

/**
 * @category Utilities
 */
export interface ErrorResponse {
  ok: boolean
  status: number
  statusText: string
  error: ErrorMessage[]
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

  if (ok) return json() as T

  const error: ErrorResponse = {
    ok,
    status,
    statusText,
    error: (await json()) as ErrorMessage[]
  }

  return error
}
