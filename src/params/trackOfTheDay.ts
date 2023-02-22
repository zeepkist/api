import { Limit, Offset } from './generic.js'

/**
 * @category Track of the Day
 */
export interface TrackOfTheDayParameters {
  Date?: string
}

/**
 * @category Track of the Day
 */
export interface TrackOfTheDayRankingsParameters
  extends Limit,
    Offset,
    TrackOfTheDayParameters {}
