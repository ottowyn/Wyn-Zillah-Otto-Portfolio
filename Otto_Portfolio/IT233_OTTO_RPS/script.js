let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];
const resultEl = document.getElementById('result');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const playerMoveEl = document.getElementById('playerMove');
const computerMoveEl = document.getElementById('computerMove');

const choiceButtons = document.querySelectorAll('.choice-btn');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    }

    return 'computer';
}

function getMoveEmoji(choice) {
    const emojis = {
        rock: '🪨',
        paper: '📄',
        scissors: '✂️'
    };
    return emojis[choice] || '--';
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    // Update displays
    playerMoveEl.textContent = getMoveEmoji(playerChoice);
    computerMoveEl.textContent = getMoveEmoji(computerChoice);

    // Remove active class from all buttons
    choiceButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    document.querySelector(`[data-choice="${playerChoice}"]`).classList.add('active');

    // Update score and result
    if (winner === 'player') {
        playerScore++;
        resultEl.innerHTML = `<p>🎉 You won! ${playerChoice} beats ${computerChoice}</p>`;
    } else if (winner === 'computer') {
        computerScore++;
        resultEl.innerHTML = `<p>😢 Computer won! ${computerChoice} beats ${playerChoice}</p>`;
    } else {
        resultEl.innerHTML = `<p>🤝 It's a draw! Both chose ${playerChoice}</p>`;
    }

    // Update scores
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    playerMoveEl.textContent = '--';
    computerMoveEl.textContent = '--';
    resultEl.innerHTML = '<p>Choose your move!</p>';
    choiceButtons.forEach(btn => btn.classList.remove('active'));
}
