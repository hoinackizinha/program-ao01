const perguntas = [
{
enunciado: "qual sua cor favorita?",
alternativas: [
"azul",
"rosa"
]
},
{
enunciado: " qual filme você prefere?",
alternativas: [
"Sherek",
"Toy Story"
]
},
{
enunciado: "qual período do dia você mais gosta?",
alternativas: [
"manhã",
"tarde",
"noite"
]
},
{
enunciado: "bebida favorita?",
alternativas: [
"café",
"refrigerante"
]

},
{
enunciado: "qual viagem você gosta?",
alternativas: [
"praia",
"natureza"
]
}
];
let atual = 0;
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');
function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
alternativasContainer.innerHTML = '';
perguntaAtual.alternativas.forEach((alternativa, index) => {
const button = document.createElement('button');
button.textContent = alternativa;
button.addEventListener('click', () => {
atual++;
if (atual < perguntas.length) {
mostraPergunta();
} else {
caixaPerguntas.textContent = 'Você completou o questionário!';
alternativasContainer.innerHTML = '';
}
});
alternativasContainer.appendChild(button);
});
}
mostraPergunta();
