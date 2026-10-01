/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("All that glitters is not gold"), 
            new Phrase("A picture is worth a thousand words"),
            new Phrase("Stay hungry stay foolish"), 
            new Phrase("Less is more"), 
            new Phrase("This too shall pass")
        ],

        this.activePhrase = null;
    }
    
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    handleInteraction(button) {
        const letter = button.textContent;
        button.disabled = true;

        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);
            button.classList.add('chosen');
            
            if (this.checkForWin()) {
                this.gameOver(true);
            }

        } else {
            this.removeLife();
            button.classList.add('wrong');
        }
    }
    
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0;
    }

    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed++;

        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        const message = document.querySelector('#overlay h1');
        overlay.style.display = '';
        overlay.classList.remove('start');

        if (gameWon) {
            overlay.classList.add('win');
            message.textContent = 'You Won!';
        } else {
            overlay.classList.add('lose');
            message.textContent = 'Better Luck Next Time!';
        }
    }
};