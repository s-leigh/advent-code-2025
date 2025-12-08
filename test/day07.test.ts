import test, { describe } from "node:test"
import { day07Part01, day07Part02 } from "../src/day07"
import assert from "assert"
import fs from "fs"

const SAMPLE_INPUT = `.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`

const input = fs.readFileSync("./input/day07Input").toString()

describe("Day 07", () => {
  test("Part 1 example", () => {
    const result = day07Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 21)
  })

  test("Part 1", () => {
    const result = day07Part01(input)
    assert.strictEqual(result, 1613)
  })

  // test("Part 2 example", () => {
  //   const result = day07Part02(SAMPLE_INPUT)
  //   assert.strictEqual(result, 3263827)
  // })

  // test("Part 2", () => {
  //   const result = day07Part02(input)
  //   assert.strictEqual(result, 9640741878593)
  // })
})
