const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(dateIn) {
  if (!dateIn) {
    return "Unable to determine the time of year!";
  }

  if (!(dateIn instanceof Date) || dateIn.hasOwnProperty("toString")) {
    throw new Error("Invalid date!");
  }

  let seasons = ["spring", "summer", "autumn", "winter"];

  if (dateIn.getMonth() <= 1) {
    return seasons[3];
  } else if (dateIn.getMonth() <= 4) {
    return seasons[0];
  } else if (dateIn.getMonth() <= 7) {
    return seasons[1];
  } else if (dateIn.getMonth() <= 10) {
    return seasons[2];
  } else {
    return seasons[3];
  }
}

//console.log(getSeason(Date.prototype.toString.call(new Date())));
//console.log(new Date(20192701).toString());

module.exports = {
  getSeason,
};
