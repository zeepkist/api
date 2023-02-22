/**
 * @module Favourite
 */

import { FavouritesParameters } from '../params/favourite.js'
import { FavouritesResponse } from '../schemas/favourite.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of a user's favorite tracks.
 * @category Favourite
 * @example
 * import { favourites } from '@zeepkist/gtr-api'
 *
 * const data = await favourites({ UserId: 1 })
 */
export const favourites = async (parameters: FavouritesParameters) =>
  handleGet<FavouritesResponse>('favorites/get', parameters)
