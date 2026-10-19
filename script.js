const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está procurando uma nova leitura de romance internacional para o final de semana. Qual gênero chama mais sua atenção de primeira?",
        alternativas: [
            {
                texto: "Um romance de época com bailes, trajes sofisticados e intrigas da alta sociedade.",
                afirmacao: "Você se atrai por histórias clássicas e envolventes de épocas passadas."
            },
            {
                texto: "Um romance contemporâneo leve e divertido, cheio de situações cotidianas.",
                afirmacao: "Sua preferência é por tramas modernas, dinâmicas e cheias de humor."
            }
        ]
    },
    {
        enunciado: "Ao escolher a dinâmica dos personagens principais, qual 'trópico' de romance mais te atrai?",
        alternativas: [
            {
                texto: "Namoro de mentira ('Fake Dating'), onde o casal finge estar junto até surgir um sentimento real.",
                afirmacao: "Adora acompanhar a evolução gradual do afeto através do convivio forçado."
            },
            {
                texto: "De inimigos a amantes ('Enemies to Lovers'), onde a implicância inicial se transforma em paixão.",
                afirmacao: "Gosta de diálogos afiados e da tensão entre personagens que começam se rivalizando."
            }
        ]
    },
    {
        enunciado: "Onde você prefere que a história se passe?",
        alternativas: [
            {
                texto: "Em uma grande metrópole internacional como Londres ou Nova York.",
                afirmacao: "Sente fascínio por cenários urbanos e agitados como pano de fundo do romance."
            },
            {
                texto: "Em uma pequena cidade acolhedora ou vila histórica no interior.",
                afirmacao: "Prefere cenários aconchegantes que trazem uma sensação de conforto à leitura."
            }
        ]
    },
    {
        enunciado: "Sobre o tom da narrativa, o que você busca ao abrir o livro?",
        alternativas: [
            {
                texto: "Uma história emocionante e profunda, capaz de arrancar algumas lágrimas.",
                afirmacao: "Busca conexões emocionais intensas e histórias que marcam pelo drama."
            },
            {
                texto: "Uma leitura leve e reconfortante para relaxar e dar risadas.",
                afirmacao: "Procura leituras que tragam leveza e sirvam como um refúgio para o dia a dia."
            }
        ]
    },
    {
        enunciado: "Como você prefere o ritmo do final da história?",
        alternativas: [
            {
                texto: "Um final feliz clássico e bem fechado, onde tudo se resolve perfeitamente.",
                afirmacao: "Valoriza a satisfação de um desfecho redondo com um final feliz garantido."
            },
            {
                texto: "Um final realista e aberto a interpretações sobre o futuro dos personagens.",
                afirmacao: "Aprecia desfechos maduros que refletem a complexidade das relações reais."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Seu perfil de leitor de romance...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
