import { Limit, Offset } from './generic.js'

/**
 * @category Vote
 */
export interface VotesParameters extends Limit, Offset {
  LevelId?: number
  LevelUid?: string
  LevelWorkshopId?: string
  UserSteamId?: string
  UserId?: number
}

/**
 * @category Vote
 */
export interface VotesAverageParameters extends Limit, Offset {
  LevelId?: number
}
