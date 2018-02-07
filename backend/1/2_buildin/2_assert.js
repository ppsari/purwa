const assert = require('assert')

let minum = {
  kopi: ['hitam', 'susu', 'jelly', 'luwak']
}

assert.equal(minum.kopi.length, 4) // ==
assert.strictEqual(minum.kopi.length, "4") // ===
assert.notEqual(minum.kopi.length, 3) // !=
assert.notStrictEqual(minum.kopi.length, 3) // !==