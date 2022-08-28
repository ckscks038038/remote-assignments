const express = require("express")
const app = express()
const port = 3000

//Integer checking function
function isInt(value) {
  let x = parseFloat(value)
  return !isNaN(value) && (x | 0) === x
}
// Assignment-1: show a page returning a simple string
app.get("/", (req, res) => {
  res.send("Hello My Server!")
})

// Assignment-2: do culculation of sum
app.get("/getData", (req, res) => {
  const stringOfNum = req.query.number
  const number = Number(stringOfNum)
  if (!number) {
    res.send("Lack of Parameter")
  } else if (!number || number <= 0) {
    res.send("Wrong Parameter")
  } else if (number > 0) {
    let sum = ((1 + number) * number) / 2
    res.send(sum.toString())
  }
})

// Assignment-3:
app.use("/sum.html", express.static(__dirname + "/sum.html"))

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
