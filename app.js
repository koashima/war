class Deck { 
    constructor(){
        this.deck = [];

        const suits = ['s', 'h', 'd', 'c'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for(let suit in suits) { 
            for(let value in values) { 
                this.deck.push({0: `${suits[suit]}`,
                                1:  values[value],
                                2: `${suits[suit]}${values[value]}`})

                                // 2: `css/card-deck/images/${suits[suit]}/${suits[suit]}-${values[value]}.svg`
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

let deck, sDeck, p1Deck, dDeck;

let pile = [];

let message = document.querySelector('#message');
let chalClickDeck = document.querySelector('#challenger');
let chalCard = document.querySelector('#deal-card');
chalClickDeck.addEventListener('click', goToWar);

createShuffleSplit();


function createShuffleSplit(){
    deck = new Deck;
    console.log(deck);
    sDeck = deck.shuffle();
    p1Deck = sDeck.splice(0,26);
    dDeck = sDeck;    
}



function goToWar(){
    pile.push(p1Deck[0]);
    pile.push(dDeck[0]);
    chalCard.classList.add(`${pile[0][2]}`)
    p1Deck.shift();
    dDeck.shift();
    
    if(pile[0][1] > pile[1][1]){
    }
}


// for(let value in values) { 
//     this.deck.push({0: `${suits[suit]}${values[value]}`,
//                     1: `css/card-deck/images/${suits[suit]}/${suits[suit]}-${values[value]}.svg`});
// }