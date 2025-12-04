import test, { describe } from "node:test"
import { day04Part01, day04Part02 } from "../src/day04"
import assert from "assert"
import fs from "fs"

const SAMPLE_INPUT = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`

const input = fs.readFileSync("./input/day04Input").toString()

describe("Day 04", () => {
  test("Part 1 example", () => {
    const result = day04Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 13)
  })

  test("Part 1", () => {
    const result = day04Part01(input)
    assert.strictEqual(result, 1464)
  })

  test("Part 2 example", () => {
    const result = day04Part02(SAMPLE_INPUT)
    assert.strictEqual(result, 43)
  })

  test("Part 2", () => {
    const result = day04Part02(input)
    assert.strictEqual(result, 8409)
  })
})
