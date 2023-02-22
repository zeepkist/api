import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

export enum VoteCategoryEnum {
  General = 0,
  Flow = 1,
  Difficulty = 2,
  Scenery = 3
}

export interface Vote {
  level: Level
  user: User
  score: number
  category: VoteCategoryEnum
}

export interface VoteAverage {
  level: number
  category: VoteCategoryEnum
  averageScore: number
  amountOfVotes: number
}

export interface VoteCategory {
  displayName: string
  value: VoteCategoryEnum
}

export interface VotesResponse extends PaginatedResponse {
  votes: Vote[]
}

export interface VotesAverageResponse {
  averageScores: VoteAverage[]
}

export interface VotesCategoryResponse {
  categories: VoteCategory[]
}
