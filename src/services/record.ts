import { RecordsParameters } from '../params/record.js'
import { RecentRecordsResponse, RecordsResponse } from '../schemas/record.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of records
 * @category Record
 * @example
 * import { records } from '@zeepkist/gtr-api'
 *
 * const data = await records({ UserId: 1 })
 */
export const records = async (parameters: RecordsParameters) =>
  handleGet<RecordsResponse>('records', parameters)

/**
 * Get a list of recent records
 * @category Record
 * @example
 * import { recentRecords } from '@zeepkist/gtr-api'
 *
 * const data = await recentRecords()
 */
export const recentRecords = async () =>
  handleGet<RecentRecordsResponse>('records/recent')
