import express from "express";
const router = express.Router();

import { registrar, logar} from "../controllers/autenticar"

import {
  validar,
  usuarioSchema,
  usuarioSchemaLogin,
} from "../middleware/validar";

router.post("/registrar", validar(usuarioSchema), registrar);

router.post("/logar", validar(usuarioSchemaLogin), logar);

export default router;
