# simpsons-quiz-oop-dom-js
Aplicação web interativa desenvolvida com HTML, CSS e JavaScript que identifica com qual personagem da série The Simpsons o usuário mais se identifica. Utiliza orientação a objetos, manipulação do DOM e lógica de pontuação dinâmica para fornecer resultados em tempo real.

🎮 Simpsons Quiz – Descubra Qual Personagem Você É
Projeto desenvolvido em HTML, CSS e JavaScript puro que permite ao usuário descobrir com qual personagem da série The Simpsons ele mais se identifica, com base em um questionário interativo.
________________________________________
📌 📖 Sobre o Projeto
Este sistema web apresenta um quiz com 10 perguntas, onde cada resposta contribui com uma pontuação para diferentes personagens.
Ao final do quiz:
➡️ O sistema calcula automaticamente as pontuações
➡️ Exibe o personagem com maior pontuação
________________________________________
🎯 Objetivo
Aplicar conceitos fundamentais de desenvolvimento web:
•	Manipulação do DOM (Document Object Model)
•	Estruturas condicionais
•	Laços de repetição
•	Arrays e Objetos
•	Orientação a Objetos (uso de classes e métodos)
________________________________________
🧠 Como Funciona
Cada pergunta possui 3 opções de resposta.
Cada opção:
•	Adiciona pontos para todos os personagens
•	Porém com valores diferentes (pontuação oculta)
🔎 Exemplo de pontuação:
Opção escolhida	Homer	Bart	Lisa	Marge
Opção 1	+3	+1	+0	+2
________________________________________
📊 Processo final:
•	O sistema soma todos os pontos
•	Compara os resultados
•	Exibe o personagem vencedor
________________________________________
🧠 Orientação a Objetos
O projeto utiliza programação orientada a objetos para organizar os personagens.
Foi criada uma classe chamada Personagem, responsável por representar cada personagem do sistema.
📌 Estrutura da classe:
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
✔ Benefícios:
•	Código mais organizado
•	Melhor reutilização
•	Mais fácil manutenção
•	Atende ao requisito de orientação a objetos
________________________________________
🗂️ Estrutura do Projeto
simpsons-quiz/
│
├── index.html      → Estrutura da página
├── style.css       → Estilo visual
├── script.js       → Lógica do sistema
├── data.js         → Dados + classe Personagem
________________________________________
📄 Arquivos Explicados
🖥️ index.html
Responsável pela interface do sistema:
•	Tela inicial
•	Perguntas
•	Resultado final
________________________________________
🎨 style.css
Define o estilo visual:
•	Tema escuro
•	Botões interativos
•	Layout centralizado
________________________________________
⚙️ script.js
Controla toda a lógica do sistema.
Funções principais:
•	iniciarQuiz() → inicia o quiz
•	mostrar() → exibe perguntas dinamicamente
•	resultado() → calcula o personagem vencedor
•	reiniciar() → reinicia o sistema
________________________________________
🧠 data.js
Responsável pelos dados e estrutura orientada a objetos.
Contém:
✔ Classe Personagem
✔ Instâncias dos personagens
✔ Lista de perguntas
________________________________________
🧱 Tecnologias Utilizadas
•	HTML5
•	CSS3
•	JavaScript (ES6)
________________________________________
🚀 Como Executar
▶️ Local (VS Code)
1.	Extraia o projeto
2.	Abra a pasta no VS Code
3.	Execute:
index.html
________________________________________
🌐 Online (GitHub Pages)
1.	Crie um repositório no GitHub
2.	Envie os arquivos
3.	Vá em:
Settings → Pages
4.	Configure:
Branch: main
Folder: /root
________________________________________
🔄 Funcionalidades
✔ Tela inicial
✔ Quiz com 10 perguntas
✔ Sistema de pontuação automática
✔ Resultado com personagem
✔ Botão de reinício
________________________________________
🧪 Conceitos Aplicados
•	Manipulação do DOM
•	Funções JavaScript
•	Estruturas condicionais (if)
•	Laços de repetição (for)
•	Arrays e Objetos
•	Orientação a Objetos (classes e métodos)
________________________________________
🖼️ Imagens
As imagens dos personagens são carregadas via links externos, garantindo:
✔ Projeto leve
✔ Fácil execução
✔ Compatibilidade com GitHub Pages
________________________________________
📊 Exemplo de Resultado
Personagem: Lisa Simpson
Pontuação: Maior entre todos
Descrição: Inteligente e responsável
________________________________________
📌 Melhorias Futuras
•	Barra de progresso
•	Sons e efeitos
•	Responsividade (mobile)
•	Animações avançadas
•	Ranking de pontuação
________________________________________
👨‍💻 Autor
Pedro Paulo Costa do Amaral
________________________________________
📄 Licença
Este projeto foi desenvolvido para fins acadêmicos.
________________________________________
⭐ Conclusão
Este projeto demonstra, na prática, a aplicação de conceitos essenciais do desenvolvimento web, utilizando orientação a objetos para organizar a lógica dos personagens, além de proporcionar uma experiência interativa e funcional ao usuário.
________________________________________
