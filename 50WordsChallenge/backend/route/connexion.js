const express = require('express')
const path = require('path')
const connexion = express.Router()
const bcrypt = require('bcrypt') // hashage
const { body, validationResult } = require('express-validator'); // pour vérifier les input
const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'word_challenge'
})


connection.connect();

connexion.get('/', (req,res) => {
    /*  /!\/!\/!\/!\/!\/!\/!\
        pas encore mis en place mais si session username est present alors renvoie directe
        vers infos de compte(petit graphique) et la possibilité de se deconnecter
    */
    res.sendFile(path.join(__dirname, '../../frontend/connexion'))
})

connexion.post('/', [
    // Valider et filtrer le nom d'utilisateur
    body('username').trim().isLength({ min: 3 }).escape(),
    // Valider et filtrer le mot de passe
    body('password').isLength({ min: 5 }).escape()
    ], (req,res) => {
    
    // verification si les inputs sont bien comme les filtres
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    // recuperation des donnees filtres
    const username = req.body.username
    const password = req.body.password

    // verification de la precense de cette utilisateur
    connection.query("SELECT * FROM accounts WHERE username = ?", [username], (err, results) => {
        // renvoie d'une erreur si la requete ne se passe pas bien
        if (err){
            console.error('Error querying database:', err)
            return res.status(500).send('Internal Server Error')
        }

        // si il n'y a aucun utilisateur alors le compte n'existe pas
        if (results.length === 0){
            return res.status(401).send('Invalid username or password')
        }

        // on verifie les mots de passe pour voir si c'est les mêmes
        const hashedPassword = results[0].passwordHash
        bcrypt.compare(password, hashedPassword, (err, result) => {
            // verifie s'il n'y a pas d'erreur lors de l'execution
            if (err) {
                console.error('Error comparing passwords:', err)
                return res. status(500).send('Internal Server Error')
            }

            // s'il y a un resultat alors il est connecte et on le renvoie a la page d'accueil sinon on lui renvoie une erreur
            if (result){
                req.session.username = username
                res.sendFile(path.join(__dirname, '../../frontend'))
            } else {
                res.status(401).send('Invalid username or password')
            }
        })
    })
});


module.exports = connexion