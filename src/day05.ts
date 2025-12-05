

export const day05Part01 = (input: string): number => {
  const { ranges, ingredients } = parseInput(input)
  return ingredients.filter(ingredient => ranges.some(range => isingredientInRange(ingredient, range))).length
}

export const day05Part02 = (input: string): number => {
  const { ranges } = parseInput(input)
  const simplifiedRanges = nonOverlappingRanges(ranges)
  const allRanges = simplifiedRanges.map(range => range.end - range.start).reduce((a, b) => a + b) + simplifiedRanges.length
  return allRanges
}

const parseInput = (input: string) => {
  const [rangesPart, ingredientsPart] = input.split("\n\n")
  const ranges = rangesPart.split("\n").map(line => {
    const [start, end] = line.split("-").map(Number)
    return { start, end }
  })
  const ingredients = ingredientsPart.split("\n").map(Number)
  return { ranges, ingredients }
}

const isingredientInRange = (ingredient: number, range: { start: number; end: number }): boolean => {
  return ingredient >= range.start && ingredient <= range.end
}

const nonOverlappingRanges = (ranges: { start: number; end: number }[]): { start: number; end: number }[] => {
  const sortedRanges = ranges.sort((a, b) => a.start - b.start)
  const simplified: { start: number; end: number }[] = []
  let currentRange = sortedRanges[0]
  for (let i = 1; i < sortedRanges.length; i++) {
    const range = sortedRanges[i]
    if (range.start <= currentRange.end) {
      currentRange.end = Math.max(currentRange.end, range.end)
    } else {
      simplified.push(currentRange)
      currentRange = range
    }
  }
  simplified.push(currentRange)
  return simplified
}
