declare global {
  interface Array<T> {
    filterNotEmpty(): Array<T>
    last(): T
    max(): number
    min(): number
    product(): number
    removeDuplicates(): Array<T>
    sorted(compareFn: (a: T, b: T) => number): Array<T>
    sum(): number
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Map<K, V> {
    setOrAdd(key: K, value: unknown): void
  }
}

Array.prototype.filterNotEmpty = function () { return this.filter(s => s !== "") }
Array.prototype.last = function () { return this[this.length - 1] }
Array.prototype.max = function () { return this.reduce((a, b) => b < a ? a : b) }
Array.prototype.min = function () { return this.reduce((a, b) => b < a ? b : a) }
Array.prototype.product = function () { return this.reduce((a, b) => a * b, 1) }
Array.prototype.removeDuplicates = function () { return this.reduce((acc, curr) => !acc.includes(curr) ? acc.concat([curr]) : acc, []) }
Array.prototype.sorted = function <T>(compareFn: (a: T, b: T) => number) {
  const clone = [...this]
  clone.sort(compareFn)
  return clone
}
Array.prototype.sum = function () { return this.reduce((a, b) => a + b) }

export const splitInputIntoLines = (input: string) => input.split("\n")
