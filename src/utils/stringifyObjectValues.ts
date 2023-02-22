// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stringifyObjectValues = (object: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key, value?.toString()])
  )
}
