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

let deck, sDeck, p1Deck, dDeck, chalRemove, dealRemove;

let pile = [];
let winnings = [];

let message = document.querySelector('#message');
let chalClickDeck = document.querySelector('#challenger');
let chalCard = document.querySelector('#chal-card');
let dealCard = document.querySelector('#deal-card');


chalClickDeck.addEventListener('click', flip);

createShuffleSplit();


function createShuffleSplit(){
    deck = new Deck;
    console.log(deck);
    sDeck = deck.shuffle();
    p1Deck = sDeck.splice(0,26);
    dDeck = sDeck;    
}



function flip(){
    // adds both players card to the pile
    pile.push(p1Deck[0]);
    pile.push(dDeck[0]);
    
    let chalRemove = chalCard.classList[3];
    let dealRemove = dealCard.classList[3];

    chalCard.classList.add(`${pile[0][2]}`);
    dealCard.classList.add(`${pile[1][2]}`);
    // removes the cards that were added to the pile
    p1Deck.shift();
    dDeck.shift();
    winnings = pile.splice(0,2)
    let remChCard = winnings[0][2];
    let remDeCard = winnings[1][2];
    // if challenger has greater value card
    if(winnings[0][1] > winnings[1][1]){
        p1Deck.push(winnings[0]);
        p1Deck.push(winnings[1]);
        renderWinner('challenger');
    // if dealer has greater value card
    }else if(winnings[0][1] < winnings[1][1]){
        dDeck.push(winnings[0]);
        dDeck.push(winnings[1]);
        renderWinner('dealer');
    // if it is a tie
    }else if(winnings[0][1] === winnings[1][1]){
        goToWar();
    }
    chalCard.classList.remove(chalRemove);
    dealCard.classList.remove(dealRemove);
}



function goToWar(){

}



function renderWinner(winner){
    message.innerHTML = `${winner} won this flip`;
}




//     function renderBlankCard(){
//         chalCard.classList.remove(`${pile[0][2]}`);
//         dealCard.classList.remove(`${pile[1][2]}`);
//     }
// }

// for(let value in values) { 
//     this.deck.push({0: `${suits[suit]}${values[value]}`,
//                     1: `css/card-deck/images/${suits[suit]}/${suits[suit]}-${values[value]}.svg`});
// }