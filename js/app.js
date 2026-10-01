/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', event => {
    const phraseUI = document.querySelector('#phrase ul');
    const keys = document.querySelectorAll('#qwerty button');
    phraseUI.innerHTML = '';

    for(let i = 0; i < keys.length;i++) {
        keys[i].disabled = false;

        keys[i].classList.add('key');
        keys[i].classList.remove('chosen');
        keys[i].classList.remove('wrong');
    }

    game = new Game();
    game.startGame();

})

const keyboard = document.getElementById('qwerty');
const keys = document.querySelectorAll('#qwerty button');

keyboard.addEventListener('click', event => {
    const button = event.target;

    if (button.classList.contains('key')) {
        game.handleInteraction(button);
    }
})