const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength: function () {
    return this.arr.length;
  },
  addLink: function (value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink: function (position) {
    if (!this.arr[position - 1]) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain: function () {
    this.arr.reverse();
    return this;
  },
  finishChain: function () {
    let chain = this.arr.join("~~");
    this.arr = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
