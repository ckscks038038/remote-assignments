const express = require("express")
const mysql = require("mysql2")
const dotenv = require("dotenv")
const path = require("path")
const cookieparser = require("cookie-parser")

dotenv.config({ path: "./.env" })
const app = express()
// Create connection
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
})

const publicDirectory = path.join(__dirname, "./public")
app.use(express.static(publicDirectory))

//Pasre URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieparser())
app.set("view engine", "hbs")

//Define Routes
app.use("/", require("./routes/pages"))
app.use("/auth", require("./routes/auth"))

// Connect
db.connect((err) => {
  if (err) {
    return console.error("error: " + err.message)
  }
  console.log("Connected to the MySQL server.")
})

app.listen("3000", () => {
  console.log("Server started on port 3000")
})
