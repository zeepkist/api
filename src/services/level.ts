import { LevelsParameters, SearchLevelsParameters } from '../params/level.js'
import { LevelsResponse } from '../schemas/level.js'
import { handleGet } from '../utils/index.js'

export const levels = async (parameters: LevelsParameters) =>
  handleGet<LevelsResponse>('records', parameters)

export const searchLevels = async (parameters: SearchLevelsParameters) =>
  handleGet<LevelsResponse>('records/recent', parameters)
