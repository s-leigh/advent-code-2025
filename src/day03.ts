import { splitInputIntoLines } from "./common"

export const day03Part01 = (input: string): number =>
  splitInputIntoLines(input).map(b => findHighestTwoDigitNumber(b)).sum()

export const day03Part02 = (input: string): number => {
  const banks = splitInputIntoLines(input).map(b => b.split("").map(Number))
  const res = banks.map(b => findHighestTwelveDigitNumber(b))
  return res.sum()
}

const findHighestTwoDigitNumber = (bank: string): number => {
  const numbers = bank.split("").map(Number)
  const firstNumIndex = numbers.slice(0, numbers.length - 1).reduce((acc: number, curr, i, arr) =>
    (curr > arr[acc]) ? i : acc, 0)
  const secondNum = numbers.slice(firstNumIndex + 1, numbers.length).reduce((acc: number, curr) =>
    (curr > acc) ? curr : acc, -1)
  return (numbers[firstNumIndex] * 10) + secondNum
}

const findHighestTwelveDigitNumber = (bank: number[], running: string = ""): number => {
  if (running.length === 12) return parseInt(running)

  const bankSlice = bank.slice(0, bank.length - (11 - running.length))
  const [num, i] = bankSlice.reduce((acc: number[], curr, i) => {
    if (curr > acc[0]) return [curr, i]
    return acc
  }, [-1, -1])

  return findHighestTwelveDigitNumber(bank.slice(i + 1), running + num)
}
