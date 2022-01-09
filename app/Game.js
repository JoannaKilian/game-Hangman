import { Quote } from './Quote.js'

class Game {
    quotes = [{
        text: 'pan tadeusz',
        category: 'Utwór literacki'
    },
    {
        text: 'janko muzykant',
        category: 'Utwór literacki'
    },
    {
        text: 'akademia pana kleksa',
        category: 'film'
    }, {
        text: 'ogniem i mieczem',
        category: 'film'
    }]
    constructor({
        lettersWrapper, 
        categoryWrapper, 
        wordWrapper, 
        outputWrapper
    }) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        const {text, category} = this.quotes[Math.floor(Math.random()*this.quotes.length)];
        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(text);
    }
    guess(letter) {
        console.log(letter)
    }

    drawLetters() {
        for (let i=0; i<26; i++) {
            const label = (i+10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', () => this.guess(label))
            this.lettersWrapper.appendChild(button);
            console.log(label);
        }
    }

    start() {
        this.drawLetters();
    }
}
const game = new Game({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output')
});
game.start();