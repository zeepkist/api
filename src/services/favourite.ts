import { FavouritesParameters } from '../params/favourite.js'
import { FavouritesResponse } from '../schemas/favourite.js'
import { handleGet } from '../utils/index.js'

export const favourites = async (parameters: FavouritesParameters) =>
  handleGet<FavouritesResponse>('favorites/get', parameters)
