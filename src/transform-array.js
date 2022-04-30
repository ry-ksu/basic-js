const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--double-next") {
      if (arr[i + 1]) {
        arr[i] = arr[i + 1];
      } else {
        arr.splice(i, 1);
      }
      console.log(arr);
    } else if (arr[i] == "--double-prev") {
      if (arr[i - 1]) {
        arr[i] = arr[i - 1];
      } else {
        arr.splice(i, 1);
      }
    } else if (arr[i] == "--discard-next") {
      if (arr[i + 1]) {
        arr.splice(i + 1, 1);
        arr.splice(i, 1);
      } else {
        arr.splice(i, 1);
      }
    } else if (arr[i] == "--discard-prev") {
      if (arr[i - 1]) {
        arr.splice(i - 1, 1);
        arr.splice(i - 1, 1);
      } else {
        arr.splice(i, 1);
      }
      console.log(arr);
    }
  }

  while (arr.indexOf("--double-prev") > -1) {
    arr.splice(arr.indexOf("--double-prev"), 1);
  }
  while (arr.indexOf("--discard-prev") > -1) {
    arr.splice(arr.indexOf("--discard-prev"), 1);
  }
  while (arr.indexOf("--discard-next") > -1) {
    arr.splice(arr.indexOf("--discard-next"), 1);
  }
  while (arr.indexOf("--double-next") > -1) {
    arr.splice(arr.indexOf("--double-next"), 1);
  }

  return arr;
}

/*console.log(
  transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5])
);*/

module.exports = {
  transform,
};
