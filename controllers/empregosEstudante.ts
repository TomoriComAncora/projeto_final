import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const mostrarTodosEmpregos = async (req: any, res: any) => {
  const empregos = await prisma.emprego.findMany();
  res.status(200).json({ empregos, total: empregos.length });
};

export const mostrarUmEmpregoEstudante = async (req: any, res: any) => {
  if (req.usuario.tipoUsuario !== "estudante") {
    return res.status(401).json("Sem permissão para este tipo de operação!");
  }
  const {
    params: { id: empregoId },
  } = req;
  const emprego = await prisma.emprego.findUnique({
    where: { id: empregoId },
  });
  if (!emprego) {
    return res.status(404).json("Nenhum emprego com esse id!");
  }
  res.status(200).json(emprego);
};

export const candidatarEmprego = async (req: any, res: any) => {
  // Verificando o tipo do perfil
  if (req.usuario.tipoUsuario !== "estudante") {
    return res.status(401).json("Sem permissão para este tipo de operação!");
  }

  const {
    params: { id: empregoId },
  } = req;

  // Checando se o emprego com o id informado de fato existe
  const empregoTemp = await prisma.emprego.findUnique({
    where: { id: empregoId },
  });
  if (!empregoTemp) {
    return res.status(404).json("Nenhum emprego com esse id!");
  }

  // Checando se o estudante já está matriculado neste emprego
  let candidatosTemp = empregoTemp.candidatos;
  if (!candidatosTemp.includes(req.usuario.usuarioEmail)) {
    candidatosTemp.push(req.usuario.usuarioEmail);
  } else {
    return res.status(400).json("Você já está matriculado neste emprego!");
  }

  // Editando o emprego
  const emprego = await prisma.emprego.update({
    where: {
      id: empregoId,
    },
    data: {
      status: "entrevista",
      candidatos: candidatosTemp,
    },
  });

  res
    .status(200)
    .json({ mensagem: "Você se candidatou com sucesso à esta vaga!", emprego });
};


export const cancelarCandidatura = async (req: any, res: any) => {
  // Verificando o tipo do perfil
  if (req.usuario.tipoUsuario !== "estudante") {
    return res.status(401).json("Sem permissão para este tipo de operação!");
  }

  const {
    params: { id: empregoId },
  } = req;

  // Checando se o emprego com o id informado de fato existe
  const empregoTemp = await prisma.emprego.findUnique({
    where: { id: empregoId },
  });
  if (!empregoTemp) {
    console.log("Nenhum emprego com esse id!");
    return res.status(404).json("Nenhum emprego com esse id!");
  }

  // Checando se o estudante está de fato matriculado neste emprego

  if (!empregoTemp.candidatos.includes(req.usuario.usuarioEmail)) {
    return res.status(400).json("Você não está matriculado neste emprego");
  }
  let candidatosTemp = empregoTemp.candidatos.filter(
    (email) => email !== req.usuario.usuarioEmail
  );
  console.log(candidatosTemp);

  // Editando o emprego
  const emprego = await prisma.emprego.update({
    where: {
      id: empregoId,
    },
    data: {
      status: "entrevista",
      candidatos: candidatosTemp,
    },
  });

  res.status(200).json({
    mensagem: "Você se desmatriculou desta vaga com sucesso!",
    emprego,
  });
};
