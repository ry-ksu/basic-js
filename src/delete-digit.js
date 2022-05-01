const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrN = n.toString().split("");
  let arrChange = arrN.slice();
  let result = 0;
  for (let i = 0; i < arrN.length; i++) {
    arrChange.splice(i, 1);
    if (Number(arrChange.join("")) > result) {
      result = Number(arrChange.join(""));
    }

    arrChange = arrN.slice();
  }
  return result;
}

//console.log(deleteDigit(458));

module.exports = {
  deleteDigit,
};
