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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-next") {
      newArr[i + 1] ? newArr.splice(i, 2) : newArr.splice(i, 1);
      if (typeof newArr[i] === "string" && newArr[i].includes("prev")) {
        newArr.splice(i, 1);
        break;
      }
    }
    if (newArr[i] === "--discard-prev") {
      newArr[i - 1] ? newArr.splice(i - 1, 2) : newArr.splice(i, 1);
    }
    if (newArr[i] === "--double-next") {
      newArr[i + 1] ? newArr.splice(i, 1, newArr[i + 1]) : newArr.splice(i, 1);
    }
    if (newArr[i] === "--double-prev") {
      newArr[i - 1] ? newArr.splice(i, 1, newArr[i - 1]) : newArr.splice(i, 1);
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
