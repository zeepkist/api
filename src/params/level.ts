import { Limit, Offset } from './generic.js'

export interface LevelsParameters {
  Id: number
  Uid: string
  WorkshopId: string
  Author: string
  Name: string
  ValidOnly: boolean
  InvalidOnly: boolean
  Sort: string
}

export interface SearchLevelsParameters extends Limit, Offset {
  Query: string
  MinAuthor: number
  MaxAuthor: number
  MinGold: number
  MaxGold: number
  MinSilver: number
  MaxSilver: number
  MinBronze: number
  MaxBronze: number
}
