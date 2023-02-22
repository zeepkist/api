import { PaginatedResponse } from './generic.js'

export interface Level {
  id: number
  uniqueId: string
  workshopId: string
  name: string
  author: string
  isValid: boolean
  timeAuthor: number
  timeGold: number
  timeSilver: number
  timeBronze: number
  thumbnailUrl: string
}

export interface LevelsResponse extends PaginatedResponse {
  levels: Level[]
}
