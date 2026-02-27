const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cursosdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado a MySQL - Base cursosdb');
    connection.release();
  } catch (err) {
    console.error('❌ Error de MySQL:', err.message);
  }
})();

module.exports = pool;