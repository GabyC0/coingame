const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 5001;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/api/players', cors(), async (req, res) => {
    try{
        const { rows: players } = await db.query('SELECT * FROM players');
        res.send(players);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/api/players', cors(), async (req, res) => {
    const newPlayer = { playername: req.body.playername, playerscore: req.body.playerscore }
    console.log([newPlayer.playername, newPlayer.playerscore]);
    const result = await db.query(
        'INSERT INTO players(playername, playerscore) VALUES($1, $2) RETURNING *',
        [newPlayer.playername, newPlayer.playerscore]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});