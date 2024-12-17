let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = Number(guessInput.value);
    const resultDiv = document.getElementById('result');
    const attemptsDiv = document.getElementById('attempts');

    attempts++;

    if (guess < 1 || guess > 100) {
        resultDiv.textContent = "Please guess a number between 1 and 100.";
        return;
    }

    if (guess < secretNumber) {
        resultDiv.textContent = "Your guess is too low.";
    } else if (guess > secretNumber) {
        resultDiv.textContent = "Your guess is too high.";
    } else {
        resultDiv.textContent = `Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts!`;
        return;
    }

    if (attempts >= maxAttempts) {
        resultDiv.textContent = `Sorry, you've used all your attempts. The number was ${secretNumber}.`;
        guessInput.disabled = true; // Disable input after max attempts
    }

    attemptsDiv.textContent = `Attempts: ${attempts}/${maxAttempts}`;
    guessInput.value = ''; // Clear input field
    guessInput.focus(); // Focus back on input
}
