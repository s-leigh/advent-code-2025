import { splitInputIntoLines } from "./common"


export const day06Part01 = (input: string): number => {
  const parseInput = (input: string): { numbers: number[][], operations: string[] } => {
    const lines = splitInputIntoLines(input)
    const numbers = lines.map(l => l.split(" ").map(e => parseInt(e.trim())).filter(n => !isNaN(n)))
      .reduce<number[][]>((cols, row) => {
        row.forEach((value, i) => {
          (cols[i] ??= []).push(value)
        })
        return cols
      }, [])
    const operations = parseOperations(lines[lines.length - 1])
    return { numbers, operations }
  }

  const data = parseInput(input)
  return data.numbers.map((numbers, i) => applyOperation({ numbers, operation: data.operations[i] })).sum()
}

export const day06Part02 = (input: string): number => {
  const parseInput = (input: string): { numbers: number[][], operations: string[] } => {
    const lines = splitInputIntoLines(input)
    const numberLines = lines.slice(0, -1)
    const digits: string[][] = []
    for (let i = numberLines[0].length - 1; i >= 0; i--) {
      const d: string[] = []
      numberLines.forEach(line => d.push(line[i]))
      digits[i] = d
    }
    const combinedDigits = digits.reduce((acc: number[], curr: string[]) => {
      const numStr = curr.join("").trim()
      return [...acc, parseInt(numStr)]
    }, [])
    const numbers = groupedDigits(combinedDigits)
    const operations = parseOperations(lines[lines.length - 1])
    return { numbers, operations }
  }
  const data = parseInput(input)
  return data.numbers.map((numbers, i) => applyOperation({ numbers, operation: data.operations[i] })).sum()
}

const parseOperations = (line: string) => line.split(" ").filter(op => op !== " " && op !== "")

const applyOperation = ({ numbers, operation }: { numbers: number[], operation: string }): number => {
  if (operation === "+") return numbers.sum()
  if (operation === "*") return numbers.product()
  throw new Error(`Unknown operation: ${operation}`)
}

const groupedDigits = (nums: number[], running: number[][] = [], i: number = 0): number[][] => {
  if (nums.length === 0) return running
  if (Number.isNaN(nums[0])) return groupedDigits(nums.slice(1), running, i + 1)
  ; (running[i] ??= []).push(nums[0])
  return groupedDigits(nums.slice(1), running, i)
}
