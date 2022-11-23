const express = require("express");

const {filtrarProfessores, encontrarProfessor} = require("./controladores")

const app = express();

//next, intermediário

const primeiroIntermediario = (req, res, next) => {
    console.log("passei no primeiro intermediário")
    next()
}

const segundoIntermediario = (req, res, next) => {
    console.log("passei no segundo intermediário")
    next()
}

const intermediarioDaRota = (req, res, next) => {
    console.log("passei no intermediário da rota")
    next()
}

app.use(primeiroIntermediario)
app.use(segundoIntermediario)


//http://localhost:3000/professores?stack=Backend  --- dentro do insomnia
app.get("/professores", intermediarioDaRota, filtrarProfessores)

app.get("/professores/:id", encontrarProfessor)


app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000...")
});