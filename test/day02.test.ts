import test, { describe } from "node:test"
import { day02Part01, day02Part02 } from "../src/day02"
import assert from "assert"
import fs from "fs"

const SAMPLE_INPUT = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`

const input = fs.readFileSync("./input/day02Input").toString()

describe("Day 02", () => {
  test("Part 1 example", () => {
    const result = day02Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 1227775554)
  })

  test("Part 1", () => {
    const result = day02Part01(input)
    assert.strictEqual(result, 40398804950)
  })

//   test("Part 2 example", () => {
//     const result = day02Part02(SAMPLE_INPUT)
//     assert.strictEqual(result, 6)
//   })

//   test("Part 2", () => {
//     const result = day02Part02(input)
//     assert.strictEqual(result, 5978)
//   })
})