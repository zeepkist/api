import { UpvotesParameters } from '../params/upvote.js'
import { UpvotesResponse } from '../schemas/upvote.js'
import { handleGet } from '../utils/index.js'

export const upvotes = async (parameters: UpvotesParameters) =>
  handleGet<UpvotesResponse>('upvotes/get', parameters)
