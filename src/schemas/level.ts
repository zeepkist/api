import { PaginatedResponse } from './generic.js'
import { LevelRecordNoLevel } from './record.js'

/**
 * @category Level
 */
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
  rank: number // popularity rank
  points: number // track value
  worldRecord: LevelRecordNoLevel
}

/**
 * @category Level
 */
export interface PopularLevel {
  level: Level
  recordsCount: number
}

/**
 * @category Level
 */
export interface LevelsResponse extends PaginatedResponse {
  levels: Level[]
}

/**
 * @category Level
 */
export interface PopularLevelsResponse {
  levels: PopularLevel[]
}
