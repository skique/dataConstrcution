const { Compare, defaultCompare, swap } = require('../util')

class MinHeap {
  // compareFn: Function
  // heap: Array<number>
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn; // {1}
    this.heap = [2,3,4,5]; // {2}
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index -1) / 2);
  }
  insert(value) {
    if (value !== null) {
      this.heap.push(value); // {1}
      this.siftUp(this.heap.length -1); // {2}
      return true;
    }
    return false;
  }
  siftUp(index) {
    let parent = this.getParentIndex(index); // {1}
    while (
        index > 0 &&
        this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
      ) { // {2}
      swap(this.heap, parent, index); // {3}
      // 更新插入的值的index
      index = parent;
      // 更新插入的值的父节点，下一次循环会用到
      parent = this.getParentIndex(index); // {4}
    }
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]; // {1}
  }
  extract() {
    if (this.isEmpty()) {
      return undefined; // {1}
    }
    if (this.size() === 1) {
      return this.heap.shift(); // {2}
    }
    // 第一个值移除，存储到一个临时变量
    const removedValue = this.heap.shift(); // {3}
    // 在移除后，我们将堆的最后一个元素移动至根部
    this.heap.unshift(this.heap[this.heap.length -1])
    this.heap.pop()
    // 执行siftDown函数
    this.siftDown(0); // {4}
    return removedValue; // {5}
  }
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index); // {1}
    const right = this.getRightIndex(index); // {2}
    const size = this.size();
    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
    ) { // {3}
      element = left; // {4}
    }
    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN
    ) { // {5}
      element = right; // {6}
    }
    if (index !== element) { // {7}
      swap(this.heap, index, element); // {8}
      this.siftDown(element); // {9}
    }
  }
}

module.exports = MinHeap