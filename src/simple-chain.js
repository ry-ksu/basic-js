const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === null) {
      value = "null";
    }
    this.chain.push(value);
    return chainMaker;
  },

  removeLink(position) {
    if (
      typeof position != "number" ||
      position % 1 != 0 ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return chainMaker;
  },

  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },

  finishChain() {
    let result = "";
    for (let i = 0; i < this.chain.length; ) {
      let elem = `( ${this.chain[i]} )`;
      i++;
      if (i < this.chain.length) {
        elem += "~~";
      }
      result += elem;
    }
    this.chain = [];
    return result;
  },
};

//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));

module.exports = {
  chainMaker,
};
