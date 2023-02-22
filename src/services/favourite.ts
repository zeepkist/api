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
 * import { getFavourites } from '@zeepkist/gtr-api'
 *
 * const favourites = await getFavourites({ UserId: 1 })
 */
export const getFavourites = async (parameters: FavouritesParameters) =>
  handleGet<FavouritesResponse>('favorites/get', parameters)
