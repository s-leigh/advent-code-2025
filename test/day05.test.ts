import test, { describe } from "node:test"
import { day05Part01, day05Part02 } from "../src/day05"
import assert from "assert"
import fs from "fs"

const SAMPLE_INPUT = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

const input = fs.readFileSync("./input/day05Input").toString()

describe("Day 05", () => {
  test("Part 1 example", () => {
    const result = day05Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 3)
  })

  test("Part 1", () => {
    const result = day05Part01(input)
    assert.strictEqual(result, 563)
  })

  test("Part 2 example", () => {
    const result = day05Part02(SAMPLE_INPUT)
    assert.strictEqual(result, 14)
  })

  test("Part 2", () => {
    const result = day05Part02(input)
    assert.strictEqual(result, 338693411431456)
  })
})
