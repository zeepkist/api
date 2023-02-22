import { Limit, Offset } from './generic.js'

export interface TrackOfTheDayParameters {
  Date: string
}

export interface TrackOfTheDayRankingsParameters extends Limit, Offset {
  Date: string
}
