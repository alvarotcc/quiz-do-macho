// Variáveis para armazenar as respostas
let step = 1;
let name = '';
let age = '';
let profession = '';

// Função que avança para a próxima pergunta
function nextStep() {
    const input = document.getElementById("nameInput");
    const questionText = document.getElementById("question-text");

    // Lógica para determinar qual pergunta exibir
    if (step === 1) {
        name = input.value;
        if (name) {
            questionText.textContent = "Qual sua idade?";
            input.value = ''; 
            input.placeholder = "Digite sua idade";
            step = 2;
            document.body.style.backgroundColor = "#FF9800"; // Cor para a segunda pergunta
        } else {
            alert("Por favor, insira seu nome.");
        }
    } else if (step === 2) {
        age = input.value;
        if (age && !isNaN(age)) {
            questionText.textContent = "Qual sua profissão?";
            input.value = ''; 
            input.placeholder = "Digite sua profissão";
            step = 3;
            document.body.style.backgroundColor = "#4CAF50"; // Cor para a terceira pergunta
        } else {
            alert("Por favor, insira uma idade válida.");
        }

    } else if (step === 3) {
        profession = input.value;
        if (profession) {
            // Exibe a nova pergunta "Já pariu?"
            document.getElementById("third-question").style.display = "block";
            document.getElementById("question-container").style.display = "none"; // Esconde a área das perguntas
            step = 4; // Atualiza o passo para a nova pergunta
        } else {
            alert("Por favor, insira sua profissão.");
        }
    }
}

// Função que lida com as respostas "Sim" ou "Não" para "Já pariu?"
function answerPariu(answer) {
    let finalMessage = '';

    if (answer === 'sim') {
        finalMessage = `${name}, você é mulher!`;
    } else {
        finalMessage = `${name} e você é gay.`;  // Resposta padrão caso a resposta seja "Não"
    }

    // Exibe a resposta final
    displayFinalAnswer(finalMessage);
}

// Função que exibe a resposta final
function displayFinalAnswer(message) {
    // Muda o fundo da página para uma imagem local
    document.body.style.backgroundImage = "url('./assets/bugat)"; // Substitua pelo caminho da sua imagem
    document.body.style.backgroundSize = "cover"; // Para que a imagem cubra toda a tela
    document.body.style.backgroundPosition = "center"; // Centraliza a imagem na tela
    document.body.style.backgroundAttachment = "fixed"; // A imagem fica fixa ao rolar a página

    const finalAnswer = document.getElementById("final-answer");
    const finalAnswerText = document.getElementById("final-answer-text");

    finalAnswerText.textContent = message;
    finalAnswer.style.display = "block"; // Exibe a resposta final
    document.getElementById("third-question").style.display = "none"; // Esconde a nova pergunta

    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "inline-block"; // Exibe o botão "Próxima"
}

// Função que exibe a segunda pergunta (Sim ou Não)
function nextQuestion() {
    document.getElementById("second-question").style.display = "block";
    document.getElementById("final-answer").style.display = "none"; // Esconde a resposta final
}

// Função que lida com as respostas "Sim" ou "Não"
function answerQuestion(answer) {
    if (answer === 'sim') {
        document.getElementById("sim-response").style.display = "block"; // Exibe resposta para "Sim"
    } else {
        document.getElementById("nao-response").style.display = "block"; // Exibe resposta para "Não"
    }
    document.getElementById("second-question").style.display = "none"; // Esconde as opções de pergunta
}

// Função para reiniciar o fluxo de perguntas
function restart() {
    location.reload(); // Recarrega a página para reiniciar
}

// Função para alterar a cor de fundo da página
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Cor aleatória
    document.body.style.backgroundColor = randomColor; // Aplica a cor aleatória no fundo
}
