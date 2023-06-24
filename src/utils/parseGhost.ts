import { Ghost, GhostFrame, GhostFrameV4, quaternionToEuler } from '../index.js'

enum Flags {
  IsArmsUp = Math.trunc(1),
  IsBraking = 1 << 1
}

const parseV1Ghost = (version: 1, view: DataView) => {
  const frameCount = view.getUint32(4, true)
  const frames: GhostFrame[] = []

  let offset = 8
  for (let index = 0; index < frameCount; index++) {
    const frame: GhostFrame = {
      time: view.getFloat32(offset, true),
      position: {
        x: view.getFloat32(offset + 4, true),
        y: view.getFloat32(offset + 8, true),
        z: view.getFloat32(offset + 12, true)
      },
      euler: {
        x: view.getFloat32(offset + 16, true),
        y: view.getFloat32(offset + 20, true),
        z: view.getFloat32(offset + 24, true)
      }
    }
    frames.push(frame)
    offset += 28
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

  for (let index = 0; index < frameCount; index++) {
    const offset = 28 + index * frameSize

    const frame: GhostFrame = {
      time: view.getFloat32(offset, true),
      position: {
        x: view.getFloat32(offset + 4, true),
        y: view.getFloat32(offset + 8, true),
        z: view.getFloat32(offset + 12, true)
      },
      euler: {
        x: view.getFloat32(offset + 16, true),
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

  let offset = 0

  const resetPosition = {
    x: 0,
    y: 0,
    z: 0
  }

  const deltaPositions = {
    x: 0,
    y: 0,
    z: 0
  }

  const defaultEuler = {
    x: Number.NaN,
    y: Number.NaN,
    z: Number.NaN
  }

  for (let index = 0; index < frameCount; index++) {
    const isResetFrame = index % framePrecision === 0

    const time = view.getFloat32(offset + 29, true)

    if (isResetFrame) {
      const frame: GhostFrameV4 = {
        time,
        position: {
          x: view.getFloat32(offset + 33, true),
          y: view.getFloat32(offset + 37, true),
          z: view.getFloat32(offset + 41, true)
        },
        euler: defaultEuler,
        quaternion: {
          x: view.getInt16(offset + 45, true) / 30_000,
          y: view.getInt16(offset + 47, true) / 30_000,
          z: view.getInt16(offset + 49, true) / 30_000,
          w: view.getInt16(offset + 51, true) / 30_000
        },
        steering: view.getUint8(offset + 53),
        isArmsUp: view.getUint8(offset + 54) == Flags.IsArmsUp,
        isBraking: view.getUint8(offset + 54) == Flags.IsBraking
      }

      frame.euler = quaternionToEuler(frame.quaternion)

      // Store reset position for delta position calculation
      resetPosition.x = frame.position.x
      resetPosition.y = frame.position.y
      resetPosition.z = frame.position.z

      // Reset aggregated delta positions from previous reset frame
      deltaPositions.x = 0
      deltaPositions.y = 0
      deltaPositions.z = 0

      offset += 55 - 29

      frames.push(frame)
    } else {
      const frame: GhostFrameV4 = {
        time,
        position: {
          x: view.getInt16(offset + 33, true) / 10_000,
          y: view.getInt16(offset + 35, true) / 10_000,
          z: view.getInt16(offset + 37, true) / 10_000
        },
        euler: defaultEuler,
        quaternion: {
          x: view.getInt16(offset + 39, true) / 30_000,
          y: view.getInt16(offset + 41, true) / 30_000,
          z: view.getInt16(offset + 43, true) / 30_000,
          w: view.getInt16(offset + 45, true) / 30_000
        },
        steering: view.getUint8(offset + 47),
        isArmsUp: view.getUint8(offset + 48) == Flags.IsArmsUp,
        isBraking: view.getUint8(offset + 48) == Flags.IsBraking
      }

      frame.euler = quaternionToEuler(frame.quaternion)

      // Aggregate the delta positions for the current reset frame
      deltaPositions.x += frame.position.x
      deltaPositions.y += frame.position.y
      deltaPositions.z += frame.position.z

      // Apply the delta positions to the current frame
      frame.position.x += resetPosition.x + deltaPositions.x
      frame.position.y += resetPosition.y + deltaPositions.y
      frame.position.z += resetPosition.z + deltaPositions.z

      offset += 49 - 29

      frames.push(frame)
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
