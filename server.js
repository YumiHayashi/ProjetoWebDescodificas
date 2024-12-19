const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua-senha',
  database: 'cultura_pop'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados!');
});

// Endpoint para listar filmes
app.get('/filmes', (req, res) => {
  db.query('SELECT * FROM filmes', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Endpoint para obter detalhes de um álbum específico
app.get('/musicas/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM musicas WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Endpoint para adicionar uma série
app.post('/series', (req, res) => {
  const { titulo, sinopse, temporadas, imagem_url } = req.body;
  db.query(
    'INSERT INTO series (titulo, sinopse, temporadas, imagem_url) VALUES (?, ?, ?, ?)',
    [titulo, sinopse, temporadas, imagem_url],
    (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, titulo });
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});