const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;

    const [rows] = await db.execute(
      'SELECT * FROM administradores WHERE nombre = ? AND correo = ? AND password = ?',
      [nombre, correo, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    res.json({ ok: true });

  } catch (err) {
    res.status(500).json({ error: 'Error en login' });
  }
});

module.exports = router;