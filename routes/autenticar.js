const express = require("express");
const router = express.Router();

const { registrar, logar } = require("../controllers/autenticar");

router.post("/registrar", registrar);
router.post("/logar", logar);

module.exports = router;
