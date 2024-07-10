const express = require('express')
const path = require('path');
const connexion = express.Router()

connexion.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../frontend','index.html'))
})



module.exports = connexion