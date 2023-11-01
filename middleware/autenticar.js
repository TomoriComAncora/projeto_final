const jwt = require("jsonwebtoken");

const autenticar = async (req, res, next) => {
  // Checando cabeçalho(header)
  const header = req.headers.authorization;

  const token = header.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload)
    req.usuario = { usuarioId: payload.usuarioId, nome: payload.nome };
  console.log(req.usuario);
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = autenticar;
