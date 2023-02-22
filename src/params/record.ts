import { Limit, Offset, Sort } from './generic.js'

/**
 * @category Record
 */
export interface RecordsParameters extends Limit, Offset, Sort {
  LevelId?: number
  LevelUid?: string
  LevelWorkshopId?: string
  UserSteamId?: string
  UserId?: number
  BestOnly?: boolean
  ValidOnly?: boolean
  InvalidOnly?: boolean
  WorldRecordOnly?: boolean
  MinimumTime?: number
  MaximumTime?: number
  GameVersion?: string
}
