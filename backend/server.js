const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/datos', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) =>{
        if (err){
            res.status(500).json({error: 'Error al obtener datos'});
            return;
        }
        res.json({mensaje: 'Hi! from the backend', status:'ok', data: results});

        });
    });

app.listen(PORT, () =>{
    console.log('servidor corriendo en http://localhost:' + PORT);
})