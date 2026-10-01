/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("All that glitters is not gold"), 
            new Phrase("A picture is worth a thousand words"),
            new Phrase("Stay hungy, stay foolish"), 
            new Phrase("Less is more"), 
            new Phrase("This too shall pass")
        ],
        this.activePhrase = null;
    }
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
};