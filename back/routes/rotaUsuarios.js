const express = require('express');

const rotaUsuarios = express.Router();

const { Usuario } = require('../models/Usuario');
const Conhecimentos = require('../models/Conhecimento');

// Métodos HTTP para as rotas dos usuários
rotaUsuarios.get('', async (req, res) => {
  const usuarios = await Usuario.findAll({ include: Conhecimentos, order: [['nome', 'ASC']] });
  return res.json({
    usuarios,
  });
});

// Rota para registrar um novo usuário
rotaUsuarios.post('/registrar', async (req, res) => {
  const {
    nome, email, cpf, celular, conhecimentos,
  } = req.body;

  // Verifica a existência do email
  const existeCpf = await Usuario.findOne({ where: { cpf } });
  if (existeCpf) {
    return res.status(500).json({
      mensagem: "O cpf informado já existe no Banco de Dados",
    });
  }
  // Criação do Usuário no Banco de dados
  Usuario.create({
    nome,
    email,
    cpf,
    celular,

  }).then(async (resultado) => {
    // Busca da lista de conhecimento para adicionar na tabela usuarioconhecimento
    const conhecimento = await Conhecimentos.findAll({ where: { nome: conhecimentos } });
    await resultado.addConhecimentos(conhecimento);
    return res.json({
      mensagem: "Registro de usuário adicionado com sucesso",
      resultado,
    });
  }).catch((erro) => res.json({

    erro,
  }));
});

module.exports = rotaUsuarios;
