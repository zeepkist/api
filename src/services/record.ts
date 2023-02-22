import { RecordsParameters } from '../params/record.js'
import { RecentRecordsResponse, RecordsResponse } from '../schemas/record.js'
import { handleGet } from '../utils/index.js'

export const records = async (parameters: RecordsParameters) =>
  handleGet<RecordsResponse>('records', parameters)

export const recentRecords = async () =>
  handleGet<RecentRecordsResponse>('records/recent')
