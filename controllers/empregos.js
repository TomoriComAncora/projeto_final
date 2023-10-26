const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const mostrarTodosEmpregos = async (req, res) => {
  const empregos = await prisma.emprego.findMany({
    where: {
      criadoPor: req.usuario.usuarioId,
    },
  });
  res.status(200).json({ empregos, total: empregos.length });
};

const criarEmprego = async (req, res) => {
  const { empresa, cargo, status } = req.body;
  req.body.usuarioId = req.usuario.usuarioId;
  const emprego = await prisma.emprego.create({
    data: {
      empresa: empresa,
      cargo: cargo,
      status: status,
      criadoPor: req.body.usuarioId,
    },
  });
  res.status(201).json(emprego);
};

const mostrarUmEmprego = async (req, res) => {
  const {
    usuario: { usuarioId },
    params: { id: empregoId },
  } = req;
  const emprego = await prisma.emprego.findUnique({
    where: { id: empregoId, criadoPor: usuarioId },
  });
  if (!emprego) {
    console.log("Sem emprego!")
  }
  res.status(200).json(emprego);
};

const editarEmprego = async (req, res) => {
  res.send("editar um emprego");
};

const deletarEmprego = async (req, res) => {
  res.send("deletar um emprego");
};

module.exports = {
  mostrarTodosEmpregos,
  criarEmprego,
  mostrarUmEmprego,
  editarEmprego,
  deletarEmprego,
};
