import { Limit, Offset } from './generic.js'

/**
 * @category Favourite
 */
export interface FavouritesParameters extends Limit, Offset {
  LevelId?: number
  LevelUid?: string
  LevelWorkshopId?: string
  UserId?: number
  UserSteamId?: string
}
