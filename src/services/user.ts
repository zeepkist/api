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
 * import { user } from '@zeepkist/gtr-api'
 *
 * const data = await user({ Id: 1 })
 */
export const user = async (parameters: UserParameters) =>
  handleGet<User>(parameters.Id ? 'users/id' : 'users/steamid', parameters)

/**
 * Get a list of users
 * @category User
 * @example
 * import { users } from '@zeepkist/gtr-api'
 *
 * const data = await users({ Limit: 5 })
 */
export const users = async (parameters: UsersParameters) =>
  handleGet<UsersResponse>('users', parameters)

/**
 * Get a user's world record count rank
 * @category User
 * @example
 * import { userRanking } from '@zeepkist/gtr-api'
 *
 * const data = await userRanking({ UserId: 1 })
 */
export const userRanking = async (parameters: UserRankingParameters) =>
  handleGet<UserRanking>('users/ranking', parameters)

/**
 * Get a list of users by world record count
 * @category User
 * @example
 * import { userRankings } from '@zeepkist/gtr-api'
 *
 * const data = await userRankings({ Limit: 5 })
 */
export const userRankings = async (parameters: UserRankingsParameters) =>
  handleGet<UserRankingsResponse>('users/rankings', parameters)
