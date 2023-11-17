import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const mostrarTodosEmpregosCriados = async (req: any, res: any) => {
  // Verificando o tipo do perfil
  if (req.usuario.tipoUsuario !== "empresa") {
    return res.status(401).json("Sem permissão para este tipo de operação!");
  }

  const empregos = await prisma.emprego.findMany({
    where: {
      criadoPor: req.usuario.usuarioId,
    },
  });
  res.status(200).json({ empregos, total: empregos.length });
};

export const criarEmprego = async (req: any, res: any) => {
  // Verificando o tipo do perfil
  if (req.usuario.tipoUsuario !== "empresa") {
    return res.status(401).json("Sem permissão para este tipo de operação!");
  }

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


export const mostrarUmEmpregoEmpresa = async (req: any, res: any) => {
  if (req.usuario.tipoUsuario !== "empresa") {
    return res.status(401).json("Sem permissão para este tipo de operação!");
  }
  const {
    usuario: { usuarioId },
    params: { id: empregoId },
  } = req;
  const emprego = await prisma.emprego.findUnique({
    where: { id: empregoId, criadoPor: usuarioId },
  });
  if (!emprego) {
    return res.status(404).json("Nenhum emprego com esse id!");
  }
  res.status(200).json(emprego);
};

export const editarEmprego = async (req: any, res: any) => {
  // Verificando o tipo do perfil
  if (req.usuario.tipoUsuario !== "empresa") {
    return res.status(401).json("Sem permissão para este tipo de operação!");
  }

  const {
    usuario: { usuarioId },
    params: { id: empregoId },
    body: { empresa, cargo, status},
  } = req;

  // Checando se o emprego com o id informado de fato existe
  const empregoTemp = await prisma.emprego.findUnique({
    where: { id: empregoId, criadoPor: usuarioId },
  });
  if (!empregoTemp) {
    return res.status(404).json("Nenhum emprego com esse id!");
  }

  // Editando o emprego
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

  res.status(200).json(emprego);
};

export const deletarEmprego = async (req: any, res: any) => {
  // Verificando o tipo do perfil
  if (req.usuario.tipoUsuario !== "empresa") {
    return res.status(401).json("Sem permissão para este tipo de operação!");
  }

  const {
    usuario: { usuarioId },
    params: { id: empregoId },
  } = req;

  // Checando se o emprego com o id informado de fato existe
  const empregoTemp = await prisma.emprego.findUnique({
    where: { id: empregoId, criadoPor: usuarioId },
  });
  if (!empregoTemp) {
    return res.status(404).json("Nenhum emprego com esse id!");
  }

  // Deletando o emprego
  const emprego = await prisma.emprego.delete({
    where: {
      id: empregoId,
      criadoPor: usuarioId,
    },
  });

  res.status(200).json({mensage: "Emprego deletado com sucesso!"});
};
