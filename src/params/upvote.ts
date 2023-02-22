import { Limit, Offset } from './generic.js'

export interface UpvotesParameters extends Limit, Offset {
  LevelId: number
  LevelUid: string
  LevelWorkshopId: string
  UserId: number
  UserSteamId: string
}
