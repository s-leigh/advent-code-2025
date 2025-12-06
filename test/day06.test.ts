import test, { describe } from "node:test"
import { day06Part01, day06Part02 } from "../src/day06"
import assert from "assert"
import fs from "fs"

const SAMPLE_INPUT = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

const input = fs.readFileSync("./input/day06Input").toString()

describe("Day 06", () => {
  test("Part 1 example", () => {
    const result = day06Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 4277556)
  })

  test("Part 1", () => {
    const result = day06Part01(input)
    assert.strictEqual(result, 6503327062445)
  })

  // test("Part 2 example", () => {
  //   const result = day06Part02(SAMPLE_INPUT)
  //   assert.strictEqual(result, 14)
  // })

  // test("Part 2", () => {
  //   const result = day06Part02(input)
  //   assert.strictEqual(result, 338693411431456)
  // })
})
