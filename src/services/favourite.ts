/**
 * @module Favourite
 */
import { FavouriteBody } from '../body/favourite.js'
import { FavouritesParameters } from '../params/favourite.js'
import { Token } from '../params/generic.js'
import {
  AddFavouriteResponse,
  Favourite,
  FavouritesResponse
} from '../schemas/favourite.js'
import { handleDelete, handleGet, handlePost } from '../utils/index.js'

/**
 * Get a list of a user's favourite tracks.
 * @category Favourite
 * @example
 * import { getFavourites } from '@zeepkist/api'
 *
 * const favourites = await getFavourites({ UserId: 1 })
 */
export const getFavourites = async (parameters: FavouritesParameters) =>
  handleGet<FavouritesResponse>('favorites', parameters)

/**
 * Get a favourite track by id.
 * @category Favourite
 * @example
 * import { getFavourite } from '@zeepkist/api'
 *
 * const favourite = await getFavourite(1)
 */
export const getFavourite = async (id: number) =>
  handleGet<Favourite>(`favorites/${id}`)

/**
 * Add a track to a user's favourites.
 * @category Favourite
 * @example
 * import { addFavourite } from '@zeepkist/api'
 *
 * const favourite = await addFavourite({ UserId: 1, LevelId: 1 }, token)
 */
export const addFavourite = async (body: FavouriteBody, token: Token) =>
  handlePost<AddFavouriteResponse, FavouriteBody>('favorites', body, token)

/**
 * Remove a track from a user's favourites.
 * @category Favourite
 * @example
 * import { removeFavourite } from '@zeepkist/api'
 *
 * await removeFavourite(1, token)
 */
export const removeFavourite = async (id: number, token: Token) =>
  handleDelete(`favorites/${id}`, token)
