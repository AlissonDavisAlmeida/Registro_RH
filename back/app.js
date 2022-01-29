const express = require("express");
const cors = require("cors");
// instância do sequelize conectado com o Mysql
const bancoMySQL = require("./connection/sequelize");

const rotaUsuarios = require("./routes/rotaUsuarios");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Rotas
app.use("/usuarios", rotaUsuarios);

app.listen(3001, () => {
  console.log("Conectado na porta 3001");
});
