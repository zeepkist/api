export const stringifyObjectValues = (obj: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, value.toString()])
  )
}
