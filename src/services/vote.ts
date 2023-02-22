/**
 * @file Vote Service
 */

import { VotesAverageParameters, VotesParameters } from '../params/vote.js'
import {
  VotesAverageResponse,
  VotesCategoryResponse,
  VotesResponse
} from '../schemas/vote.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of votes for a level
 * @category Vote
 * @example
 * import { getVotes } from '@zeepkist/gtr-api'
 *
 * const votes = await getVotes({ UserId: 1 })
 */
export async function getVotes(parameters: VotesParameters) {
  return handleGet<VotesResponse>('votes', parameters)
}

/**
 * Get the average vote score for each category of a level
 * @category Vote
 * @example
 * import { getVotesAverage } from '@zeepkist/gtr-api'
 *
 * const averageVotes = await getVotesAverage({ LevelId: 1 })
 */
export const getVotesAverage = async (parameters: VotesAverageParameters) =>
  handleGet<VotesAverageResponse>('votes/average', parameters)

/**
 * Get a list of vote categories
 * @category Vote
 * @example
 * import { getVotesCategories } from '@zeepkist/gtr-api'
 *
 * const categories = await getVotesCategories()
 */
export const getVotesCategories = async () =>
  handleGet<VotesCategoryResponse>('votes/categories')
