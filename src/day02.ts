export const day02Part01 = (input: string): number => {
  const isValid = (id: string): boolean => {
    if (id.length % 2 !== 0) return true
    return id.slice(0, id.length / 2) !== id.slice(id.length / 2)
  }

  const invalidIds = (start: number, end: number): number[] => {
    const allIds = range(start, end)
    return allIds.filter(id => !isValid(id.toString()))
  }

  const ranges = input.split(",")
  const pairs = ranges.map(rangeStr => rangeStr.split("-").map(Number))
  const invalid: number[] = pairs.flatMap(([start, end]) => invalidIds(start, end))
  return invalid.reduce((a, b) => a + b)
}

export const day02Part02 = (input: string): number => {
  const allPartsEqual = (str: string, parts: number): boolean => {
    const partLength = str.length / parts
    for (let i = 1; i < parts; i++) {
      for (let j = 0; j < partLength; j++) {
        if (str[j] !== str[i * partLength + j]) return false
      }
    }
    return true
  }

  const isValid = (id: string): boolean => {
    for (let divisor = 2; divisor <= id.length; divisor++) {
      if (id.length % divisor !== 0) continue // only integer divisors
      if (allPartsEqual(id, divisor)) return false
    }
    return true
  }

  const invalidIds = (start: number, end: number): number[] => {
    const allIds = range(start, end)
    return allIds.filter(id => !isValid(id.toString()))
  }

  const ranges = input.split(",")
  const pairs = ranges.map(rangeStr => rangeStr.split("-").map(Number))
  const invalid: number[] = pairs.flatMap(([start, end]) => invalidIds(start, end))
  return invalid.reduce((a, b) => a + b)
}

const range = (start: number, end: number): number[] => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
