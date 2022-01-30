const express = require("express");
const Conhecimentos = require("../models/Conhecimento");

const rotaConhecimentos = express.Router();

rotaConhecimentos.get("", async (req, res) => {
  try {
    const conhecimentos = await Conhecimentos.findAll({ attributes: ['id', 'nome'] });

    return res.status(200).json({
      conhecimentos,
    });
  } catch (erro) {
    return res.status(500).json({
      mensagem: "Ocorreu um erro ao buscar na tabela de conhecimentos",
      erro,
    });
  }
});

module.exports = rotaConhecimentos;
