import { Limit, Offset } from './generic.js'

/**
 * @category User
 */
export type UserParameters = {
  Id?: number
  SteamId?: string
}

/**
 * @category User
 */
export interface UsersParameters extends Limit, Offset {}

/**
 * @category User
 */
export interface UserRankingParameters {
  UserId?: number
  SteamId?: string
}

/**
 * @category User
 */
export interface UserRankingsParameters extends Limit, Offset {}
