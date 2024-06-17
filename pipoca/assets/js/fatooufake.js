// 

// -------- New code --------------------------------------


// Lista de fatos
var facts = [
    { 
        text: 'A doença cardíaca é a principal causa de morte em todo o mundo.', 
        isFact: true,
        info: 'A doença cardíaca é responsável por uma grande porcentagem de mortes globalmente. Fatores como má alimentação, falta de exercícios, e genética podem contribuir.'
    },
    { 
        text: 'A hipertensão arterial é um dos principais fatores de risco para doenças cardíacas.', 
        isFact: true,
        info: 'A hipertensão, ou pressão alta, pode levar ao endurecimento e espessamento das artérias, o que pode aumentar o risco de ataques cardíacos e derrames.'
    },
    { 
        text: 'Apenas homens podem sofrer de doenças cardíacas.', 
        isFact: false,
        info: 'Ambos os sexos podem sofrer de doenças cardíacas. No entanto, os sintomas podem se manifestar de forma diferente em homens e mulheres.'
    },
    { 
        text: 'Exercício físico não tem impacto na saúde do coração.', 
        isFact: false,
        info: 'Exercícios regulares são essenciais para manter o coração saudável. Eles ajudam a reduzir a pressão arterial, o colesterol e a manter um peso saudável.'
    },
    { 
        text: 'Fumar aumenta significativamente o risco de doença cardíaca.', 
        isFact: true,
        info: 'O tabagismo é um dos principais fatores de risco evitáveis para doenças cardíacas. Substâncias químicas no tabaco podem danificar o coração e os vasos sanguíneos.'
    },
    { 
        text: 'As doenças cardíacas não podem ser prevenidas.', 
        isFact: false,
        info: 'Muitas doenças cardíacas podem ser prevenidas com mudanças no estilo de vida, como dieta saudável, exercícios regulares, e não fumar.'
    },
    { 
        text: 'O colesterol não afeta a saúde do coração.', 
        isFact: false,
        info: 'Níveis elevados de colesterol podem levar ao acúmulo de placas nas artérias, o que pode aumentar o risco de ataque cardíaco e derrame.'
    },
    { 
        text: 'A obesidade aumenta o risco de doenças cardíacas', 
        isFact: true,
        info: 'A obesidade pode aumentar o risco de doenças cardíacas devido a fatores como pressão alta, diabetes, e níveis elevados de colesterol.'
    },
    { 
        text: 'O estresse crônico pode contribuir para doenças cardíacas.', 
        isFact: true,
        info: 'O estresse crônico pode levar a comportamentos prejudiciais à saúde, como má alimentação e falta de exercício, e também pode ter um impacto direto no coração.'
    },
    { 
        text: 'Beber álcool não afeta a saúde do coração.', 
        isFact: false,
        info: 'O consumo excessivo de álcool pode levar a pressão alta, insuficiência cardíaca, e até mesmo a um aumento no risco de doenças cardíacas.'
    },
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
    let feedbackMessage = '';
    if (facts[currentFact].isFact === answer) {
        feedbackMessage = 'Parabéns! Você acertou! 😊';
        score++; // Incrementa a pontuação
    } else {
        feedbackMessage = 'Ops! Resposta errada! 😞';
    }
    showModal(feedbackMessage, facts[currentFact].info);

    // Avança para o próximo fato
    currentFact++;
    if (currentFact < facts.length) {
        updateFactText();
    } else {
        // Calcula a média
        var average = score / facts.length;
        var finalMessage = average >= 0.6 ? 'Você está atento sobre doenças cardíacas! 👍' : 'Você não está atento às doenças cardíacas. 😞';
        showModal(`Você completou a verificação de fatos! Sua pontuação é ${score} de ${facts.length}. ${finalMessage}`, '');
        
        // Reinicia o teste após 20 segundos
        setTimeout(function() {
            currentFact = 0;
            score = 0;
            shuffleFacts();
            updateFactText();
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

// Função para mostrar o modal
function showModal(message, info) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var modalMessage = document.getElementById("modalMessage");
    var modalInfo = document.getElementById("modalInfo");

    modalMessage.textContent = message;
    modalInfo.textContent = info;
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Inicia a verificação de fatos
shuffleFacts();
updateFactText();
