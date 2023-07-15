import { Ghost, GhostFrame, GhostFrameV4, quaternionToEuler } from '../index.js'

enum Flags {
  IsArmsUp = Math.trunc(1),
  IsBraking = 1 << 1
}

const parseV1Ghost = (version: 1, view: DataView) => {
  const frameCount = view.getUint32(4, true)
  const frames: GhostFrame[] = []

  const frameSize = 28
  const offsetEnd = 8 + frameCount * frameSize
  let offset = 8

  for (; offset < offsetEnd; offset += frameSize) {
    const frame: GhostFrame = {
      time: view.getFloat32(offset, true),
      position: {
        x: view.getFloat32(offset + 4, true) * -1,
        y: view.getFloat32(offset + 8, true),
        z: view.getFloat32(offset + 12, true)
      },
      euler: {
        x: view.getFloat32(offset + 16, true) * -1,
        y: view.getFloat32(offset + 20, true),
        z: view.getFloat32(offset + 24, true)
      }
    }
    frames.push(frame)
  }

  return {
    version,
    frameCount,
    frames
  }
}

const parseV2V3Ghost = (version: 2 | 3, view: DataView) => {
  const steamId = view.getBigUint64(4, true).toString()
  const soapboxId = view.getInt32(12, true)
  const hatId = view.getInt32(16, true)
  const colorId = view.getInt32(20, true)

  const frameCount = view.getInt32(24, true)
  const frameSize = version === 2 ? 28 : 33
  const frames: GhostFrame[] = []

  const offsetEnd = 28 + frameCount * frameSize
  let offset = 28

  for (; offset < offsetEnd; offset += frameSize) {
    const frame: GhostFrame = {
      time: view.getFloat32(offset, true),
      position: {
        x: view.getFloat32(offset + 4, true) * -1,
        y: view.getFloat32(offset + 8, true),
        z: view.getFloat32(offset + 12, true)
      },
      euler: {
        x: view.getFloat32(offset + 16, true) * -1,
        y: view.getFloat32(offset + 20, true),
        z: view.getFloat32(offset + 24, true)
      }
    }

    if (version === 3) {
      frame.steering = view.getFloat32(offset + 28, true)
      frame.isArmsUp = Boolean(view.getUint8(offset + 32))
      frame.isBraking = Boolean(view.getUint8(offset + 33))
    }

    frames.push(frame)
  }

  return {
    version,
    steamId,
    soapboxId,
    hatId,
    colorId,
    frameCount,
    frames
  }
}

const parseV4Ghost = (version: 4, view: DataView) => {
  const steamId = view.getBigUint64(4, true).toString()
  const soapboxId = view.getInt32(12, true)
  const hatId = view.getInt32(16, true)
  const colorId = view.getInt32(20, true)

  const framePrecision = view.getUint8(24)
  const frameCount = view.getInt32(25, true)
  const frames: GhostFrame[] = []

  const defaultEuler = {
    x: Number.NaN,
    y: Number.NaN,
    z: Number.NaN
  }

  let offset = 29
  let resetPosition = {
    x: 0,
    y: 0,
    z: 0
  }

  for (let index = 0; index < frameCount; index++) {
    const isResetFrame = index % framePrecision === 0

    const time = view.getFloat32(offset, true)

    if (isResetFrame) {
      const frame: GhostFrameV4 = {
        time,
        position: {
          x: view.getFloat32(offset + 4, true) * -1,
          y: view.getFloat32(offset + 8, true),
          z: view.getFloat32(offset + 12, true)
        },
        euler: defaultEuler,
        quaternion: {
          x: view.getInt16(offset + 16, true) / 30_000,
          y: (view.getInt16(offset + 18, true) / 30_000) * -1,
          z: (view.getInt16(offset + 20, true) / 30_000) * -1,
          w: view.getInt16(offset + 22, true) / 30_000
        },
        steering: view.getUint8(offset + 24),
        isArmsUp: !!(view.getUint8(offset + 25) & Flags.IsArmsUp),
        isBraking: !!(view.getUint8(offset + 25) & Flags.IsBraking)
      }

      frame.euler = quaternionToEuler(frame.quaternion)
      frames.push(frame)

      // Store reset position for delta position calculation
      resetPosition = frame.position
      offset += 26 // (4 * 4) + (2 * 4) + (1 * 2) bytes
    } else {
      const frame: GhostFrameV4 = {
        time,
        position: {
          x: (view.getInt16(offset, true) / 10_000) * -1,
          y: view.getInt16(offset + 2, true) / 10_000,
          z: view.getInt16(offset + 4, true) / 10_000
        },
        euler: defaultEuler,
        quaternion: {
          x: view.getInt16(offset + 6, true) / 30_000,
          y: (view.getInt16(offset + 8, true) / 30_000) * -1,
          z: (view.getInt16(offset + 10, true) / 30_000) * -1,
          w: view.getInt16(offset + 12, true) / 30_000
        },
        steering: view.getUint8(offset + 14),
        isArmsUp: !!(view.getUint8(offset + 15) & Flags.IsArmsUp),
        isBraking: !!(view.getUint8(offset + 15) & Flags.IsBraking)
      }

      frame.position.x = resetPosition.x += frame.position.x
      frame.position.y = resetPosition.y += frame.position.y
      frame.position.z = resetPosition.z += frame.position.z

      frame.euler = quaternionToEuler(frame.quaternion)
      frames.push(frame)

      offset += 20 // 4 + (2 * 7) + (1 * 2) bytes
    }
  }

  return {
    version,
    steamId,
    soapboxId,
    hatId,
    colorId,
    framePrecision,
    frameCount,
    frames
  }
}

/**
 * Parse an already downloaded Ghost from raw binary data into a Ghost object
 * @category Ghost
 * @example Parse a Ghost from binary data
 * import { getGhost, parseGhost } from '@zeepkist/gtr-api'
 *
 * const ghost = parseGhost(buffer)
 */
export const parseGhost = (buffer: ArrayBuffer): Ghost => {
  const view = new DataView(buffer)
  const version = view.getUint32(0, true)

  switch (version) {
    case 1: {
      return parseV1Ghost(version, view)
    }
    case 2:
    case 3: {
      return parseV2V3Ghost(version, view)
    }
    case 4: {
      return parseV4Ghost(version, view)
    }
    default: {
      throw new Error(`Ghost version ${version} is not supported`)
    }
  }
}
