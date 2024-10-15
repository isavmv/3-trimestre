const caixaPrincipal = document.querySelector("caixa-principal")
const caixaPerguntas = document.querySelector("caixa-perguntas")
const caixaAlternativas = document.querySelector("caixa-alternativas")
const caixaresultado = document.querySelector("caixa-resultado")
const textoResultado = document.querySelector("texto-resultado")

const Perguntas = [
    {
         enunciado: "Probabilidade de ganhar no jogo do bicho",
         alternativas: ["50%", "100%"],
    },
    {
        enunciado: "Pular de um precipcio e cair em cima de um cavalo marinho",
        alternativas:["90%","100%"],
    },
    {
        enunciado:"Ganhar de um canguru em uma luta de box",
        alternativas: ["0%","10%"],
    }
];
let atual = 0;
let perguntaAtual;
function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
}
const caixadePergunta = document.querySelector(".caixa-perguntas");
function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
}

