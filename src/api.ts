import ky from 'ky-universal'

const API_URL = 'https://api.zeepkist-gtr.com/'

export const api: typeof ky = ky.create({
  prefixUrl: API_URL
})
