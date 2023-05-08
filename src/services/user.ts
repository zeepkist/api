import { UserRankingsParameters, UsersParameters } from '../params/user.js'
import {
  User,
  UserRanking,
  UserRankingsResponse,
  UsersResponse
} from '../schemas/user.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of users
 * @category User
 * @example
 * import { getUsers } from '@zeepkist/gtr-api'
 *
 * const users = await getUsers({ Limit: 5 })
 */
export const getUsers = async (parameters: UsersParameters) =>
  handleGet<UsersResponse>('users', parameters)

/**
 * Get a user by id.
 * @category User
 * @example
 * import { getUser } from '@zeepkist/gtr-api'
 *
 * const user = await getUser(1)
 */
export const getUser = async (id: number) => handleGet<User>(`users/${id}`)

/**
 * Get a user by steam id.
 * @category User
 * @example
 * import { getUserBySteamId } from '@zeepkist/gtr-api'
 *
 * const user = await getUserBySteamId('76561198000000000')
 */
export const getUserBySteamId = async (steamId: string) =>
  handleGet<User>(`users/steam/${steamId}`)

/**
 * Get a user's world record count rank
 * @category User
 * @example
 * import { getUserRanking } from '@zeepkist/gtr-api'
 *
 * const ranking = await getUserRanking({ UserId: 1 })
 */
export const getUserRanking = async (id: number) =>
  handleGet<UserRanking>(`users/ranking/${id}`)

/**
 * Get a list of users by world record count
 * @category User
 * @example
 * import { getUserRankings } from '@zeepkist/gtr-api'
 *
 * const rankings = await getUserRankings({ Limit: 5 })
 */
export const getUserRankings = async (parameters: UserRankingsParameters) =>
  handleGet<UserRankingsResponse>('users/rankings', parameters)
