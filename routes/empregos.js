const express = require("express");
const router = express.Router();

const {
  mostrarTodosEmpregos,
  criarEmprego,
  mostrarUmEmprego,
  editarEmprego,
  deletarEmprego,
} = require("../controllers/empregos");

router.get("/", mostrarTodosEmpregos);
router.post("/", criarEmprego);
router.get("/:id", mostrarUmEmprego);
router.patch("/:id", editarEmprego);
router.delete("/:id", deletarEmprego);

module.exports = router;
