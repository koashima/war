console.log("hello");

class Deck { 
    constructor(){
        this.deck = [];

        const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        for(let suit in suits) { 
            for(let value in values) { 
                this.deck.push(`${suits[suit]}${values[value]}`);
            }
        }   
    }
    shuffle() {
        const deck = this.deck;
        let m = deck.length;
        let i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        return deck;
    }

}
let deck
let p1Deck
let dDeck

let cCard = document.querySelector('#cf');
let dCard = document.querySelector('#df')

function init(){
    shuffleSplit();
}







function shuffleSplit(){
    let deck = new Deck;
    sDeck = deck.shuffle();
    let p1Deck = sDeck.splice(0,26);
    let dDeck = sDeck;
}
