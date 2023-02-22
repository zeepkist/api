import { UpvotesParameters } from '../params/upvote.js'
import { UpvotesResponse } from '../schemas/upvote.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of upvotes for a level
 * @category Upvote
 * @example
 * import { upvotes } from '@zeepkist/gtr-api'
 *
 * const data = await upvotes({ LevelId: 1 })
 */
export const upvotes = async (parameters: UpvotesParameters) =>
  handleGet<UpvotesResponse>('upvotes/get', parameters)
