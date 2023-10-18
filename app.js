// importando a biblioteca express
const express = require("express");
const app = express();

const autenticarRouter = require("./routes/autenticar");
const empregosRouter = require("./routes/empregos");

// rotas
app.use("/api/v1/autenticar", autenticarRouter);

app.use("/api/v1/empregos", empregosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ouvindo porta ${PORT}`);
});
