const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jeisson',
    database: 'mi_primera_base_de_datos'
});

connection.connect((err) =>{
    if (err){
        console.error('Error de conecion a MySQL:', err);
        return;
    }
    console.log('conectado a MySQL ✅');
});

connection.query(
    'SELECT * FROM users', (err, results) => {
        if (err){
            console.error('Error al realizar la query:', err)
            return;
        }
        console.log('Resultados de la query:', results)
 // Cerrar conexión después de la consulta
});

module.exports = connection;