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

export const user = async (parameters: UserParameters) =>
  handleGet<User>(parameters.Id ? 'users/id' : 'users/steamid', parameters)

export const users = async (parameters: UsersParameters) =>
  handleGet<UsersResponse>('users', parameters)

export const userRanking = async (parameters: UserRankingParameters) =>
  handleGet<UserRanking>('users/ranking', parameters)

export const userRankings = async (parameters: UserRankingsParameters) =>
  handleGet<UserRankingsResponse>('users/rankings', parameters)
