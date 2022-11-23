const professores = require("./dadosProfessores");

const filtrarProfessores = (req, res) => {
    const {stack} = req.query;
    let resultado =[];

    console.log("cheguei no controlador de listagem do professor")

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        })
    }

    res.send(resultado)
}

const encontrarProfessor = (req, res) => {
    
    const obterProfessor = professores.find((professor) => {
        return professor.id === Number(req.params.id)        //aprender sobre o params
    })
    res.send(obterProfessor)
}

module.exports = {
    filtrarProfessores,
    encontrarProfessor,
    professores
}