import test from 'ava'

import { getUser } from '../index.js'

test('getUser throws when no parameters provided', async t => {
  t.plan(1)

  await t.throwsAsync(() => getUser({}), {
    message: 'You must provide either an Id or a SteamId'
  })
})

/*
test('getUser throws when an invalid id is provided', async t => {
  t.plan(1)

  await t.throwsAsync(() => getUser({ Id: -1 }), {
    message: 'Request failed with status code 422 Unprocessable Entity'
  })
})
*/
