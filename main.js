 const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal relação entre o campo e a cidade?",
        alternativas: [
            {
                texto: "A cidade depende do campo para a produção de alimentos e matérias-primas, enquanto o campo depende da cidade para acesso a serviços, tecnologia e mercados consumidores."
                afirmacao: ""
            },
            {
                texto: "A relação entre campo e cidade é de interdependência e troca, onde um complementa o outro em termos de recursos, mão de obra e desenvolvimento socioeconômico.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "De que maneira o desenvolvimento de infraestrutura, como o acesso à internet de alta velocidade e melhores rodovias, impacta a relação e a qualidade de vida tanto no campo quanto na cidade?",
        alternativas: [
            {
                texto: "O desenvolvimento de infraestrutura, especialmente o acesso à internet de alta velocidade e melhores rodovias, diminui o isolamento do campo, facilitando o acesso a mercados, educação e saúde, e ao mesmo tempo otimiza a logística de distribuição de produtos agrícolas para a cidade, beneficiando ambos os ambientes.",
                afirmacao: "Muitas pessoas não têm acesso a informações adequadas sobre o impacto de suas ações no meio ambiente, o que leva à falta de conscientização e, consequentemente, a comportamentos prejudiciais à <b>sustentabilidade</b>.</b>."
            },
            {
                texto: "Essa melhoria na infraestrutura promove a descentralização de oportunidades, permitindo que mais pessoas trabalhem remotamente no campo e desfrutem de uma maior qualidade de vida, ao passo que as cidades se beneficiam de um fluxo mais eficiente de bens e serviços essenciais, resultando em uma interdependência mais dinâmica e equilibrada.",
                afirmacao: "A ausência de incentivos governamentais e de uma legislação <b>rigorosa </b>faz com que empresas e indivíduos não se sintam motivados a adotar práticas sustentáveis, contribuindo para a continuidade de ações nocivas ao meio ambiente."
            }
        ]
    },
    {
        enunciado: " De que forma a busca por maior qualidade de vida, tanto por moradores urbanos quanto rurais, tem influenciado o fluxo de pessoas entre o campo e a cidade nas últimas décadas?",
        alternativas: [
            {
                texto: "A busca por maior qualidade de vida tem levado moradores urbanos a se mudarem para o campo em busca de tranquilidade, contato com a natureza e um ritmo de vida mais lento, impulsionando o crescimento de pequenas cidades e comunidades rurais.",
                afirmacao: "<b>Pragmatismo</b> A falta de investimento governamental na saúde pública decorre de orçamentos restritos e outras prioridades de gastos, levando a infraestrutura precária e serviços de saúde insuficientes."
            },
            {
                texto: "Simultaneamente, a busca por melhores oportunidades de trabalho, acesso à educação e a serviços especializados tem levado moradores rurais a migrarem para as cidades, gerando um fluxo contínuo que molda a dinâmica demográfica e econômica de ambas as regiões.",
                afirmacao: "<b>Detalhista</b>,Desigualdades na distribuição de recursos na saúde pública ocorrem quando os recursos são alocados de maneira desigual entre diferentes regiões ou populações. Isso pode resultar em acesso desigual a serviços de saúde, com áreas mais pobres ou rurais recebendo menos apoio e, portanto, enfrentando maiores desafios em termos de qualidade e acesso a cuidados médicos."
            }
        ]
    },
    {
        enunciado: "Qual o papel da sustentabilidade na relação entre o campo e a cidade, e como ela pode fortalecer a coexistência de ambos os ambientes? ",
        alternativas: [
            {
                texto: "A sustentabilidade atua como um pilar fundamental para uma relação equilibrada, incentivando práticas agrícolas mais ecológicas no campo (como a agricultura orgânica e o manejo de recursos hídricos) que garantem a produção de alimentos saudáveis para a cidade e preservam os ecossistemas, beneficiando diretamente a qualidade de vida urbana.",
                afirmacao: "<b>Foco</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda são utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "No contexto urbano, a sustentabilidade impulsiona o desenvolvimento de tecnologias limpas, a redução do desperdício e a criação de mercados para produtos rurais sustentáveis, promovendo uma economia circular que valoriza os recursos do campo e mitiga os impactos ambientais da cidade, fortalecendo a interdependência positiva.",
                afirmacao: "<b>Curiosidade</b> Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado certa  importância. "
            }
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
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
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 