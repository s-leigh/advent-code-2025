import { splitInputIntoLines } from "./common"

export const day02Part01 = (input: string): number => {
    const a = splitInputIntoLines(input)
    const ranges = input.split(",")
    const pairs = ranges.map(rangeStr => rangeStr.split("-").map(Number))
    const invalid: number[] = pairs.map(([start, end]) => invalidIds(start, end)).flat()
    return invalid.sum()
}

export const day02Part02 = (input: string): number => {
    
    return -1
}

const invalidIds = (start: number, end: number): number[] => {
    const allIds = range(start, end)
    return allIds.filter(id => !isValid(id.toString()))
}

const isValid = (id: string): boolean => {
    if (id.length % 2 !== 0) return true
    return id.slice(0, id.length / 2) !== id.slice(id.length / 2)
}

const range = (start: number, end: number): number[] => {
    const result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}
