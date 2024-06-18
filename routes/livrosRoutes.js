const express = require('express');
const router = express.Router();
const Livro = require('../models/Livro');

// Rota para listar todos os livros
router.get('/livros', async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.json(livros);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

// Rota para criar um novo livro
router.post('/livros', async (req, res) => {
  const { titulo, autor, isbn } = req.body;
  try {
    const novoLivro = await Livro.create({ titulo, autor, isbn });
    res.status(201).json(novoLivro);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar livro' });
  }
});

// Rota para atualizar um livro existente
router.put('/livros/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, isbn } = req.body;
  try {
    const livro = await Livro.findByPk(id);
    if (livro) {
      await livro.update({ titulo, autor, isbn });
      res.json(livro);
    } else {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
});

// Rota para deletar um livro
router.delete('/livros/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const livro = await Livro.findByPk(id);
    if (livro) {
      await livro.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Livro não encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar livro' });
  }
});

module.exports = router;
