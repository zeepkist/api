import {
  UserParameters,
  UserRankingParameters,
  UserRankingsParameters,
  UsersParameters
} from '../params/user.js'
import {
  User,
  UserRanking,
  UserRankingsResponse,
  UsersResponse
} from '../schemas/user.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a user by Id or SteamId
 * @category User
 * @example
 * import { getUser } from '@zeepkist/gtr-api'
 *
 * const user = await getUser({ Id: 1 })
 */
export const getUser = async (parameters: UserParameters) => {
  if (!parameters.Id && !parameters.SteamId) {
    throw new TypeError('You must provide either an Id or a SteamId')
  }
  return handleGet<User>(
    parameters.Id ? 'users/${parameters.Id}' : 'users/steam/${parameters.SteamId}',
    parameters
  )
}

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
 * Get a user's world record count rank
 * @category User
 * @example
 * import { getUserRanking } from '@zeepkist/gtr-api'
 *
 * const ranking = await getUserRanking({ UserId: 1 })
 */
export const getUserRanking = async (parameters: UserRankingParameters) =>
  handleGet<UserRanking>('users/ranking', parameters)

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
