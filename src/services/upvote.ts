import { UpvoteBody } from '../body/upvote.js'
import { Token } from '../params/generic.js'
import { UpvotesParameters } from '../params/upvote.js'
import {
  AddUpvoteResponse,
  Upvote,
  UpvotesResponse
} from '../schemas/upvote.js'
import { handleDelete, handleGet, handlePost } from '../utils/index.js'

/**
 * Get a list of upvotes for a level
 * @category Upvote
 * @example
 * import { getUpvotes } from '@zeepkist/api'
 *
 * const upvotes = await getUpvotes({ LevelId: 1 })
 */
export const getUpvotes = async (parameters: UpvotesParameters) =>
  handleGet<UpvotesResponse>('upvotes', parameters)

/**
 * Get an upvote by id.
 * @category Upvote
 * @example
 * import { getUpvote } from '@zeepkist/api'
 *
 * const upvote = await getUpvote(1)
 */
export const getUpvote = async (id: number) =>
  handleGet<Upvote>(`upvotes/${id}`)

/**
 * Add an upvote to a level.
 * @category Upvote
 * @example
 * import { addUpvote } from '@zeepkist/api'
 *
 * const upvote = await addUpvote({ levelId: 1 }, token)
 */
export const addUpvote = async (body: UpvoteBody, token: Token) =>
  handlePost<AddUpvoteResponse, UpvoteBody>('upvotes', body, token)

/**
 * Remove an upvote from a level.
 * @category Upvote
 * @example
 * import { removeUpvote } from '@zeepkist/api'
 *
 * await removeUpvote(1, token)
 */
export const removeUpvote = async (id: number, token: Token) =>
  handleDelete(`upvotes/${id}`, token)
