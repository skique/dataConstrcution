const MinHeap = require('./MinHeap')
const { defaultCompare, reverseCompare } = require('../util')

class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn); // {1}
  }
}

module.exports = MaxHeap