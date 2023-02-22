import {
  TrackOfTheDayParameters,
  TrackOfTheDayRankingsParameters
} from '../params/trackOfTheDay.js'
import {
  TrackOfTheDay,
  TrackOfTheDayRankingsResponse
} from '../schemas/trackOfTheDay.js'
import { handleGet } from '../utils/index.js'

/**
 * Get the track of the day
 * @category Track of the Day
 * @example
 * import { trackOfTheDay } from '@zeepkist/gtr-api'
 *
 * const data = await trackOfTheDay({ Date: '2023-02-01' })
 */
export const trackOfTheDay = async (parameters: TrackOfTheDayParameters) =>
  handleGet<TrackOfTheDay>('totd', parameters)

/**
 * Get rankings for the track of the day
 * @category Track of the Day
 * @example
 * import { trackOfTheDayRankings } from '@zeepkist/gtr-api'
 *
 * const data = await trackOfTheDayRankings({ Date: '2023-02-01' })
 */
export const trackOfTheDayRankings = async (
  parameters: TrackOfTheDayRankingsParameters
) => handleGet<TrackOfTheDayRankingsResponse>('totd/rankings', parameters)
