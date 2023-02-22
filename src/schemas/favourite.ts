import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

export interface Favourite {
  id: number
  user: User
  level: Level
}

export interface FavouritesResponse extends PaginatedResponse {
  favourites: Favourite[]
}
