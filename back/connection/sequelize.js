const {Sequelize} = require("sequelize")
require("dotenv/config")

//Senha do banco de dados local do mysql definida em um arquivo de ambiente de variáveis
const senhaBD = process.env.SENHA_BD

//Instância do Sequelize que se conecta com o Mysql
const sequelize = new Sequelize("cadastroRh", "root", senhaBD,{
    host:"localhost",
    dialect:"mysql"
})

//Conexão com o banco de dados
sequelize.authenticate().then(retorno=>{
    console.log(`Conectado ao Banco de dados do MySql`);
}).catch(erro=>{
    console.log("Ocorreu um erro na conexão com o banco de dados "+erro);
})



module.exports = sequelize