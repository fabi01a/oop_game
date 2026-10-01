/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseUl = document.querySelector('#phrase ul');

        for (let i = 0; i < this.phrase.length;i++) {
            const newLi = document.createElement('li');
            if (this.phrase[i] === " "){
                newLi.classList.add('space');
                newLi.textContent = this.phrase[i];
            } else {
                newLi.classList.add('hide', 'letter', this.phrase[i]);
                newLi.textContent = this.phrase[i];
            }
            phraseUl.appendChild(newLi);
        }
    }

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll(`.${letter}`);
        for (let i = 0; i < matchedLetters.length; i++) {
            matchedLetters[i].classList.remove('hide');
            matchedLetters[i].classList.add('show');

        }
    }
}