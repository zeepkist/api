/**
 * @file Vote Service
 */

import { VoteBody } from '../body/vote.js'
import { VotesAverageParameters, VotesParameters } from '../params/vote.js'
import {
  VotesAverageResponse,
  VotesCategoryResponse,
  VotesResponse
} from '../schemas/vote.js'
import { handleGet, handlePost } from '../utils/index.js'

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

/**
 * Add a vote to a level
 * @category Vote
 * @example
 * import { addVote } from '@zeepkist/gtr-api'
 *
 * await addVote({ level: 0, score: 5, category: 3 }, token)
 */
export const addVote = async (body: VoteBody, token: string) =>
  handlePost<never, VoteBody>('votes', body, token)
