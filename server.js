const express = require('express');
const app = express();
const Livro = require('./models/Livro'); // Ajuste o caminho para o seu modelo

app.get('/livros/titulos', async (req, res) => {
  try {
    const titulos = await Livro.findAll({
      attributes: ['titulo', 'isbn', 'nome_editora', 'ano_lancamento']
    });
    res.json(titulos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
