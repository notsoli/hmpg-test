import express from "express"
import compression from "compression"
import path from "path"

// server var
const app = express()

// view engine setup
app.set("views", path.join(__dirname,"views"))
app.set("view engine", "ejs")

// middleware
app.use(compression())
console.log(__dirname)
app.use(express.static(__dirname + "/public"))

// routes
import indexRouter from "./routes/index"
app.use("/", indexRouter)

app.use("*", (req, res) => {
  res.send("Error: Not Found")
})

const port = process.env.PORT || 3000

app.listen(port, function listenHandler() {
    console.info(`Running on ${port}`)
})
