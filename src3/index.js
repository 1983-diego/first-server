const express = require("express");

const {filtrarProfessores, encontrarProfessor} = require("./controladores")

const app = express();


//http://localhost:3000/professores?stack=Backend  --- dentro do insomnia
app.get("/professores", filtrarProfessores)

app.get("/professores/:id", encontrarProfessor)


app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000...")
});