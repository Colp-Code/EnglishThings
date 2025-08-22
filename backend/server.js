const express = require('express');
const cors = require('cors');
const connection = require('./db');
const wordsRouter = require('./routes/words');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/datos', wordsRouter);

app.listen(PORT, () =>{
    console.log('servidor corriendo en http://localhost:' + PORT);
})