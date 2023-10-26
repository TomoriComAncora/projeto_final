// importando a biblioteca express
const express = require("express");
const app = express();
const autenticarUsuario = require("./middleware/autenticar");

const autenticarRouter = require("./routes/autenticar");
const empregosRouter = require("./routes/empregos");

app.use(express.json());
// rotas
app.use("/api/v1/autenticar", autenticarRouter);

app.use("/api/v1/empregos",autenticarUsuario, empregosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ouvindo porta ${PORT}`);
});
