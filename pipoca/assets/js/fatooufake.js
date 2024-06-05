// Lista de fatos
var facts = [
    { text: 'A doença cardíaca é a principal causa de morte em todo o mundo.', isFact: true },
    { text: 'A hipertensão arterial é um dos principais fatores de risco para doenças cardíacas.', isFact: true },
    { text: 'Apenas homens podem sofrer de doenças cardíacas.', isFact: false },
    { text: 'Exercício físico não tem impacto na saúde do coração.', isFact: false },
    { text: 'Fumar aumenta significativamente o risco de doença cardíaca.', isFact: true },
    { text: 'As doenças cardíacas não podem ser prevenidas.', isFact: false },
    { text: 'O colesterol não afeta a saúde do coração.', isFact: false },
    { text: 'A obesidade aumenta o risco de doenças cardíacas', isFact: true },
    { text: 'O estresse crônico pode contribuir para doenças cardíacas.', isFact: true },
    { text: 'Beber álcool não afeta a saúde do coração.', isFact: false },
];

// Inicializa a pontuação
var score = 0;

// Inicializa o índice do fato atual
var currentFact = 0;

// Função para atualizar o texto do fato na tela
function updateFactText() {
    document.getElementById('factText').textContent = facts[currentFact].text;
}

// Adiciona um ouvinte de evento 'click' ao botão 'FATO'
document.getElementById('factButton').addEventListener('click', function() {
    checkAnswer(true);
});

// Adiciona um ouvinte de evento 'click' ao botão 'FAKE'
document.getElementById('fakeButton').addEventListener('click', function() {
    checkAnswer(false);
});

// Função para verificar a resposta
function checkAnswer(answer) {
    // Verifica se a resposta está correta
    if (facts[currentFact].isFact === answer) {
        document.getElementById('feedback').innerHTML = '<p style="color: green;">Parabéns! Você acertou! 😊</p>';
        score++; // Incrementa a pontuação
    } else {
        document.getElementById('feedback').innerHTML = '<p style="color: blue;">Ops! Resposta errada! 😞</p>';
    }

    // Avança para o próximo fato
    currentFact++;
    if (currentFact < facts.length) {
        updateFactText();
    } else {
        // Calcula a média
        var average = score / facts.length;
        var message = average >= 0.6 ? 'Você está atento sobre doenças cardíacas! 👍' : 'Você não está atento às doenças cardíacas. 😞';
        document.getElementById('feedback').innerHTML += `<p>Você completou a verificação de fatos! Sua pontuação é ${score} de ${facts.length}. ${message}</p>`;
        
        // Reinicia o teste após 20 segundos
        setTimeout(function() {
            currentFact = 0;
            score = 0;
            updateFactText();
            document.getElementById('feedback').innerHTML = '';
        }, 20000);
    }
}

// Função para embaralhar os fatos
function shuffleFacts() {
    for (let i = facts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [facts[i], facts[j]] = [facts[j], facts[i]];
    }
}

// Inicia a verificação de fatos
shuffleFacts();
updateFactText();
