const express = require('express')
const path = require('path');
const createAccount = express.Router()

createAccount.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../frontend','index.html'))
})



module.exports = createAccount