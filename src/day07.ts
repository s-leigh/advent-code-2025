import { splitInputIntoLines } from "./common"


export const day07Part01 = (input: string): number => {
  const diagram = splitInputIntoLines(input).map(line => line.split(""))
  return findSplits(diagram)
}

export const day07Part02 = (input: string): number => {
  return -1
}

const findSplits = (remaining: string[][], previousLine: string[] = [], splits: number = 0): number => {
  if (remaining.length === 0) return splits
  const thisLine = remaining[0]
  if (previousLine.length === 0) {
    const replacedS = thisLine.join("").replace("S", "|").split("")
    return findSplits(remaining.slice(1), replacedS, splits)
  }
  let newSplits = 0
  const newLine = thisLine.map((char, i, arr) => {
    if (arr[i + 1] === "^" && previousLine[i + 1] === "|") {
      newSplits++
      return "|"
    }
    if (arr[i - 1] === "^" && previousLine[i - 1] === "|") return "|" // only count split once
    if (arr[i] === "." && previousLine[i] === "|") return "|"
    return char
  })
  return findSplits(remaining.slice(1), newLine, splits + newSplits)
}