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
 * import { votes } from '@zeepkist/gtr-api'
 *
 * const data = await votes({ UserId: 1 })
 */
export async function votes(parameters: VotesParameters) {
  return handleGet<VotesResponse>('votes', parameters)
}

/**
 * Get the average vote score for each category of a level
 * @category Vote
 * @example
 * import { votesAverage } from '@zeepkist/gtr-api'
 *
 * const data = await votesAverage({ LevelId: 1 })
 */
export const votesAverage = async (parameters: VotesAverageParameters) =>
  handleGet<VotesAverageResponse>('votes/average', parameters)

/**
 * Get a list of vote categories
 * @category Vote
 * @example
 * import { votesCategories } from '@zeepkist/gtr-api'
 *
 * const data = await votesCategories()
 */
export const votesCategories = async () =>
  handleGet<VotesCategoryResponse>('votes/categories')
