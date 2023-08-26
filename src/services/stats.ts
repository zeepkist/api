/**
 * @module Stats
 */
import { StatsAggregateParameters, StatsParameters } from '../params/stats.js'
import { Stats } from '../schemas/stats.js'
import { handleGet } from '../utils/index.js'

/**
 * Get stats for a user.
 * @category Stats
 * @example
 * import { getStats } from '@zeepkist/gtr-api'
 *
 * const stats = await getStats({ UserId: 1 })
 *
 * const monthStats = await getStats({
 *   UserId: 1,
 *   Month: 8,
 *   Year: 2023
 * })
 */
export const getStats = async (parameters: StatsParameters) =>
  handleGet<Stats>('stats', parameters)

/**
 * Get aggregate stats of all users.
 * @category Stats
 * @example
 * import { getAggregateStats } from '@zeepkist/gtr-api'
 *
 * const stats = await getAggregateStats()
 *
 * const monthStats = await getAggregateStats({
 *   Month: 8,
 *   Year: 2023
 * })
 */
export const getAggregateStats = async (parameters: StatsAggregateParameters) =>
  handleGet<Stats>('stats/aggregate', parameters)
