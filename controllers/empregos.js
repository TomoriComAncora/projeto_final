const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const mostrarTodosEmpregos = async (req, res) => {};

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
  res.send("buscar um emprego");
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
