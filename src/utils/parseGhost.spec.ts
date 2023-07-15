import test from 'ava'

import { ghostV4 } from '../../fixtures/ghostV4.js'
import expected from '../../fixtures/ghostV4.json' assert { type: 'json' }
import { parseGhost } from './index.js'

const ghost = parseGhost(ghostV4)

test('parseGhost()', t => {
  t.is(ghost.version, expected.version as 1 | 2 | 3 | 4)
  t.is(ghost.steamId, expected.steamId)
  t.is(ghost.soapboxId, expected.soapboxId)
  t.is(ghost.hatId, expected.hatId)
  t.is(ghost.colorId, expected.colorId)
  t.is(ghost.framePrecision, expected.framePrecision)
  t.is(ghost.frameCount, expected.frameCount)
  t.is(ghost.frames.length, ghost.frameCount)
  t.is(ghost.frames.length, expected.frames.length)
})

for (const [index, frame] of ghost.frames.entries()) {
  test(`parseGhost() frame ${index}`, t => {
    const expectedFrame = expected.frames[index]

    t.is(frame.time, expectedFrame.time)
    t.deepEqual(frame.position, expectedFrame.position)
    t.deepEqual(frame.euler, expectedFrame.euler)
    t.deepEqual(frame.quaternion, expectedFrame.quaternion)
    t.is(frame.steering, expectedFrame.steering)
    t.is(frame.isArmsUp, expectedFrame.isArmsUp)
    t.is(frame.isBraking, expectedFrame.isBraking)
  })
}
