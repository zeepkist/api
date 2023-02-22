import { api } from '../api.js'
import { stringifyObjectValues } from './index.js'

export interface HandleGetResponse<T> {
  ok: boolean
  status: number
  statusText: string
  data: T
}

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
