import express from "express";
const router = express.Router();

import {
  mostrarTodosEmpregosCriados,
  criarEmprego,
  mostrarUmEmpregoEmpresa,
  editarEmprego,
  deletarEmprego,
} from "../controllers/empregosEmpresa";

import { validar, empregoSchema } from "../middleware/validar";

router.get("/", mostrarTodosEmpregosCriados);
router.post("/", validar(empregoSchema), criarEmprego);
router.get("/:id", mostrarUmEmpregoEmpresa);
router.patch("/:id", validar(empregoSchema), editarEmprego);
router.delete("/:id", deletarEmprego);

export default router;
