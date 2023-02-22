/**
 * Stringify all values of an object
 * @param object
 * @returns The object with all values stringified
 * @private
 * @category Utilities
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stringifyObjectValues = (object?: Record<string, any>) => {
  if (object === null || object === undefined) return {}

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key, value?.toString()])
  )
}