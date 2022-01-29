const { DataTypes } = require("sequelize");
const sequelize = require("../connection/sequelize");
const Conhecimento = require("./Conhecimento");

// Instância de um model de Usuário que tem um relacionamento de muitos para muitos com a tabela conhecimentos
const Usuario = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { max: 100, notNull: { msg: "Insira um nome" } },
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: { max: 100, isEmail: true, notNull: { msg: "Por favor insira um email" } },
  },
  cpf: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
    validate: { is: /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/i },
  },
  celular: {
    type: DataTypes.STRING(20),
    validate: { is: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/i },
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

});
// Relacionamento de muitos para muitos
const UsuarioConhecimento = Usuario.belongsToMany(Conhecimento, { through: "UsuarioConhecimento" });
Conhecimento.belongsToMany(Usuario, { through: "UsuarioConhecimento" });

module.exports = {

  Usuario,
};
