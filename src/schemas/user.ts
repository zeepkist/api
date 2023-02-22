import { PaginatedResponse } from './generic.js'

export interface User {
  id: number
  steamId: string
  steamName: string
}

export interface UserRanking {
  amountOfWorldRecords: number
  position: number
}

export interface UsersResponse extends PaginatedResponse {
  users: User[]
}

export interface UserRankingsResponse extends PaginatedResponse {
  rankings: (UserRanking & {
    user: User
  })[]
}
