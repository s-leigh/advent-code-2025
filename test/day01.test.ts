import test, { describe } from "node:test"
import { day01Part01 } from "../src/day01"
import assert from "assert"
import fs from "fs"

describe("Day 01", () => {
  test("Part 1 example", () => {
    const sampleInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`
    const result = day01Part01(sampleInput)
    assert.strictEqual(result, 3)
  })

  test("Part 1", () => {
    const input = fs.readFileSync("./input/day01Input").toString()
    const result = day01Part01(input)
    assert.strictEqual(result, 997)
  })

  test("Part 2 example", () => {
    // TODO
  })

  test("Part 2", () => {
    // TODO
  })
})