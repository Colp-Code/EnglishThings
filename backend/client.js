const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/datos',(res, req) => {
    const { word, translation, phase } = req.body;
    if (!word || !translation || !phase){
        res.status(400).json({ error: 'Faltan datos' });
        return;
    }
});

connection.query(
  'INSERT INTO users (word, translation, phrase) VALUES (?, ?, ?)',
  [word, translation, phrase],
)
