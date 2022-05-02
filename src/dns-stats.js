const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsRevers = [];
  let result = {};

  for (let i = 0; i < domains.length; i++) {
    domainsRevers.push(domains[i].split(".").reverse());
  }

  for (let i = 0; i < domainsRevers.length; i++) {
    let domainPiece = "";
    for (let j = 0; j < domainsRevers[i].length; j++) {
      domainPiece += `.${domainsRevers[i][j]}`;

      result[domainPiece] = result[domainPiece] ? result[domainPiece] + 1 : 1;
    }
  }
  return result;
}

//console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));

module.exports = {
  getDNSStats,
};
