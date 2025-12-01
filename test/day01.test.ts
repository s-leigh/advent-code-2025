import test, { describe } from "node:test"
import { day01Part01, day01Part02 } from "../src/day01"
import assert from "assert"
import fs from "fs"

const SAMPLE_INPUT = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`

const input = fs.readFileSync("./input/day01Input").toString()

describe("Day 01", () => {
  test("Part 1 example", () => {
    const result = day01Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 3)
  })

  test("Part 1", () => {
    const result = day01Part01(input)
    assert.strictEqual(result, 997)
  })

  test("Part 2 example", () => {
    const result = day01Part02(SAMPLE_INPUT)
    assert.strictEqual(result, 6)
  })

  test("Part 2", () => {
    const result = day01Part02(input)
    assert.strictEqual(result, 5978)
  })
})