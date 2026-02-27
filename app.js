const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos
app.use(express.static('public'));

// Rutas
app.use('/api', require('./routes/auth.routes'));
app.use('/api', require('./routes/cursos.routes'));

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log('Servidor corriendo en ' + url);
});