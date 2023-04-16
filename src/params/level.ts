import { Limit, Offset, Sort } from './generic.js'

/**
 * @category Level
 */
export interface LevelsParameters extends Limit, Offset, Sort {
  Author?: string
  Name?: string
  Uid?: string
  WorkshopId?: string
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
