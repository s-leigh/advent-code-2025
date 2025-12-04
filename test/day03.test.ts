import test, { describe } from "node:test"
import { day03Part01, day03Part02 } from "../src/day03"
import assert from "assert"
import fs from "fs"

const SAMPLE_INPUT = `987654321111111
811111111111119
234234234234278
818181911112111`

const input = fs.readFileSync("./input/day03Input").toString()

describe("Day 03", () => {
  test("Part 1 example", () => {
    const result = day03Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 357)
  })

  test("Part 1", () => {
    const result = day03Part01(input)
    assert.strictEqual(result, 17109)
  })

  test("Part 2 example", () => {
    const result = day03Part02(SAMPLE_INPUT)
    assert.strictEqual(result, 3121910778619)
  })

  test("Part 2 example 1", () => {
    const result = day03Part02("987654321111111")
    assert.strictEqual(result, 987654321111)
  })

  test("Part 2 example 2", () => {
    const result = day03Part02("811111111111119")
    assert.strictEqual(result, 811111111119)
  })

  test("Part 2 example 3", () => {
    const result = day03Part02("234234234234278")
    assert.strictEqual(result, 434234234278)
  })

  test("Part 2 example 4", () => {
    const result = day03Part02("818181911112111")
    assert.strictEqual(result, 888911112111)
  })

  test("Part 2", () => {
    const result = day03Part02(input)
    assert.strictEqual(result, 169347417057382)
  })
})
