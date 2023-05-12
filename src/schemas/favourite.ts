import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

/**
 * @category Favourite
 */
export interface Favourite {
  id: number
  user: User
  level: Level
}

/**
 * @category Favourite
 */
export interface FavouritesResponse extends PaginatedResponse {
  favourites: Favourite[]
}

/**
 * @category Favourite
 */
export type AddFavouriteResponse = Pick<Favourite, 'id'>
