const express = require("express");
const cors = require("cors");
const postsRoutes = require("./routes/postsRoutes");

// instanciando o express para acessar as funcionalidades contidas nele
const app = express();

// instanciando/executando o cors
app.use(cors());

// parseando/transformando o "body"
app.use(express.json());

// definir uma rota padrão
app.use("/posts", postsRoutes);


module.exports = app;