import test from 'ava'

import { stringifyObjectValues } from './index.js'

test('todo', t => {
  t.deepEqual(
    stringifyObjectValues({
      string: 'string',
      number: 1,
      boolean: true,
      array: ['1', 2, true]
    }),
    {
      string: 'string',
      number: '1',
      boolean: 'true',
      array: '1,2,true'
    }
  )
})
