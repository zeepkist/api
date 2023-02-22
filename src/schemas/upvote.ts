import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

/**
 * @category Upvote
 */
export interface Upvote {
  id: number
  user: User
  level: Level
}

/**
 * @category Upvote
 */
export interface UpvotesResponse extends PaginatedResponse {
  upvotes: Upvote[]
}
