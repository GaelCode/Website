const express = require("express")
const path = require("path")
const informations = express.Router()

informations.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/informations"))
})


module.exports = informations