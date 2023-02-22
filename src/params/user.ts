import { Limit, Offset } from './generic.js'

interface UserId {
  Id: number
  SteamId: never
}

interface UserSteamId {
  Id: never
  SteamId: string
}

export type UserParameters = UserId | UserSteamId

export interface UsersParameters extends Limit, Offset {}

export interface UserRankingParameters {
  UserId: number
  SteamId: string
}

export interface UserRankingsParameters extends Limit, Offset {}
