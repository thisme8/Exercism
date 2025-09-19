export function find(haystack: unknown, needle: unknown): number {
  if (!Array.isArray(haystack)) {
    throw new Error('Haystack must be an array')
  }
  if (typeof needle !== 'number') {
    throw new Error('Needle must be a number')
  }

  const arr = haystack as number[]
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const midValue = arr[mid]

    if (midValue === needle) return mid

    if (midValue < needle) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  throw new Error('Value not in array')
}

