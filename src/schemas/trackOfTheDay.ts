import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

/**
 * @category Track of the Day
 */
export interface TrackOfTheDay {
  date: string
  level: Level
}

/**
 * @category Track of the Day
 */
export interface TrackOfTheDayRanking {
  user: User
  position: number
  time: number
}

/**
 * @category Track of the Day
 */
export interface TrackOfTheDayRankingsResponse
  extends PaginatedResponse,
    TrackOfTheDay {
  rankings: TrackOfTheDayRanking[]
}
