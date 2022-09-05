const express = require("express")
const app = express()
const port = 3000
const cookieParser = require("cookie-parser")
app.use(cookieParser())

// Assignment-1: show a page returning a simple string
app.get("/", (req, res) => {
  res.send("Hello My Server!")
})

// Assignment-2: do culculation of sum
app.get("/data", (req, res) => {
  const stringOfNum = req.query.number
  const number = Number(stringOfNum) // set string type into number
  if (!stringOfNum) {
    res.send("Lack of Parameter")
  }
  else if (!Number.isInteger(number) || number <= 0) {
    res.send("Wrong Parameter")
  } else {
    let sum = ((1 + number) * number) / 2
    res.send(sum.toString())
  }
})

// Assignment-3:
app.use("/sum.html", express.static(__dirname + "/sum.html"))

// Assignment-4:
app.use("/setName.html", express.static(__dirname + "/setName.html"))
app.use("/myName.html", express.static(__dirname + "/myName.html"))
app.get("/myName", (req, res) => {
  // res.clearCookie("name", "yang")
  const name = req.cookies.name
  if (!name) {
    //name not found in cookies
    res.redirect("/setName.html")
  } else {
    //name found in cookies
    res.send(name)
  }
})
app.get("/trackName", (req, res) => {
  res.cookie("name", req.query.name)
  console.log("Naming success!")
  res.redirect("/myName")
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
