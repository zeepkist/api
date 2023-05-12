import { VoteCategoryEnum } from '../schemas/vote.js'

/**
 * @category Vote
 */
export interface VoteBody {
  level: number
  score: number
  category: VoteCategoryEnum
}
