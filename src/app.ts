import express from "express";
const app = express();

import autenticarUsuario from "../middleware/autenticar";

import autenticarRouter from "../routes/autenticar";
import empregosRouter from "../routes/empregos";


app.use(express.json());

// Rotas
app.use("/api/v1/autenticar", autenticarRouter);
app.use("/api/v1/empregos", autenticarUsuario, empregosRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta: ${PORT}`);
});