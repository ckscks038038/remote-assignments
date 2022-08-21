function count(input) {
  // your code here
  let obj = {}
  for (key of input) {
    // to check if the key has existed in the object already
    if (key in obj) {
      obj[key]++
    } else {
      obj[key] = 1
    }
  }
  return obj
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"]
console.log(count(input1))
// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
  // your code here
  let obj = {}
  for (item of input) {
    // to check if the key has existed in the object already
    if (item.key in obj) {
      obj[item.key] += item.value
    } else {
      obj[item.key] = item.value
    }
  }
  return obj
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
]
console.log(groupByKey(input2))
// should print {a:6, b:1, c:7}
