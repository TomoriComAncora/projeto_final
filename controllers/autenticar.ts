import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registrar = async (req: any, res: any) => {
  const { nome, email, senha, tipoUsuario } = req.body;

  // Criptografando senha do usuário
  const salt = await bcrypt.genSalt(10);
  const senhaCriptografada = await bcrypt.hash(senha, salt);

  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome: nome,
        email: email,
        senha: senhaCriptografada,
        tipoUsuario: tipoUsuario,
      },
    });

    // Criando token
    const token = jwt.sign(
      {
        usuario: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        tipoUsuario: usuario.tipoUsuario,
      },
      String(process.env.JWT_SECRET),
      { expiresIn: 60 * 60 }
    );

    res.status(201).json({
      usuario: { nome: usuario.nome, tipoUsuario: usuario?.tipoUsuario },
      token,
    });
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        res
          .status(409)
          .json(
            "Email já cadastrado, não é possível criar outro usuário com o mesmo email!"
          );
      }
    }
  }
};

export const logar = async (req: any, res: any) => {
  const { email, senha } = req.body;
  const usuario = await prisma.usuario.findFirst({
    where: {
      email: email,
    },
  });

  // comparando as senhas
  const compararSenha = await bcrypt.compare(senha, usuario!.senha);
  if (!compararSenha) {
    return res.status(401).json("Credencias inválidas!");
  }

  // Criando token
  const token = jwt.sign(
    {
      usuarioId: usuario?.id,
      nome: usuario?.nome,
      email: usuario?.email,
      tipoUsuario: usuario?.tipoUsuario,
    },
    String(process.env.JWT_SECRET),
    { expiresIn: 60 * 60 }
  );
  res.status(201).json({
    usuario: { nome: usuario?.nome, TipoUsuario: usuario?.tipoUsuario },
    token,
  });
};
