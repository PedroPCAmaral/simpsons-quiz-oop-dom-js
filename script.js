let index = 0;

function iniciarQuiz(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    mostrar();
}

function mostrar(){
    let q = perguntas[index];

    document.getElementById("pergunta").innerText = q.pergunta;

    let opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";

    q.opcoes.forEach(op => {
        let btn = document.createElement("button");
        btn.innerText = op.texto;

        btn.onclick = () => {
            for (let p in op.pontos){
                personagens[p].adicionarPontos(op.pontos[p]);
            }

            index++;

            if(index < perguntas.length){
                mostrar();
            } else {
                resultado();
            }
        };

        opcoesDiv.appendChild(btn);
    });
}

function resultado(){
    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    let vencedor = null;

    for (let p in personagens){
        if(!vencedor || personagens[p].pontos > personagens[vencedor].pontos){
            vencedor = p;
        }
    }

    let char = personagens[vencedor];

    document.getElementById("nome").innerText = char.nome;
    document.getElementById("desc").innerText = char.descricao;
    document.getElementById("img").src = char.imagem;
    document.getElementById("pontuacao").innerText = "Pontuação: " + char.pontos;
}

function reiniciar(){
    for (let p in personagens){
        personagens[p].resetar();
    }

    index = 0;

    document.getElementById("resultado").style.display = "none";
    document.getElementById("inicio").style.display = "block";
}
