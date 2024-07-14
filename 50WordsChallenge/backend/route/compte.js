const express = require("express")
const path = require("path")
const compte = express.Router()
const mysql = require("mysql")


const Compte = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'word_challenge'
})

Compte.connect()

compte.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/compte"))
})

compte.post('/', (req, res) => {
    if (req.body.disconnect){
        req.session.destroy(err => {
            if (err){
                return res.redirect("/compte")
            }
            res.clearCookie("username")
            res.redirect('/')
        })
    } else if (req.body.delete) {
        const username = req.session.username
        Compte.query("DELETE FROM account WHERE id = ?", [username], (err, result) => {
            if (err){
                console.error(err)
                return res.status(500).send('An error occurred')
            }
            req.session.destroy(err => {
                if (err) {
                    return res.redirect('/compte')
                }
                res.clearCookie('username')
                res.redirect('/')
            })
        })
    }
})


module.exports = compte
