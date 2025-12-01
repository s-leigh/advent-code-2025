import { splitInputIntoLines } from "./common"

const STARTING_NUMBER = 50

export const day01Part01 = (input: string): number => {
  const instructions = splitInputIntoLines(input)
  const parsedNumbers = instructions.map(i => [i[0], i.slice(1, i.length)])
    .map(([c, n]) => c === "L" ? parseInt(n) * -1 : parseInt(n))
  let numZeros = 0
  parsedNumbers.reduce((acc, curr) => {
    const newNumber = wrap100(acc + curr)
    if (newNumber === 0) numZeros++
    return newNumber
  }, STARTING_NUMBER)
  return numZeros
}

const wrap100 = (n: number): number => ((n % 100) + 100) % 100