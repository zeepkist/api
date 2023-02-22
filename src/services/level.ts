import { LevelsParameters, SearchLevelsParameters } from '../params/level.js'
import { LevelsResponse } from '../schemas/level.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of levels
 * @category Level
 * @example
 * import { levels } from '@zeepkist/gtr-api'
 *
 * const data = await levels({ Author: 'Yannic' })
 */
export const levels = async (parameters: LevelsParameters) =>
  handleGet<LevelsResponse>('records', parameters)

/**
 * Search for levels
 * @category Level
 * @example
 * import { searchLevels } from '@zeepkist/gtr-api'
 *
 * const data = await searchLevels({ Query: 'Level 01' })
 */
export const searchLevels = async (parameters: SearchLevelsParameters) =>
  handleGet<LevelsResponse>('records/recent', parameters)
