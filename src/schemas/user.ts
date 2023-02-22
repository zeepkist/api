import { PaginatedResponse } from './generic.js'

/**
 * @category User
 */
export interface User {
  id: number
  steamId: string
  steamName: string
}

/**
 * @category User
 */
export interface UserRanking {
  amountOfWorldRecords: number
  position: number
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
  rankings: (UserRanking & {
    user: User
  })[]
}
