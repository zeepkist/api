import { api } from '../api.js'
import { VoteAverageParameters, VoteParameters } from '../params/vote.js'
import {
  VoteAverageResponse,
  VoteCategoryResponse,
  VoteResponse
} from '../schemas/vote.js'
import { stringifyObjectValues } from '../utils/index.js'

export const votes = async (
  parameters: VoteParameters
): Promise<VoteResponse> => {
  const searchParameters = new URLSearchParams(
    stringifyObjectValues(parameters)
  )

  const { status, ok, statusText, url, json } = await api.get('votes', {
    searchParams: searchParameters
  })

  if (!ok) {
    throw new Error(
      `An error occured while fetching ${url}. ${status} - ${statusText}`
    )
  }

  return json() as Promise<VoteResponse>
}

export const votesAverage = async (
  parameters: VoteAverageParameters
): Promise<VoteAverageResponse> => {
  const searchParameters = new URLSearchParams(
    stringifyObjectValues(parameters)
  )

  const { status, ok, statusText, url, json } = await api.get('votes/average', {
    searchParams: searchParameters
  })

  if (!ok) {
    throw new Error(
      `An error occured while fetching ${url}. ${status} - ${statusText}`
    )
  }

  return json() as Promise<VoteAverageResponse>
}

export const votesCategories = async (): Promise<VoteCategoryResponse> => {
  const { status, ok, statusText, url, json } = await api.get(
    'votes/categories'
  )

  if (!ok) {
    throw new Error(
      `An error occured while fetching ${url}. ${status} - ${statusText}`
    )
  }

  return json() as Promise<VoteCategoryResponse>
}
