const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('barrons_library', 'root', 'senha123@', {
  host: 'localhost',
  dialect: 'mysql'
});

const Livro = sequelize.define('Livro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  }
}, {
  tableName: 'Livros',
  timestamps: true
});

module.exports = Livro;
