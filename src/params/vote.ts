import { Limit, Offset } from './generic.js'

export interface VoteParameters extends Limit, Offset {
  LevelId: number
  LevelUid: string
  LevelWorkshopId: string
  UserSteamId: string
  UserId: number
}

export interface VoteAverageParameters extends Limit, Offset {
  LevelId: number
}
