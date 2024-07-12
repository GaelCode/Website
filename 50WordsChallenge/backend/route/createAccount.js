const express = require('express')
const path = require('path')
const createAccount = express.Router()
const bcrypt = require("bcrypt")
const { body, validationResult } = require("express-validator")
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'word_challenge'
})

connection.connect()

createAccount.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../frontend/createAccount'))
})

createAccount.post('/', 
    body('username').trim().isLength({ min: 3 }).escape(),
    // Valider et filtrer le mot de passe
    body('password').isLength({ min: 5 }).escape(),
    (req,res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    const username = req.body.username
    const password = req.body.password

    connection.query("SELECT * FROM accounts WHERE username = ?", [username], (err, results) => {
        if (err){
            console.error('Error querying database:', err)
            return res.status(500).send('Internal Server Error')
        }

        if (results.length > 0){
            return res.status(401).send("Username already taken")
        }

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error("Error hashing password:", err)
                return res.status(500).send('Internal Server Error')
            }

            connection.query("INSERT INTO accounts (username, passwordHash) VALUES (?,?)", [username, hashedPassword], (err, results) => {
                if (err){
                    console.error("Error inserting user into database", err)
                    return res.status(500).send("Internal Server Error")
                }

                res.sendFile(path.join(__dirname, "../../frontend/connexion"))
            })
        })
    })
    
})


module.exports = createAccount