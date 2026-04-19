class Personagem {
    constructor(nome, descricao, imagem){
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.pontos = 0;
    }

    adicionarPontos(valor){
        this.pontos += valor;
    }

    resetar(){
        this.pontos = 0;
    }
}

const personagens = {
    homer: new Personagem(
        "Homer Simpson",
        "Ama comida e descanso.",
        "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
    ),

    bart: new Personagem(
        "Bart Simpson",
        "Rebelde e divertido.",
        "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
    ),

    lisa: new Personagem(
        "Lisa Simpson",
        "Inteligente e dedicada.",
        "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"
    ),

    marge: new Personagem(
        "Marge Simpson",
        "Responsável e cuidadosa.",
        "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
    )
};

const perguntas = [
{
pergunta:"O que você faz no tempo livre?",
opcoes:[
{texto:"Comer", pontos:{homer:3,bart:1,lisa:0,marge:1}},
{texto:"Aprontar", pontos:{homer:1,bart:3,lisa:1,marge:1}},
{texto:"Ajudar e estudar", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]},
{
pergunta:"Como era na escola?",
opcoes:[
{texto:"Desinteressado", pontos:{homer:3,bart:2,lisa:0,marge:1}},
{texto:"Bagunceiro", pontos:{homer:1,bart:3,lisa:0,marge:1}},
{texto:"Dedicado", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]},
{
pergunta:"Seu objetivo?",
opcoes:[
{texto:"Descansar", pontos:{homer:3,bart:1,lisa:1,marge:1}},
{texto:"Se divertir", pontos:{homer:1,bart:3,lisa:1,marge:1}},
{texto:"Cuidar da família", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]},
{
pergunta:"Você segue regras?",
opcoes:[
{texto:"Nunca", pontos:{homer:2,bart:3,lisa:0,marge:1}},
{texto:"Às vezes", pontos:{homer:2,bart:2,lisa:1,marge:2}},
{texto:"Sempre", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]},
{
pergunta:"Comida favorita?",
opcoes:[
{texto:"Donuts", pontos:{homer:3,bart:2,lisa:0,marge:1}},
{texto:"Fast food", pontos:{homer:2,bart:3,lisa:1,marge:1}},
{texto:"Saudável", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]},
{
pergunta:"Tempo livre?",
opcoes:[
{texto:"Dormir", pontos:{homer:3,bart:1,lisa:0,marge:1}},
{texto:"Bagunça", pontos:{homer:1,bart:3,lisa:1,marge:1}},
{texto:"Organizar", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]},
{
pergunta:"Na família você é?",
opcoes:[
{texto:"Relaxado", pontos:{homer:3,bart:1,lisa:0,marge:1}},
{texto:"Problemático", pontos:{homer:1,bart:3,lisa:1,marge:1}},
{texto:"Responsável", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]},
{
pergunta:"Qualidade?",
opcoes:[
{texto:"Humor", pontos:{homer:3,bart:2,lisa:1,marge:1}},
{texto:"Criatividade", pontos:{homer:1,bart:3,lisa:2,marge:1}},
{texto:"Cuidado", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]},
{
pergunta:"Problemas?",
opcoes:[
{texto:"Evito", pontos:{homer:3,bart:1,lisa:0,marge:1}},
{texto:"Improviso", pontos:{homer:1,bart:3,lisa:1,marge:1}},
{texto:"Planejo", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]},
{
pergunta:"Motivação?",
opcoes:[
{texto:"Comida", pontos:{homer:3,bart:1,lisa:0,marge:1}},
{texto:"Diversão", pontos:{homer:1,bart:3,lisa:1,marge:1}},
{texto:"Família", pontos:{homer:0,bart:1,lisa:2,marge:3}}
]}
];
