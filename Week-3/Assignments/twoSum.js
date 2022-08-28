function twoSum(nums, target) {
  // create a hash table to record each number and it's index
  let map = new Map()
  for (let index in nums) {
    map.set(nums[index], index)
  }

  // iterate the array
  for (let index in nums) {
    // if the current number has a complement by search in map, return the index of both numbers
    let complement = target - nums[index]
    if (map.has(complement)) {
      let complementIndex = map.get(complement)
      return [complementIndex, index]
    }
  }
  return []
}
let res = twoSum([2, 7, 11, 15], 26)
console.log(res)
