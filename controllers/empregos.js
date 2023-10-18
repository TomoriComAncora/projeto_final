const mostrarTodosEmpregos =
  ("/api/v1/empregos",
  (req, res) => {
    res.send("mostrar todos os empregos");
  });

const criarEmprego =
  ("/api/v1/empregos",
  (req, res) => {
    res.send("criar emprego");
  });

const mostrarUmEmprego =
  ("/api/v1/empregos/:id",
  (req, res) => {
    res.send("buscar um emprego");
  });

const editarEmprego =
  ("/api/v1/empregos/:id",
  (req, res) => {
    res.send("editar um emprego");
  });

const deletarEmprego =
  ("/api/v1/empregos/:id",
  (req, res) => {
    res.send("deletar um emprego");
  });

module.exports = {
  mostrarTodosEmpregos,
  criarEmprego,
  mostrarUmEmprego,
  editarEmprego,
  deletarEmprego,
};
