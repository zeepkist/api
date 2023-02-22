import { RecordsParameters } from '../params/record.js'
import { RecentRecordsResponse, RecordsResponse } from '../schemas/record.js'
import { handleGet } from '../utils/index.js'

/**
 * Get a list of records
 * @category Record
 * @example
 * import { getRecords } from '@zeepkist/gtr-api'
 *
 * const records = await getRecords({ UserId: 1 })
 */
export const getRecords = async (parameters: RecordsParameters) =>
  handleGet<RecordsResponse>('records', parameters)

/**
 * Get a list of recent records
 * @category Record
 * @example
 * import { getRecentRecords } from '@zeepkist/gtr-api'
 *
 * const records = await getRecentRecords()
 */
export const getRecentRecords = async () =>
  handleGet<RecentRecordsResponse>('records/recent')
