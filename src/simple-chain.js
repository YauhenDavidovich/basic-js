const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain = []
      throw new Error()
    }
    if (position > this.getLength() || position < 1) {
      this.chain = []
      throw new Error()
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultltChain = this.chain
    this.chain = []
    return resultltChain.join('~~')
  }
};

module.exports = chainMaker;
