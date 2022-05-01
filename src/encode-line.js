const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = "";
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == strArr[i + 1]) {
      count++;
    } else if (count == 1) {
      result += strArr[i];
    } else {
      result += count + strArr[i];
      count = 1;
    }
  }
  return result;
}

//console.log(encodeLine("aabbbc"));

module.exports = {
  encodeLine,
};
