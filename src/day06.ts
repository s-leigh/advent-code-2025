import { splitInputIntoLines } from "./common"


export const day06Part01 = (input: string): number => {
  const data = parseInput(input)
  return data.numbers.map((numbers, i) => applyOperation({ numbers, operation: data.operations[i] })).reduce((a, b) => a + b, 0)
}

export const day06Part02 = (input: string): number => {
  return -1
}

const parseInput = (input: string): { numbers: number[][], operations: string[] } => {
  const lines = splitInputIntoLines(input)
  const numbers = lines.map(l => l.split(" ").map(e => parseInt(e.trim())).filter(n => !isNaN(n)))
    .reduce<number[][]>((cols, row) => {
      row.forEach((value, i) => {
        (cols[i] ??= []).push(value);
      });
      return cols;
    }, []);
  const operations = lines[lines.length - 1].split(" ").filter(op => op !== " " && op !== "")
  return { numbers, operations }
}

const applyOperation = ({ numbers, operation }: { numbers: number[], operation: string }): number => {
  if (operation === "+") return numbers.reduce((a, b) => a + b, 0)
  if (operation === "*") return numbers.reduce((a, b) => a * b, 1)
  throw new Error(`Unknown operation: ${operation}`)
}
