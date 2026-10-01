/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', event => {
    game = new Game();
    game.startGame();
});

const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', event => {
    const button = event.target;
    console.log(button);

    if (button.classList.contains('key')) {
        game.handleInteraction(button);
    }
})