const registrar = (req, res) => {
  res.send("registrar usuario");
};

const logar = (req, res) => {
  res.send("logar usuario");
};

module.exports = { registrar, logar };
