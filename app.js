/*----- constants -----*/
class Deck { 
    constructor(){
        this.deck = [];

        const suits = ['spades', 'hearts', 'diamonds', 'clubs' ];
        const values = [0, 1, 2, 3];

        for(let suit in suits) { 
            for(let value in values) { 
                this.deck.push({0: `${suits[suit]}${values[value]}`,
                                img: `assets/${suits[suit]}${values[value]}.jpg`});
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

const deck = new Deck;
