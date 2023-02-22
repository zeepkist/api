import { Limit, Offset } from './generic.js'

/**
 * @category User
 */
export interface UserId {
  Id: number
  SteamId: never
}

/**
 * @category User
 */
export interface UserSteamId {
  Id: never
  SteamId: string
}

/**
 * @category User
 */
export type UserParameters = UserId | UserSteamId

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
