const PORT = 3000
const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Why hello there!")
})

app.post("/@", (req, res) => {
    res.send("🥭 is 🔥")
})

app.post("/?", (req, res) => {
    res.send("I wonder what's wrong with this route 🤔?")
})

app.get("/dog",(req,res) => {
    res.send("Happy 🐶 loves yummy dog food!")
})

app.get ("/fruitsmoothie",(req, res) => {
    // res.send()
    res.send("A 🥭, 🍍, 🍓 make a wonderful smoothie!")
})

app.listen(PORT, console.log(`Listening on port ${PORT}`));