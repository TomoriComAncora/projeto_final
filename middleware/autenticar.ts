//import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const autenticar = async (req: any, res: any, next: any) => {
  // Checando cabeçalho(header)
  const header = req.headers.authorization;

  const token = header.split(" ")[1];

  try {
    const payload = jwt.verify(token, String(process.env.JWT_SECRET));

    req.usuario = { usuarioId: payload.usuarioId, nome: payload.nome };

    next();
  } catch (error) {
    console.error(error);
  }
};

export default autenticar;
