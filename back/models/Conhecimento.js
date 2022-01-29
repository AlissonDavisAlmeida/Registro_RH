const { DataTypes } = require("sequelize");
const sequelize = require("../connection/sequelize");
const Usuario = require("./Usuario");

// Instância de um modelo do Sequelize que vai mapear automaticamente para uma tabela com o mesmo nome no plural
const Conhecimento = sequelize.define("Conhecimento", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Conhecimento;
