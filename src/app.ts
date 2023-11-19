import express from "express";
const app = express();

import autenticarUsuario from "../middleware/autenticar";
import autenticarRouter from "../routes/autenticar";
import empregosRouter from "../routes/empregosEmpresa";
import empregosEstudanteRouter from "../routes/empregosEstudante";

// Importando erro específico para rota não encontrada
import { notFound } from "../middleware/not-found";

app.use(express.json());

// Rotas
app.use("/api/v1/autenticar", autenticarRouter);
app.use("/api/v1/empresa/empregos", autenticarUsuario, empregosRouter);
app.use(
  "/api/v1/estudante/empregos",
  autenticarUsuario,
  empregosEstudanteRouter
);

app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta: ${PORT}`);
});
