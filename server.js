const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gamercore_db'
}).promise();

// Registrar usuario
app.post('/api/register', async (req, res) => {
  const { nombre, password } = req.body;
  if (!nombre || !password) return res.status(400).json({ error: 'Faltan datos' });
  try {
    const hash = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO usuarios (nombre, password_hash) VALUES (?, ?)', [nombre, hash]);
    res.json({ success: true });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: 'El usuario ya existe' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Error interno' });
    }
  }
});

// Iniciar sesión (devuelve tema)
app.post('/api/login', async (req, res) => {
  const { nombre, password } = req.body;
  const [rows] = await db.query('SELECT * FROM usuarios WHERE nombre = ?', [nombre]);
  if (rows.length === 0) return res.status(401).json({ error: 'Usuario no existe' });
  const ok = await bcrypt.compare(password, rows[0].password_hash);
  if (!ok) return res.status(401).json({ error: 'Contraseña incorrecta' });
  res.json({ success: true, usuarioId: rows[0].id, tema: rows[0].tema || 'dark' });
});

// Actualizar tema del usuario
app.put('/api/usuarios/tema', async (req, res) => {
  const { usuarioId, tema } = req.body;
  if (!usuarioId || !tema) return res.status(400).json({ error: 'Faltan datos' });
  await db.query('UPDATE usuarios SET tema = ? WHERE id = ?', [tema, usuarioId]);
  res.json({ success: true });
});

// Guardar build
app.post('/api/builds', async (req, res) => {
  const { usuarioId, build } = req.body;
  if (!usuarioId || !build) return res.status(400).json({ error: 'Datos incompletos' });
  try {
    await db.query(`INSERT INTO builds 
      (usuario_id, cpu, gpu, ram, motherboard, fuente, ssd, precio_total, gama, fps_valorant, fps_warzone, fps_fortnite, advertencias)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [usuarioId, build.cpu, build.gpu, build.ram, build.mb, build.fuente, build.ssd,
       build.precio, build.gama, build.valorant, build.warzone, build.fortnite, JSON.stringify(build.advertencias)]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar la build' });
  }
});

// Obtener builds de un usuario
app.get('/api/builds/:usuarioId', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM builds WHERE usuario_id = ? ORDER BY fecha DESC LIMIT 10', [req.params.usuarioId]);
  res.json(rows);
});

// Eliminar build
app.delete('/api/builds/:buildId', async (req, res) => {
  await db.query('DELETE FROM builds WHERE id = ?', [req.params.buildId]);
  res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));