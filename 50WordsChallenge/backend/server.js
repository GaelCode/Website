const express = require("express")
const fs = require("fs")
const cors = require("cors")
const path = require("path")


const site = express();
site.use(express.json());
site.use(cors())

site.use(express.static(path.join(__dirname, '../frontend')))

site.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend','index.html'))
})

site.get('/word', async (req, res) => {
    try {
        const data = await fs.promises.readFile('./words_dictionary.json', 'utf8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (err) {
        console.error('Error reading JSON file:', err);
        res.status(500).send('Error reading JSON file');
    }
});

const connexion = require('./route/connexion')
site.use('/connexion', connexion)

const createAccount = require('./route/createAccount');
site.use('/createAccount', createAccount)

site.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
