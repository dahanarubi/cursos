const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener cursos
router.get('/cursos', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT id, nombre, instructor, nivel, duracion FROM cursos ORDER BY id DESC'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener cursos' });
  }
});

// Agregar curso
router.post('/cursos', async (req, res) => {
  try {
    const { nombre, instructor, nivel, duracion } = req.body;

    if (!nombre || !instructor || !nivel || !duracion) {
      return res.status(400).json({ error: 'Faltan datos' });
    }

    await db.execute(
      'INSERT INTO cursos (nombre, instructor, nivel, duracion) VALUES (?, ?, ?, ?)',
      [
        nombre.trim(),
        instructor.trim(),
        nivel.trim(),
        duracion.trim()
      ]
    );

    res.json({ ok: true });

  } catch (err) {
    res.status(500).json({ error: 'Error al agregar curso' });
  }
});

module.exports = router;