import { Quaternion } from '../schemas/generic.js'

// https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles
export const quaternionToEuler = (q: Quaternion) => {
  // roll (x-axis rotation)
  const sinr_cosp = 2 * (q.w * q.x + q.y * q.z)
  const cosr_cosp = 1 - 2 * (q.x * q.x + q.y * q.y)
  const roll = Math.atan2(sinr_cosp, cosr_cosp)

  // pitch (y-axis rotation)
  const sinp = Math.sqrt(1 + 2 * (q.w * q.y - q.x * q.z))
  const cosp = Math.sqrt(1 - 2 * (q.w * q.y - q.x * q.z))
  const pitch = 2 * Math.atan2(sinp, cosp) - Math.PI / 2

  // yaw (z-axis rotation)
  const siny_cosp = 2 * (q.w * q.z + q.x * q.y)
  const cosy_cosp = 1 - 2 * (q.y * q.y + q.z * q.z)
  const yaw = Math.atan2(siny_cosp, cosy_cosp)

  return { x: roll, y: pitch, z: yaw }
}
