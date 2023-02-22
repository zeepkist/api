import { VoteAverageParameters, VoteParameters } from '../params/vote.js'
import {
  VoteAverageResponse,
  VoteCategoryResponse,
  VoteResponse
} from '../schemas/vote.js'
import { handleGet } from '../utils/index.js'

export const votes = async (parameters: VoteParameters) =>
  handleGet<VoteResponse>('votes', parameters)

export const votesAverage = async (parameters: VoteAverageParameters) =>
  handleGet<VoteAverageResponse>('votes/average', parameters)

export const votesCategories = async () =>
  handleGet<VoteCategoryResponse>('votes/categories')
