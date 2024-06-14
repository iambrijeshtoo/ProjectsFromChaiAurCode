let randomNumber = parseInt(Math.random() * 100 + 1);

const userInputField = document.querySelector("#userInputField");
const submitButton = document.querySelector("#submitButton");
const previousGuesses = document.querySelector(".previousGuesses");
const remainingGuesses = document.querySelector(".remainingGuesses");
const lowOrHighValueMessage = document.querySelector(".lowOrHighValueMessage");
const restartTheGame = document.querySelector(".result");

const pTag = document.createElement("p");

let previousGuessesList = [];
let numberOfGuessesChance = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function name(e) {
    e.preventDefault();
    const guess = parseInt(userInputField.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number!");
  } else if (guess < 1) {
    alert("Please enter a number more than 0!");
  } else if (guess > 100) {
    alert("Please enter a valid number more than 100!");
  } else {
    previousGuessesList.push(guess);
    if (numberOfGuessesChance === 11) {
      displayGuess(guess);
      displayMessage(`GAME OVER! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guess it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high!`);
  }
}

function displayGuess(guess) {
  userInputField.value = "";
  previousGuesses.innerHTML += `${guess}, `;
  numberOfGuessesChance++;
  remainingGuesses.innerHTML = `${11 - numberOfGuessesChance}`;
}

function displayMessage(message) {
  lowOrHighMessage.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInputField.value = "";
  userInputField.setAttribute("disable", "");
  pTag.classList.add("button");
  pTag.innerHTML = `<h2 id="newGame">Restart The Game</h2>`;
  restartTheGame.appendChild(pTag);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuessesList = [];
    numberOfGuessesChance = 1;
    previousGuesses.innerHTML = "";
    remainingGuesses.innerHTML = `${11 - numberOfGuessesChance}`;
    userInputField.removeAttribute("disable");
    restartTheGame.removeChild(pTag);
    playGame = true;
  });
}
