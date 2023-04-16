import { PaginatedResponse } from './generic.js'
import { Level } from './level.js'
import { User } from './user.js'

/**
 * Note: Not named Record because it conflicts with the built-in Record type.
 * @category Record
 */
export interface LevelRecord {
  id: number
  dateCreated: string
  time: number
  splits: string // Formatted as `split1|split2|split3`
  ghostUrl: string
  screenshotUrl: string
  isBest: boolean
  isValid: boolean
  isWorldRecord: boolean
  gameVersion: string
  user: User
  level: Level
}

/**
 * @category Record
 */
export interface RecordsResponse extends PaginatedResponse {
  records: LevelRecord[]
}

/**
 * @category Record
 */
export interface RecentRecordsResponse {
  records: LevelRecord[]
}
