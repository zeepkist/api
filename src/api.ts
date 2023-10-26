import ky from 'ky'

export enum API {
  GTR = 'https://api.zeepkist-gtr.com/',
  ZWORPSHOP = 'https://api.zworpshop.com/'
}

export const gtr: typeof ky = ky.create({
  prefixUrl: API.GTR
})

export const zworpshop: typeof ky = ky.create({
  prefixUrl: API.ZWORPSHOP
})
