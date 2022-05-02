const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  let result = [];

  for (let i = 0; i < names.length; i++) {
    if (result.includes(names[i])) {
      if (!names[i].match(/\d/)) {
        if (result.includes(names[i] + "(1)")) {
          result.push(names[i] + "(2)");
          break;
        }
        result.push(names[i] + "(1)");
      } else if (names[i].match(/\d/)) {
        result.push(names[i] + "(1)");
      } else {
        let number = names[i].match(/\d/);
        let newNumber = Number(names[i].match(/\d/)) + 1;
        result.push(names[i].replace(number, newNumber));
      }
    } else {
      result.push(names[i]);
    }
  }
  return result;
}

//console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

module.exports = {
  renameFiles,
};
