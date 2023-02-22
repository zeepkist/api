import { Limit, Offset } from './generic.js'

export interface VotesParameters extends Limit, Offset {
  LevelId: number
  LevelUid: string
  LevelWorkshopId: string
  UserSteamId: string
  UserId: number
}

export interface VotesAverageParameters extends Limit, Offset {
  LevelId: number
}
