import { Quote } from './Quote.js';

class Game {
    currentStep = 0;
    lastsStep = 5;
    value = 0;

    quotes = [{
        text: 'java script',
        category: 'a programming language'
    },
    {
        text: 'hypertext markup language',
        category: 'html'
    },
    {
        text: 'canvas',
        category: 'html tag'
    },
    {
        text: 'doctype',
        category: 'html'
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
    guess(letter, event) {
        event.target.disabled = true;
        if (this.quote.guess(letter)){
            this.drawQuote();
        } else {
            this.currentStep++;
            this.value += 34;
            console.log(this.value);
            document.getElementsByClassName('imgstep')[0].style.transform = `rotate(${this.value}deg)`;
            if(this.currentStep == this.lastsStep) {
                this.loosing();
            }
        }
    }

    drawLetters() {
        for (let i=0; i<26; i++) {
            const label = (i+10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', (event) => this.guess(label, event))
            this.lettersWrapper.appendChild(button);
        }
    }
    drawQuote(){
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content;
        if(!content.includes('_')) {
            this.winning();
        }
    }

    start() {
        document.getElementsByClassName('imgstep')[0].style.transform = `rotate(${this.value}deg)`;
        this.drawLetters();
        this.drawQuote();
    }

    winning() {
        this.wordWrapper.innerHTML = 'CONGRATULATIONS! YOU WON';
        this.lettersWrapper.innerHTML = '';
    }

    loosing() {
        this.wordWrapper.innerHTML = 'UNFORTUNATELY YOU HAVE LOST';
        this.lettersWrapper.innerHTML = '';
    }
}
const game = new Game({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output')
});
game.start();