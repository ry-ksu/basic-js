const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n
    .toString()
    .split("")
    .map((i) => Number(i));

  while (result.length > 1) {
    result = result
      .reduce((sum, elem) => { return sum + elem; }, 0)
      .toString()
      .split("")
      .map((i) => Number(i));
  }
  return result[0];
}

//console.log(getSumOfDigits(123));

module.exports = {
  getSumOfDigits,
};
