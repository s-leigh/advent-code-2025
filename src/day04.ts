import { splitInputIntoLines } from "./common"

export const day04Part01 = (input: string): number => {
  const matrix = splitInputIntoLines(input).map(line => line.split(""))
  let accessibleRolls = 0
  matrix.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === "@") {
        if (isAccessible(matrix, rowIndex, colIndex)) {
          accessibleRolls++
        }
      }
    })
  })
  return accessibleRolls
}

export const day04Part02 = (input: string): number => {
  const matrix = splitInputIntoLines(input).map(line => line.split(""))
  let accessibleRolls = 0
  let changed = true
  while (changed) {
    const removedCoords: number[][] = []
    matrix.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === "@") {
          if (isAccessible(matrix, rowIndex, colIndex)) {
            removedCoords.push([rowIndex, colIndex])
          }
        }
      })
    })
    removedCoords.forEach(([r, c]) => matrix[r][c] = ".")
    accessibleRolls += removedCoords.length
    if (removedCoords.length === 0) changed = false
  }
  return accessibleRolls
}

const isAccessible = (matrix: string[][], row: number, col: number): boolean => {
  const upRow = matrix[row - 1]
  const downRow = matrix[row + 1]
  const left = matrix[row][col - 1]
  const right = matrix[row][col + 1]
  const boundLeft = col - 1 < 0 ? 0 : col - 1
  const boundRight = col + 2 > matrix[0].length ? matrix[0].length : col + 2
  const neighbours = [upRow?.slice(boundLeft, boundRight), [left, right], downRow?.slice(boundLeft, boundRight)].flat()
  return neighbours.filter(c => c === "@").length < 4
}
