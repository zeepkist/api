import { Limit, Offset, Sort } from './generic.js'

export interface LevelsParameters extends Sort {
  Id?: number
  Uid?: string
  WorkshopId?: string
  Author?: string
  Name?: string
  ValidOnly?: boolean
  InvalidOnly?: boolean
}

export interface SearchLevelsParameters extends Limit, Offset {
  Query?: string
  MinAuthor?: number
  MaxAuthor?: number
  MinGold?: number
  MaxGold?: number
  MinSilver?: number
  MaxSilver?: number
  MinBronze?: number
  MaxBronze?: number
}
