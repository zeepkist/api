/**
 * @module Favourite
 */

import { FavouritesParameters } from '../params/favourite.js'
import { Favourite, FavouritesResponse } from '../schemas/favourite.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of a user's favourite tracks.
 * @category Favourite
 * @example
 * import { getFavourites } from '@zeepkist/gtr-api'
 *
 * const favourites = await getFavourites({ UserId: 1 })
 */
export const getFavourites = async (parameters: FavouritesParameters) =>
  handleGet<FavouritesResponse>('favorites', parameters)

/**
 * Get a favourite track by id.
 * @category Favourite
 * @example
 * import { getFavourite } from '@zeepkist/gtr-api'
 *
 * const favourite = await getFavourite(1)
 */
export const getFavourite = async (id: number) =>
  handleGet<Favourite>(`favorites/${id}`)
