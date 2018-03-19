const player = {
    name: "player",
    hand: [],
}

const dealer = {
    name: "dealer",
    hand: []
}

const cardData = {
    name: ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"],
    suits: ["spades", "hearts", "diamonds", "clubs"],
}

let unshuffledDeck = [];
let shuffledDeck = [];

////builds unshuffledDeck[{card},{card},etc....]
const buildDeck = () => {
    for (let i = 0; i < cardData.name.length; i++) {
        const name = cardData.name[i];
        for (let j = 0; j < cardData.suits.length; j++) {
            const suit = cardData.suits[j];
            const card = {
                name: name,
                suits: suit
            }
        unshuffledDeck.push(card);
        }
    }
    console.log(unshuffledDeck)
}

////shuffle the unshuffledDeck into a new array
const getRandNum = (max) => {
    return Math.floor(Math.random()*max)
}

const shuffleDeck = () => {
    while (unshuffledDeck.length > 0) {
        let randCardNum = getRandNum(unshuffledDeck.length);
        const randCard = unshuffledDeck[randCardNum];
        shuffledDeck.push(randCard);
        unshuffledDeck.splice(randCard, 1);
    }
}

const draw = (who) => {
    const nextCard = (getRandNum(shuffledDeck.length));
    who.hand.push(shuffledDeck[nextCard]);
    shuffledDeck.splice(nextCard, 1);
}

const dealNewHand = (input) => {
    draw(input)
    draw(input)
  }

////gameStart button logic
startGame = () => {
    buildDeck();
    shuffleDeck();
    dealNewHand(player);
    dealNewHand(dealer);
}

////TODO: create player logic