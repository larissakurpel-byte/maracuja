const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está procurando uma nova leitura de romance internacional para o final de semana. Qual ambientação chama mais sua atenção de primeira?",
        alternativas: [
            {
                texto: "Um romance de época com bailes, trajes sofisticados e intrigas da alta sociedade inglesa.",
                afirmacao: "Você se atrai por histórias clássicas e apaixonantes ambientadas em épocas passadas."
            },
            {
                texto: "Um romance contemporâneo leve e divertido, cheio de piadas e situações do dia a dia.",
                afirmacao: "Sua preferência é por tramas modernas, dinâmicas e repletas de bom humor."
            }
        ]
    },
    {
        enunciado: "Ao escolher a relação entre os personagens principais, qual 'trópico' de romance mais te agrada?",
        alternativas: [
            {
                texto: "Namoro de mentira ('Fake Dating'), onde o casal finge estar junto até que sentimentos reais apareçam.",
                afirmacao: "Adora acompanhar a evolução gradual do afeto através do convívio forçado entre os protagonistas."
            },
            {
                texto: "De inimigos a amantes ('Enemies to Lovers'), onde implicâncias e brigas viram uma paixão avassaladora.",
                afirmacao: "Gosta de diálogos afiados e de sentir a intensa tensão magnética entre rivais."
            }
        ]
    },
    {
        enunciado: "Em qual cenário você prefere acompanhar o desenrolar dessa história de amor?",
        alternativas: [
            {
                texto: "Em uma grande metrópole agitada como Nova York ou Londres.",
                afirmacao: "Sente fascínio por cenários urbanos e modernos como pano de fundo para grandes paixões."
            },
            {
                texto: "Em uma pequena cidade acolhedora no interior ou em uma vila histórica à beira-mar.",
                afirmacao: "Prefere cenários aconchegantes que trazem uma sensação de conforto e acolhimento."
            }
        ]
    },
    {
        enunciado: "Qual é a sua expectativa emocional ao abrir as páginas desse livro?",
        alternativas: [
            {
                texto: "Uma história emocionante e marcante, capaz de arrancar algumas lágrimas.",
                afirmacao: "Busca conexões profundas e tramas com uma boa dose de drama e superação."
            },
            {
                texto: "Uma leitura leve e reconfortante para relaxar, sorrir e se esquecer dos problemas.",
                afirmacao: "Procura histórias que tragam leveza e sirvam como um refúgio quentinho no final do dia."
            }
        ]
    },
    {
        enunciado: "Qual tipo de desfecho deixa você mais satisfeito ao terminar a leitura?",
        alternativas: [
            {
                texto: "O clássico 'Felizes para Sempre', onde todos os conflitos se resolvem perfeitamente.",
                afirmacao: "Valoriza a satisfação de um final feliz tradicional com tudo no seu devido lugar."
            },
            {
                texto: "Um final realista e maduro, focado no crescimento pessoal de cada personagem.",
                afirmacao: "Aprecia desfechos maduros que refletem a evolução real e as nuances das relações."
            }
        ]
    },
    {
        enunciado: "Qual o formato do livro que você mais gosta de acompanhar?",
        alternativas: [
            {
                texto: "Livro único, com começo, meio e fim bem definidos em poucas páginas.",
                afirmacao: "Prefere histórias objetivas e completas em um único volume."
            },
            {
                texto: "Série ou saga de livros, para acompanhar a evolução dos personagens por muito tempo.",
                afirmacao: "Gosta de se aprofundar em universos longos e acompanhar sagas estendidas."
            }
        ]
    },
    {
        enunciado: "Como você prefere que seja o ritmo do desenvolvimento do romance?",
        alternativas: [
            {
                texto: "Amor à primeira vista ('Insta-love'), com atração rápida e intensa logo nos primeiros capítulos.",
                afirmacao: "Se encanta com paixões arrebatadoras e conexões instantâneas."
            },
            {
                texto: "Desenvolvimento lento ('Slow Burn'), onde os sentimentos vão crescendo aos poucos.",
                afirmacao: "Aprecia a paciência e a expectativa de um romance construído lentamente."
            }
        ]
    },
    {
        enunciado: "Qual elemento extra você adora ver em uma história de amor?",
        alternativas: [
            {
                texto: "Um toque de mistério, segredos do passado ou investigação no meio da trama.",
                afirmacao: "Gosta quando o romance vem acompanhado de mistérios e segredos para desvendar."
            },
            {
                texto: "Foco total na amizade e no apoio mútuo entre o casal ao longo do livro.",
                afirmacao: "Valoriza histórias focadas no companheirismo e na cumplicidade do casal."
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
    caixaPerguntas.textContent = "Seu Perfil de Leitor de Romance:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
