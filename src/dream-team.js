const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(team) {
  if (!team) {
    return false;
  }

  let teamStr = [];
  for (let i = 0; i < team.length; i++) {
    if (typeof team[i] == "string") {
      teamStr.push(team[i].replace(/ /gi, "").toUpperCase().charAt(0));
    }
  }

  if (teamStr.length == 0) {
    return false;
  }

  teamStr.sort();
  return teamStr.join("");
}

/*let team = undefined;
console.log(createDreamTeam(team));*/

module.exports = {
  createDreamTeam,
};
