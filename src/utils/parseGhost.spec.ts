import test from 'ava'

import { v2 } from '../../fixtures/ghostV2.js'
import expectedV2 from '../../fixtures/ghostV2.json' assert { type: 'json' }
import { v3 } from '../../fixtures/ghostV3.js'
import expectedV3 from '../../fixtures/ghostV3.json' assert { type: 'json' }
import { v4 } from '../../fixtures/ghostV4.js'
import expectedV4 from '../../fixtures/ghostV4.json' assert { type: 'json' }
import { parseGhost } from './index.js'

// Verify numbers are equal to 5 decimal places (0.00001) to account for
// floating point precision variance
function areEqual(a: number, b: number): boolean {
  return a.toFixed(5) === b.toFixed(5)
}

// Decode the base64 representation of the ghost data back into an ArrayBuffer
const decodeBase64 = (base64: string): ArrayBuffer => {
  const string = atob(base64)
  const uint8Array = new Uint8Array(string.length)

  for (let index = 0; index < string.length; index++) {
    uint8Array[index] = string.codePointAt(index) ?? 0
  }

  return uint8Array.buffer
}

const positionNotEqualMessage = (a: number, b: number) =>
  `Expected ${a} to equal ${b}`

const ghostV2 = parseGhost(decodeBase64(v2))
const ghostV3 = parseGhost(decodeBase64(v3))
const ghostV4 = parseGhost(decodeBase64(v4))

test('parseGhost() - V2 Ghost: Headers', t => {
  t.is(ghostV2.version, expectedV2.version as 2)
  t.is(ghostV2.steamId, expectedV2.steamId)
  t.is(ghostV2.soapboxId, expectedV2.soapboxId)
  t.is(ghostV2.hatId, expectedV2.hatId)
  t.is(ghostV2.colorId, expectedV2.colorId)
  t.is(ghostV2.frameCount, expectedV2.frameCount)
  t.is(ghostV2.frames.length, ghostV2.frameCount)
  t.is(ghostV2.frames.length, expectedV2.frames.length)
})

/*
for (const [index, frame] of ghostV2.frames.entries()) {
  test(`parseGhost() - V2 Ghost: Frame ${index}`, t => {
    const expectedFrame = expectedV2.frames[index]

    t.is(frame.time, expectedFrame.time)
    t.true(
      areEqual(frame.position.x, expectedFrame.position.x),
      positionNotEqualMessage(frame.position.x, expectedFrame.position.x)
    )
    t.true(
      areEqual(frame.position.y, expectedFrame.position.y),
      positionNotEqualMessage(frame.position.y, expectedFrame.position.y)
    )
    t.true(
      areEqual(frame.position.z, expectedFrame.position.z),
      positionNotEqualMessage(frame.position.z, expectedFrame.position.z)
    )
    t.deepEqual(frame.euler, expectedFrame.euler)
  })
}
*/

test('parseGhost() - V3 Ghost: Headers', t => {
  t.is(ghostV3.version, expectedV3.version as 3)
  t.is(ghostV3.steamId, expectedV3.steamId)
  t.is(ghostV3.soapboxId, expectedV3.soapboxId)
  t.is(ghostV3.hatId, expectedV3.hatId)
  t.is(ghostV3.colorId, expectedV3.colorId)
  t.is(ghostV3.frameCount, expectedV3.frameCount)
  t.is(ghostV3.frames.length, ghostV3.frameCount)
  t.is(ghostV3.frames.length, expectedV3.frames.length)
})

/*
for (const [index, frame] of ghostV3.frames.entries()) {
  test(`parseGhost() - V3 Ghost: Frame ${index}`, t => {
    const expectedFrame = expectedV3.frames[index]

    t.is(frame.time, expectedFrame.time)
    t.true(
      areEqual(frame.position.x, expectedFrame.position.x),
      positionNotEqualMessage(frame.position.x, expectedFrame.position.x)
    )
    t.true(
      areEqual(frame.position.y, expectedFrame.position.y),
      positionNotEqualMessage(frame.position.y, expectedFrame.position.y)
    )
    t.true(
      areEqual(frame.position.z, expectedFrame.position.z),
      positionNotEqualMessage(frame.position.z, expectedFrame.position.z)
    )
    t.deepEqual(frame.euler, expectedFrame.euler)
    t.is(frame.steering, expectedFrame.steering)
    t.is(frame.isArmsUp, expectedFrame.isArmsUp)
    t.is(frame.isBraking, expectedFrame.isBraking)
  })
}
*/

test('parseGhost() - V4 Ghost: Headers', t => {
  t.is(ghostV4.version, expectedV4.version as 4)
  t.is(ghostV4.steamId, expectedV4.steamId)
  t.is(ghostV4.soapboxId, expectedV4.soapboxId)
  t.is(ghostV4.hatId, expectedV4.hatId)
  t.is(ghostV4.colorId, expectedV4.colorId)
  t.is(ghostV4.framePrecision, expectedV4.framePrecision)
  t.is(ghostV4.frameCount, expectedV4.frameCount)
  t.is(ghostV4.frames.length, ghostV4.frameCount)
  t.is(ghostV4.frames.length, expectedV4.frames.length)
})

for (const [index, frame] of ghostV4.frames.entries()) {
  test(`parseGhost() - V4 Ghost: Frame ${index}`, t => {
    const expectedFrame = expectedV4.frames[index]

    t.is(frame.time, expectedFrame.time)
    t.true(
      areEqual(frame.position.x, expectedFrame.position.x),
      positionNotEqualMessage(frame.position.x, expectedFrame.position.x)
    )
    t.true(
      areEqual(frame.position.y, expectedFrame.position.y),
      positionNotEqualMessage(frame.position.y, expectedFrame.position.y)
    )
    t.true(
      areEqual(frame.position.z, expectedFrame.position.z),
      positionNotEqualMessage(frame.position.z, expectedFrame.position.z)
    )
    t.deepEqual(frame.euler, expectedFrame.euler)
    t.deepEqual(frame.quaternion, expectedFrame.quaternion)
    t.is(frame.steering, expectedFrame.steering)
    t.is(frame.isArmsUp, expectedFrame.isArmsUp)
    t.is(frame.isBraking, expectedFrame.isBraking)
  })
}
