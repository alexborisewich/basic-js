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
  let arrOfDomains = [];
  let domainsEntries = {};
  for (let domain of domains) arrOfDomains.push(domain.split(".").reverse());
  for (let domain of arrOfDomains) {
    let strOfDomain = "";
    for (let i = 0; i < domain.length; i++) {
      strOfDomain += "." + domain[i];
      !domainsEntries[strOfDomain]
        ? (domainsEntries[strOfDomain] = 1)
        : domainsEntries[strOfDomain]++;
    }
  }
  return domainsEntries;
}

module.exports = {
  getDNSStats,
};
