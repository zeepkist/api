import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

export interface TrackOfTheDay {
  date: string
  level: Level
}

export interface TrackOfTheDayRanking {
  user: User
  position: number
  time: number
}

export interface TrackOfTheDayRankingsResponse
  extends PaginatedResponse,
    TrackOfTheDay {
  rankings: TrackOfTheDayRanking[]
}
