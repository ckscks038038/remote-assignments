function delayedResultPromise(n1, n2, delayTime) {
  // your code here
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2)
    }, delayTime)
  })
  return p
}
async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  const res = await delayedResultPromise(5, 4, 3000)
  console.log(res)
}
main() // result will be shown in the console after <delayTime> seconds
