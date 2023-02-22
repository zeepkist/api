import { Limit, Offset } from './generic.js'

export interface RecordsParameters extends Limit, Offset {
  LevelId: number
  LevelUid: string
  LevelWorkshopId: string
  UserSteamId: string
  UserId: number
  BestOnly: boolean
  ValidOnly: boolean
  InvalidOnly: boolean
  WorldRecordOnly: boolean
  MinimumTime: number
  MaximumTime: number
  GameVersion: string
  Sort: string
}
