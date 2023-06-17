import ky from 'ky-universal'

import { parseGhost } from '../index.js'

/**
 * Download and parse a Ghost of a Record
 * @category Ghost
 * @example Download a specific Ghost
 * import { getGhost } from '@zeepkist/gtr-api'
 *
 * const ghost = await getGhost('https://storage.googleapis.com/download/storage/v1/b/zeepkist-gtr/o/ghosts%2F....bin')
 *
 * @example Download a Ghost from a Record
 * import { getGhost, getRecentRecords } from '@zeepkist/gtr-api'
 *
 * const recentRecords = await getRecentRecords()
 * const { ghost } = await getGhost(recentRecords[0].ghostUrl)
 *
 * @example Download a Ghost from a Record and parse it later
 * import { getGhost, parseGhost } from '@zeepkist/gtr-api'
 *
 * const { buffer } = await getGhost('url to ghost file')
 *
 * // Later on you can parse the ghost from the buffer. This is identical to the `ghost` export of getGhost
 * const ghost = parseGhost(buffer)
 */
export const getGhost = async (url: string) => {
  const response = await ky.get(url)
  const buffer = await response.arrayBuffer()
  const ghost = parseGhost(buffer)

  return { ghost, buffer }
}
