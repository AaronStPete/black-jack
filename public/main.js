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
    // console.log(unshuffledDeck)
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
    console.log(who, " drew ",(shuffledDeck[nextCard]))
    shuffledDeck.splice(nextCard, 1);
}

const dealNewHand = (input) => {
    draw(input)
    draw(input)
  }

const displayPlayerHand = (who) => {
    const whoHand = document.querySelector("#playerHand");
    for (let i = 0; i < who.hand.length; i++) {
        const card = who.hand[i];
        const listItem = document.createElement("li");
        listItem.textContent = card.name + " of " + card.suits;
        whoHand.appendChild(listItem);
    }
}

const displayDealerHand = (who) => {
    const whoHand = document.querySelector("#dealerHand");
    for (let i = 0; i < who.hand.length; i++) {
        const card = who.hand[i];
        const listItem = document.createElement("li");
        listItem.textContent = card.name + " of " + card.suits;
        whoHand.appendChild(listItem);
    }
}

const hide = (target) => {
    let hideTarget = document.querySelector(target);
    hideTarget.classList = "hide"
}

/// gamestart button logic

startGame = () => {
    hide("#startGameButton")
    buildDeck();
    shuffleDeck();
    dealNewHand(player);
    displayPlayerHand(player);
    dealNewHand(dealer);
    displayDealerHand(dealer);
}

////TODO: display new logic on screen
//////hands

////TODO: create player logic