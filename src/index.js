const express = require("express");

const app = express();

const usuarios = [
    {id: 11, nome: "maria", idade: 21},
    {id: 2, nome: "pedro", idade: 22},
    {id: 4, nome: "ana", idade: 25},
    {id: 123, nome: "elen", idade: 17}
];


app.get("/usuarios", (requisicao, resposta) => {
    resposta.send(usuarios)
})

app.listen(3000, () => {
    console.log("Servidor inicializado na porta 3000")
})