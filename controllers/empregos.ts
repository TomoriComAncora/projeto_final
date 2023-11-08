import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const mostrarTodosEmpregos = async (req: any, res: any) => {
  const empregos = await prisma.emprego.findMany({
    where: {
      criadoPor: req.usuario.usuarioId,
    },
  });
  res.status(200).json({ empregos, total: empregos.length });
};

export const criarEmprego = async (req: any, res: any) => {
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

export const mostrarUmEmprego = async (req: any, res: any) => {
  const {
    usuario: { usuarioId },
    params: { id: empregoId },
  } = req;
  const emprego = await prisma.emprego.findUnique({
    where: { id: empregoId, criadoPor: usuarioId },
  });
  if (!emprego) {
    console.log("Nenhum emprego com esse id");
  }
  res.status(200).json(emprego);
};

export const editarEmprego = async (req: any, res: any) => {
  const {
    usuario: { usuarioId },
    params: { id: empregoId },
    body: { empresa, cargo, status },
  } = req;

  const emprego = await prisma.emprego.update({
    where: {
      id: empregoId,
      criadoPor: usuarioId,
    },
    data: {
      empresa: empresa,
      cargo: cargo,
      status: status,
    },
  });

  if (!emprego) {
    console.log("Nenhum emprego com esse id");
  }

  res.status(200).json(emprego);
};

export const deletarEmprego = async (req: any, res: any) => {
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
    console.log("Nenhum emprego com esse id");
  }
  res.status(200).json();
};
