import { splitInputIntoLines } from "./common"

export const day02Part01 = (input: string): number => {
    const isValid = (id: string): boolean => {
        if (id.length % 2 !== 0) return true
        return id.slice(0, id.length / 2) !== id.slice(id.length / 2)
    }

    const invalidIds = (start: number, end: number): number[] => {
        const allIds = range(start, end)
        return allIds.filter(id => !isValid(id.toString()))
    }

    const a = splitInputIntoLines(input)
    const ranges = input.split(",")
    const pairs = ranges.map(rangeStr => rangeStr.split("-").map(Number))
    const invalid: number[] = pairs.map(([start, end]) => invalidIds(start, end)).flat()
    return invalid.sum()
}

export const day02Part02 = (input: string): number => {
    const uniqueParts = (str: string, parts: number): Set<string> => {
        const partLength = str.length / parts
        const result = new Set<string>()
        for (let i = 0; i < parts; i++) {
            result.add(str.substring(i * partLength, (i + 1) * partLength))
        }
        return result
    }

    const isValid = (id: string, splitDivisor: number = 2): boolean => {
        if (splitDivisor > id.length) return true
        if ((id.length / splitDivisor) % 1 !== 0) return isValid(id, splitDivisor + 1) // only divide by integers
        const parts = uniqueParts(id, splitDivisor)
        if (parts.size === 1) return false
        return isValid(id, splitDivisor + 1)
    }

    const invalidIds = (start: number, end: number): number[] => {
        const allIds = range(start, end)
        return allIds.filter(id => !isValid(id.toString()))
    }

    const ranges = input.split(",")
    const pairs = ranges.map(rangeStr => rangeStr.split("-").map(Number))
    const invalid: number[] = pairs.map(([start, end]) => invalidIds(start, end)).flat()
    return invalid.sum()
}

const range = (start: number, end: number): number[] => {
    const result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}
