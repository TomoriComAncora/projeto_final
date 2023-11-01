const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  // Criando token
  const token = jwt.sign(
    { usuario: usuario.id, nome: usuario.nome },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
  res.status(201).json({ usuario: { nome: usuario.nome }, token });
};

const logar = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await prisma.usuario.findFirst({
    where: {
      email: email,
    },
  });
  
  // comparando as senhas
  const compararSenha = await bcrypt.compare(senha, usuario.senha);
  if (!compararSenha) {
    return res.send("Não tem vacilão");
  }
  const token = jwt.sign(
    { usuarioId: usuario.id, nome: usuario.nome },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
  res.status(201).json({ usuario: { nome: usuario.nome }, token });

};

module.exports = { registrar, logar };
