import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

/**
 * @category Vote
 */
export enum VoteCategoryEnum {
  General = 0,
  Flow = 1,
  Difficulty = 2,
  Scenery = 3
}

/**
 * @category Vote
 */
export interface Vote {
  level: Level
  user: User
  score: number
  category: VoteCategoryEnum
}

/**
 * @category Vote
 */
export interface VoteAverage {
  level: number
  category: VoteCategoryEnum
  averageScore: number
  amountOfVotes: number
}

/**
 * @category Vote
 */
export interface VoteCategory {
  displayName: string
  value: VoteCategoryEnum
}

/**
 * @category Vote
 */
export interface VotesResponse extends PaginatedResponse {
  votes: Vote[]
}

/**
 * @category Vote
 */
export interface VotesAverageResponse {
  averageScores: VoteAverage[]
}

/**
 * @category Vote
 */
export interface VotesCategoryResponse {
  categories: VoteCategory[]
}
