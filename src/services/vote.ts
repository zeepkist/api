import { api } from '../api.js'
import { VoteAverageResponse, VoteCategoryResponse, VoteResponse } from '../schemas/vote.js'
import { VoteAverageParameters, VoteParameters } from '../params/vote.js'
import { stringifyObjectValues } from '../utils/index.js'

export const votes = async (parameters: VoteParameters): Promise<VoteResponse> => {
  const searchParams = new URLSearchParams(stringifyObjectValues(parameters))

  return await api.get('votes', {
    searchParams
  }).json() as VoteResponse
}

export const votesAverage = async (parameters: VoteAverageParameters): Promise<VoteAverageResponse> => {
  const searchParams = new URLSearchParams(stringifyObjectValues(parameters))

  return await api.get('votes/average', {
    searchParams
  }).json() as VoteAverageResponse
}

export const votesCategories = async (): Promise<VoteCategoryResponse> => {
  return await api.get('votes/categories').json() as VoteCategoryResponse
}
