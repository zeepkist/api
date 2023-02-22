import { VotesAverageParameters, VotesParameters } from '../params/vote.js'
import {
  VotesAverageResponse,
  VotesCategoryResponse,
  VotesResponse
} from '../schemas/vote.js'
import { handleGet } from '../utils/index.js'

export const votes = async (parameters: VotesParameters) =>
  handleGet<VotesResponse>('votes', parameters)

export const votesAverage = async (parameters: VotesAverageParameters) =>
  handleGet<VotesAverageResponse>('votes/average', parameters)

export const votesCategories = async () =>
  handleGet<VotesCategoryResponse>('votes/categories')
