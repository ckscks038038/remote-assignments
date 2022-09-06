const mysql = require("mysql2")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
})

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    // if email or password is empty
    if (!email || !password) {
      //stop right after the return
      return res.status(400).render("login", {
        message: "Please provide an email and passowrd",
      })
    }

    db.query(
      "SELECT * FROM user WHERE email = ?",
      [email],
      async (error, results) => {
        console.log(results)
        // if we can't find a corresponding user in the database
        // or the password is wrong
        if (
          !results ||
          !(await bcrypt.compare(password, results[0].password))
        ) {
          // 401: forbidden
          res.status(401).render("login", {
            message: "Email or password is incorrect",
          })
        } else {
          const user_id = results[0].id
          // when users login, creating a unique token(long string of number)
          const token = jwt.sign({ id: user_id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          })
          console.log("The token is: ", token)
          const cookieOptions = {
            expires: new Date(
              Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          }
          res.cookie("jwt", token, cookieOptions)
          res.status(200).redirect("/")
        }
      }
    )
  } catch (error) {
    console.log(error)
  }
}
exports.register = (req, res) => {
  console.log(req.body)
  const { email, password, passwordConfirm } = req.body
  // Avoid duplicated registeration
  db.query(
    "SELECT email FROM user WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error)
      }

      if (results.length > 0) {
        return res.render("register", {
          message: "That email is already in use",
        })
      } else if (password !== passwordConfirm) {
        return res.render("register", {
          message: "Password do not match",
        })
      }

      let hashedPassword = await bcrypt.hash(password, 8)
      console.log(hashedPassword)

      db.query(
        "INSERT INTO user SET ?",
        { email: email, password: hashedPassword },
        (error, results) => {
          if (error) {
            console.log(error)
          } else {
            console.log(results)
            return res.render("register", {
              message: "Registered Successfully",
            })
            res.redirect()
          }
        }
      )
    }
  )
}
