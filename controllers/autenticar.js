const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

const registrar = async (req, res) => {
  const { nome, email, senha } = req.body;
  // para criptografia da senha do usuário
  const salt = await bcrypt.genSalt(10);
  const senhaCtiptografada = await bcrypt.hash(senha, salt);
  const usuario = await prisma.usuario.create({
    data: {
      nome: nome,
      email: email,
      senha: senhaCtiptografada,
    },
  });
  res.status(201).json(usuario);
};

const logar = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await prisma.usuario.findFirst({
    where:{
      email:email
    }
  })
  // comparando as senhas
  const compararSenha = await bcrypt.compare(senha, usuario.senha)
  if(!compararSenha){
    return res.send("Não tem vacilão");
  }
  res.status(200).json(usuario);
};

module.exports = { registrar, logar };
