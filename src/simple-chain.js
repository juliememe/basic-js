const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {this.chain.push(`( )`);}
    else {this.chain.push(`( ${value} )`);}
    return this;
  },
  removeLink(position) {
    if (parseInt(position) !== position || position <= 0 || position > this.chain.length) {
      this.chain =[];
      throw Error;
    }
    this.chain.splice(position - 1 , 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainString = this.chain.reduce((res, item, index) => {
      return res + item + ((index !== this.chain.length-1) ? '~~' : '');
    }, '')
    this.chain =[];
    return chainString;
  }
};

module.exports = chainMaker;
