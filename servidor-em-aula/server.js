const app = require("./src/app");

const door = 8080;

app.listen(door, () => {
    console.log(`Servidor rodando na porta ${door}`)
})