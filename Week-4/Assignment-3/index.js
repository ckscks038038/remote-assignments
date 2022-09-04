const express = require("express")
const mysql = require("mysql")

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Yy507145235!!",
  port: "3000",
  database: "nodemysql",
})

const app = express()

// Connect
db.connect((err) => {
  if (err) {
    return console.error("error: " + err.message)
  }
  console.log("Connected to the MySQL server.")
})

// Create DB
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql"
  db.query(sql, (err, result) => {
    console.log(result)
    if (err) {
      console.log(err)
      throw err
    }
    res.send("Database created...")
  })
})
// // Create Table
// app.get("/createpoststable", (req, res) => {
//   let sql =
//     "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))"
//   db.query(sql, (err, result) => {
//     if (err) throw err
//     console.log(result)
//     res.send("Post table created...")
//   })
// })

app.listen("3000", () => {
  console.log("Sever started on port 3000")
})
