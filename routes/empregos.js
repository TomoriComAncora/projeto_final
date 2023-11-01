const express = require("express");
const router = express.Router();

const {
  mostrarTodosEmpregos,
  criarEmprego,
  mostrarUmEmprego,
  editarEmprego,
  deletarEmprego,
} = require("../controllers/empregos");

const {validar, empregoSchema} = require("../middleware/validar");

router.get("/", mostrarTodosEmpregos);
router.post("/", validar(empregoSchema), criarEmprego);
router.get("/:id", mostrarUmEmprego);
router.patch("/:id", validar(empregoSchema), editarEmprego);
router.delete("/:id", deletarEmprego);

module.exports = router;
