import { Limit, Offset, Sort } from './generic.js'

/**
 * @category Level
 */
export interface LevelsParameters extends Limit, Offset, Sort {
  Id?: number
  Uid?: string
  WorkshopId?: string
  Author?: string
  Name?: string
  ValidOnly?: boolean
  InvalidOnly?: boolean
}

/**
 * @category Level
 */
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
