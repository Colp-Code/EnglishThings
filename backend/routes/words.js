const express = require('express');
const router = express.Router();
const connection = require('../db');

router.post('/',(req, res) => {
    const { word, translation, phrase } = req.body;
    if (!word || !translation || !phrase){
        res.status(400).json({ error: 'Missing data' });
        return;
    }
    connection.query(
    'INSERT INTO palabras (word, translation, phrase) VALUES (?, ?, ?)',
    [word, translation, phrase],
    (error, results) => {
      if(error){
        console.error('Something went wrong: ', error);
        res.status(500).json({ error:'Error within the server'})
      } else {
        res.status(200).json({ message:'Data inserted successfully'})
      }
    }
)
});

router.get('/', (req, res) => {
    connection.query('SELECT * FROM palabras', (err, results) => {
        if (err){
            res.status(500).json({error:'Error retrieving data'});
            return;
        } else {
            res.json({
                message: 'Data retrieved successfully',
                data: results
            });
        }
    })
})

module.exports = router;