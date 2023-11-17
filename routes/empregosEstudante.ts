import express from "express";
const router = express.Router();

import {
  mostrarTodosEmpregos,
  candidatarEmprego,
  cancelarCandidatura,
  mostrarUmEmpregoEstudante,
} from "../controllers/empregosEstudante";

router.get("/", mostrarTodosEmpregos);
router.get("/mostrar/:id", mostrarUmEmpregoEstudante);
router.patch("/candidatar/:id", candidatarEmprego);
router.patch("/cancelar/:id", cancelarCandidatura);

export default router;
