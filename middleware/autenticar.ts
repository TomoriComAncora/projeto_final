const jwt = require("jsonwebtoken");

const autenticar = async (req: any, res: any, next: any) => {
  // Checando cabeçalho(header)
  const header = req.headers.authorization;

  if(!header || !header.startsWith("Bearer")){
    return res.status(401).json("Credenciais inválidas!");
  }

  const token = header.split(" ")[1];

  try {
    const payload = jwt.verify(token, String(process.env.JWT_SECRET));

    req.usuario = { usuarioId: payload.usuarioId, usuarioEmail: payload.email, nome: payload.nome, tipoUsuario: payload.tipoUsuario };

    next();
  } catch (error) {
    console.error(error);
  }
};

export default autenticar;
