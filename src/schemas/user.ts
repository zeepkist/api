import { PaginatedResponse } from './generic.js'

/**
 * @category User
 */
export interface User {
  id: number
  steamId: string
  steamName: string
  discordId: string
  position: number
  score: number
}

/**
 * @category User
 */
export interface UserRanking {
  amountOfWorldRecords: number
  position: number
  score: number
}

/**
 * @category User
 */
export interface UserRankings extends UserRanking {
  user: User
}

/**
 * @category User
 */
export interface UsersResponse extends PaginatedResponse {
  users: User[]
}

/**
 * @category User
 */
export interface UserRankingsResponse extends PaginatedResponse {
  rankings: UserRankings[]
}
