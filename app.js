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

let deck, sDeck, cDeck, dDeck, chalRemove, dealRemove;

let pile = [];
let winnings = [];

let message = document.querySelector('#message');
let chalDeck = document.querySelector('#chal-deck');
let dealDeck = document.querySelector('#deal-deck');
let chalClickDeck = document.querySelector('#challenger');

let chalCard = document.querySelector('#chal-card');
let dealCard = document.querySelector('#deal-card');

let resetBtn = document.querySelector('#resetbb');

resetBtn.addEventListener('click', () => location.reload())
chalClickDeck.addEventListener('click', flip);


createShuffleSplit();

function createShuffleSplit(){
    deck = new Deck;
    sDeck = deck.shuffle();
    cDeck = sDeck.splice(0,26);
    dDeck = sDeck;    
}

function flip(){
    pile.push(cDeck[0]);
    pile.push(dDeck[0]);
    console.log(cDeck)
    console.log(pile)
    let chalRemove = chalCard.classList[3];
    let dealRemove = dealCard.classList[3];

    chalCard.classList.add(`${pile[0][2]}`);
    dealCard.classList.add(`${pile[1][2]}`);

    cDeck.shift();
    dDeck.shift();
    winnings = pile.splice(0, pile.length);
    if(winnings[0][1] > winnings[1][1]){
        // cDeck.push(winnings);
        winnings.forEach((win) => cDeck.push(win))
        renderWinner('challenger');
        chalDeck.innerHTML = `DECK SIZE ${cDeck.length}`;
        dealDeck.innerHTML = `DECK SIZE ${dDeck.length}`;
        endGame()
    }else if(winnings[0][1] < winnings[1][1]){
        // dDeck.push(winnings);
        winnings.forEach((win) => dDeck.push(win))
        renderWinner('dealer');
        chalDeck.innerHTML = `DECK SIZE ${cDeck.length}`;
        dealDeck.innerHTML = `DECK SIZE ${dDeck.length}`;
        endGame();
    }else if(winnings[0][1] === winnings[1][1]){
        goToWar();
    }
    chalCard.classList.remove(chalRemove);
    dealCard.classList.remove(dealRemove);
}


    
function goToWar(){
    pile.unshift(cDeck[0]);
    pile.unshift(dDeck[0]);
    pile.unshift(cDeck[1]);
    pile.unshift(dDeck[1]);
    cDeck.shift()
    dDeck.shift()
    cDeck.shift()
    dDeck.shift()
}
function renderWinner(winner){
    message.innerHTML = `${winner} won this flip`;
}

function endGame(){
    if(cDeck.length === 52){
        message.innerHTML = 'WINNER! WINNER! CHALLENGER! DINNER!'
    }else if(dDeck.length === 52){
        message.innerHTML = 'WINNER! WINNER! DEALER! DINNER!'
    }
}