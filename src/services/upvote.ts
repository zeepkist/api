import { UpvotesParameters } from '../params/upvote.js'
import { UpvotesResponse } from '../schemas/upvote.js'
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
  handleGet<UpvotesResponse>('upvotes/get', parameters)
