const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}
function defaultCompare(a, b) {
  if (a === b) { // {1}
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}

function swap(array, a, b) {
  const temp = array[a]; // {5}
  array[a] = array[b]; // {6}
  array[b] = temp; // {7}
}

const swapes6 = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

module.exports = {
  Compare,
  defaultCompare,
  swap
}