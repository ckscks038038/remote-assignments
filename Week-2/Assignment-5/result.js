function binarySearchPosition(numbers, target) {
  // your code here
  let left = 0
  let right = numbers.length - 1

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2)
    if (numbers[middle] > target) {
      right = middle - 1
    } else if (numbers[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)) // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)) // should print 3
