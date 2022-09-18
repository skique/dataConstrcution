const MinHeap = require('./tree/Heap/MinHeap')

// 创建一个堆
const heap = new MinHeap();
// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);

// heap.insert(1);
// heap.insert(6);
heap.insert(9);
heap.insert(7);
heap.insert(8);


// 测试这三个方法
// console.log('Heap size: ', heap.size()); // 5
// console.log('Heap is empty: ', heap.isEmpty()); // false
// console.log('Heap min value: ', heap.findMinimum()); // 1

// 执行siftDown函数
// console.log('Extract minimum: ', heap.extract()); // 1
console.log('the heap: ', heap.heap); // 1