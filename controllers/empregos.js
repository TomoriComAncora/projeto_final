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
    console.log("SEM EMPREGO COM ESSE ID!");
  }
  res.status(200).json(emprego);
};

const editarEmprego = async (req, res) => {
  const {
    usuario: { usuarioId },
    params: { id: empregoId },
    body: { empresa, cargo },
  } = req;

  const emprego = await prisma.emprego.update({
    where: {
      id: empregoId,
      criadoPor: usuarioId,
    },
    data: {
      empresa: empresa,
      cargo: cargo,
    },
  });

  if (!emprego) {
    console.log("SEM EMPREGO COM ESSE ID!");
  }

  res.status(200).json(emprego);
};

const deletarEmprego = async (req, res) => {
  const {
    usuario: { usuarioId },
    params: { id: empregoId },
  } = req;

  const emprego = await prisma.emprego.delete({
    where: {
      id: empregoId,
      criadoPor: usuarioId,
    },
  });
  if (!emprego) {
    console.log("SEM EMPREGO COM ESSE ID!");
  }
  res.status(200).json();
};

module.exports = {
  mostrarTodosEmpregos,
  criarEmprego,
  mostrarUmEmprego,
  editarEmprego,
  deletarEmprego,
};
