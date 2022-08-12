function countAandB(input) {
    let sum = 0
    input.forEach(ele => {
        if (ele === 'a' || ele === 'b')
            sum++
    })

    return sum
}
function toNumber(input) {
    return input.map((ele) => 
        ele.charCodeAt(0) - 96
    )
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]