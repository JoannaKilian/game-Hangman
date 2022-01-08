class Game {
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
    }
    start() {
        for(let i=0; i++; i<26) {
            const label = (i+10).toString(36);
            console.log(label);
        }
    }
}
const game = new Game({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output')
});
game.start();