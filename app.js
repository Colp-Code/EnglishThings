
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jeisson',
  database: 'mi_primera_base_de_datos'
});

connection.connect(err => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL ✅');
});

connection.query(
  'INSERT INTO users (name, email) VALUES (?, ?)',
  ['Jeisson Steven', 'Jeisson@example.com'],
  (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Usuario insertado con ID:', results.insertId);
  }
);

// Cerrar conexión
connection.end();