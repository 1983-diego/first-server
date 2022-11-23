const express = require("express");

const app = express();

const professores = [
    {id: 1, nome: "Guido", stack: "Backend"},
    {id: 2, nome: "Dani", stack: "Frontend"},
    {id: 3, nome: "Diego", stack: "Frontend"},
    {id: 4, nome: "Vidal", stack: "Backend"},
];

//http://localhost:3000/professores?stack=Backend  --- dentro do insomnia
app.get("/professores", (req, res) => {
    const {stack} = req.query;
    let resultado =[];

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        })
    }

    res.send(resultado)
})

app.get("/professores/:id", (req, res) => {
    
    const obterProfessor = professores.find((professor) => {
        return professor.id === Number(req.params.id)        //aprender sobre o params
    })
    res.send(obterProfessor)
})


app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000...")
});

