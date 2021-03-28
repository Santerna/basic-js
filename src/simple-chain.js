const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainNow: [],

  getLength() {
    return this.chainNow.length;
  },
  addLink(value) {
    this.chainNow.push( `( ${value} )` );
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && (position ^ 0) === position){
      if (position < 1 || position > this.getLength()){
        this.chainNow.length = 0;
        throw new Error ('Can not remove out of range position');
      }
      const index = position - 1;
      this.chainNow.splice(index, 1);
      return this;
    }
    this.chainNow.length = 0;
    throw new Error('Not an integer')
  },
  reverseChain() {
    this.chainNow.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chainNow.join('~~');
    this.chainNow.length = 0;
    return chain;
  }
};

module.exports = chainMaker;
