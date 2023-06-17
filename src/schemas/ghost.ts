import { Position, Quaternion } from './generic.js'

export interface Ghost {
  version: 1 | 2 | 3 | 4
  steamId?: string
  soapboxId?: number
  hatId?: number
  colorId?: number
  framePrecision?: number
  frameCount: number
  frames: GhostFrame[]
}

export interface GhostFrame {
  time: number
  position: Position
  euler: Position
  quaternion?: Quaternion
  steering?: number
  isArmsUp?: boolean
  isBraking?: boolean
}

export interface GhostFrameV4 extends GhostFrame {
  quaternion: Quaternion
  steering: number
  isArmsUp: boolean
  isBraking: boolean
}
