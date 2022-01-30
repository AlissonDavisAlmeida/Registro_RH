const express = require("express");
const cors = require("cors");
// instância do sequelize conectado com o Mysql
const bancoMySQL = require("./connection/sequelize");

const rotaUsuarios = require("./routes/rotaUsuarios");
const rotaConhecimentos = require("./routes/rotaConhecimento");

const app = express();
app.use(cors());
// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use("/usuarios", rotaUsuarios);
app.use("/conhecimentos", rotaConhecimentos);

app.listen(3001, () => {
  console.log("Conectado na porta 3001");
});
