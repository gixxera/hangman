const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game.statusMessage;

  game.puzzle.split('').forEach((letter) => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  })
}

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  let allowedGuesses = 0;
  const splitPuzzle = puzzle.split('');
  if (splitPuzzle.length > 8) {
    allowedGuesses = splitPuzzle.length / 3;
  } else {
    allowedGuesses = 3;
  }
  game = new Hangman(puzzle, Math.ceil(allowedGuesses));
  render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();



