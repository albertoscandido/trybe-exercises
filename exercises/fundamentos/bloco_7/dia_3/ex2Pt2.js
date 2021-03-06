// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
const wordLengths = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i].length);
  }
  return result;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);