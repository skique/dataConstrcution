const MinHeap = require('./tree/Heap/MinHeap')
const MaxHeap = require('./tree/Heap/MaxHeap')

// 测试最小堆
const heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);

heap.insert(1);


// 测试这三个方法
console.log('Heap size: ', heap.size()); // 5
console.log('Heap is empty: ', heap.isEmpty()); // false
console.log('Heap min value: ', heap.findMinimum()); // 1

// 执行siftDown函数
console.log('Extract minimum: ', heap.extract()); // 1
console.log('the heap: ', heap.heap); // 1


// 测试最大堆
const maxHeap = new MaxHeap();

maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);

maxHeap.insert(1);

console.log('Heap size: ', maxHeap.size()); // 5
console.log('Heap min value: ', maxHeap.findMinimum()); // 5