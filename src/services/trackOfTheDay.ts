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
 * import { getTrackOfTheDay } from '@zeepkist/gtr-api'
 *
 * const trackOfTheDay = await getTrackOfTheDay({ Date: '2023-02-01' })
 */
export const getTrackOfTheDay = async (parameters: TrackOfTheDayParameters) =>
  handleGet<TrackOfTheDay>('totd', parameters)

/**
 * Get rankings for the track of the day
 * @category Track of the Day
 * @example
 * import { getTrackOfTheDayRankings } from '@zeepkist/gtr-api'
 *
 * const trackOfTheDay = await getTrackOfTheDayRankings({ Date: '2023-02-01' })
 */
export const getTrackOfTheDayRankings = async (
  parameters: TrackOfTheDayRankingsParameters
) => handleGet<TrackOfTheDayRankingsResponse>('totd/rankings', parameters)
