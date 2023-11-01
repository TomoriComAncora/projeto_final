const express = require("express");
const router = express.Router();

const { registrar, logar } = require("../controllers/autenticar");

const {validar, usuarioSchema, usuarioSchemaLogin} = require("../middleware/validar");

router.post("/registrar", validar(usuarioSchema), registrar);
router.post("/logar", validar(usuarioSchemaLogin), logar);

module.exports = router;
