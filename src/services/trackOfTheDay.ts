import {
  TrackOfTheDayParameters,
  TrackOfTheDayRankingsParameters
} from '../params/trackOfTheDay.js'
import {
  TrackOfTheDay,
  TrackOfTheDayRankingsResponse
} from '../schemas/trackOfTheDay.js'
import { handleGet } from '../utils/index.js'

export const trackOfTheDay = async (parameters: TrackOfTheDayParameters) =>
  handleGet<TrackOfTheDay>('totd', parameters)

export const trackOfTheDayRankings = async (
  parameters: TrackOfTheDayRankingsParameters
) => handleGet<TrackOfTheDayRankingsResponse>('totd/rankings', parameters)
