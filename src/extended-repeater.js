const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (!!options.addition || options.addition == false) {
    options.addition.toString();
  }

  if (!options.separator) {
    options.separator = "+";
  }

  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  const additionRepeat = (
    addition,
    additionRepeatTimes = 1,
    additionSeparator
  ) => {
    if (!addition && addition != false) {
      return "";
    }
    let resultAdditionRepeat = "";
    for (let i = 1; i <= additionRepeatTimes; ) {
      resultAdditionRepeat += `${addition}`;
      i++;
      if (i <= additionRepeatTimes) {
        resultAdditionRepeat += `${additionSeparator}`;
      }
    }
    return resultAdditionRepeat;
  };

  let result = "";
  for (let i = 1; i <= options.repeatTimes; ) {
    result += `${str}${additionRepeat(
      options.addition,
      options.additionRepeatTimes,
      options.additionSeparator
    )}`;
    i++;
    if (i <= options.repeatTimes) {
      result += `${options.separator}`;
    }
  }

  return result;
}

/*console.log(
  repeater(null, {
    repeatTimes: 3,
    separator: "??? ",
    addition: null,
    additionRepeatTimes: 3,
    additionSeparator: "!!!",
  })
);*/

module.exports = {
  repeater,
};
