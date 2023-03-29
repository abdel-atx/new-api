const express = require('express')
const app = express()

const port = 3000

const dogs = [
	{ name: "Mila", breed: "Husky"},
	{ name: "Max", breed: "German"}
]

// creating get requests

app.get("/", (req, res) => {
	res.json(dogs)
})

app.get("/about", (req, res) => {
	res.send("What do you want to know ?")
})

app.get("/dogs/:id", (req, res) => {
	res.json(dogs[parseInt(req.params.id) - 1])
})

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})