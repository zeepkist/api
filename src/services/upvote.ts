import { UpvotesParameters } from '../params/upvote.js'
import { Upvote, UpvotesResponse } from '../schemas/upvote.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of upvotes for a level
 * @category Upvote
 * @example
 * import { getUpvotes } from '@zeepkist/gtr-api'
 *
 * const upvotes = await getUpvotes({ LevelId: 1 })
 */
export const getUpvotes = async (parameters: UpvotesParameters) =>
  handleGet<UpvotesResponse>('upvotes', parameters)

/**
 * Get an upvote by id.
 * @category Upvote
 * @example
 * import { getUpvote } from '@zeepkist/gtr-api'
 *
 * const upvote = await getUpvote(1)
 */
export const getUpvote = async (id: number) =>
  handleGet<Upvote>(`upvotes/${id}`)
