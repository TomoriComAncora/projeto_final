import express from "express";
const router = express.Router();

import {
  mostrarTodosEmpregos,
  criarEmprego,
  mostrarUmEmprego,
  editarEmprego,
  deletarEmprego,
} from "../controllers/empregos";

import { validar, empregoSchema } from "../middleware/validar";

router.get("/", mostrarTodosEmpregos);
router.post("/", validar(empregoSchema), criarEmprego);
router.get("/:id", mostrarUmEmprego);
router.patch("/:id", validar(empregoSchema), editarEmprego);
router.delete("/:id", deletarEmprego);

export default router;
