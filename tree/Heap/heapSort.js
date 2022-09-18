function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn); // 步骤1
  while (heapSize > 1) {
    swap(array, 0, --heapSize); // 步骤2
    heapify(array, 0, heapSize, compareFn); // 步骤3
  }
  return array;
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}