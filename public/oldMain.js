// player object
const player1 = {
  name: "",
  hand: [],
  handScore: 0,
  gameScore: 0
}
// dealer object
const dealer = {
  hand: [],
  handScore: 0,
  gameScore: 0
}
// variable declarations
let cardDeck = [];
let availableCards = [];

//create environment logic

//creating a player1
//enter a name using <input>
const createPlayer1 = (input) => {
  let playerName = document.querySelector("#playerName");
  input = document.querySelector("#playerNameField").value
  playerName = input;
  console.log(playerName);
  document.querySelector("#playerName").textContent = playerName;
  //hide #playerNameField && #playerNameButton
  let hiddenField = document.querySelector("#playerNameField");
  hiddenField.classList = "hide";
  let hiddenButton = document.querySelector("#playerNameButton");
  hiddenButton.classList = "hide";
  //store new name as player1.name
  player1.name = document.querySelector("#playerName").textContent
}

/////create a deck
const generateCardDeck = () => {
  const cardName = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]
  const suits = ["spades","hearts","diamonds","clubs"];
  const card = {
    key: "",
    name: "",
    suit: "",
    value: "",
  }
  // console.log(suits)
  // console.log(cardName);
  count = 0;
  ///this loop builds a card and then pushes it into the cardDeck
  for  (let i = 0; i < cardName.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      card.name = cardName[i] + " of " + suits[j];
      count++
      card.key = count;
      card.suit = suits[j];
      ///this generates the new card's value
      if (cardName[i].includes("jack") || cardName[i].includes("queen") || cardName[i].includes("king")) {
        card.value = 10;
      } else if (cardName[i].includes("ace")) {
        card.value = 11;
      } else {
        card.value = parseInt(cardName[i])
      };
      // newCard = card;
      ///this pushes the new card into the card deck
      // cardDeck.push(newCard);
      cardDeck.push([card.key, card.name, card.suit, card.value])
      // console.log(cardDeck);
    }
  }
  shuffleDeck();
}

const = dupeDeck () => {

}

const shuffleDeck = () => {
  // this function takes cardDeck and places it into available cards
  /// previously had (availableCards = cardDeck) but it seems to concatenate instead of adding an array
  availableCards = cardDeck.slice();
  console.log("The deck has been reshuffled")
  // console.log("the deck contains: ")
  console.log(availableCards)
}

function getRandomCard() { 
  return Math.ceil(Math.random())
}

const draw = (input) => {
  const nextCard = getRandomCard(availableCards.length);
  input.push(availableCards[nextCard]);
  availableCards.splice(nextCard, 1);
}


//new hand reset
const dealNewHand = (input) => {
  draw(input)
  draw(input)
}

const hit = (who) => {
  console.log(who, " hits")
  draw(who);
}

const startGame = () => {
  generateCardDeck();
  shuffleDeck();
  dealNewHand(player1.hand)
  dealNewHand(dealer.hand)
}


//////////////////INCOMPLETE LOGIC/////////////


///add function for displaying player1.hand to DOM
////let playerName = document.querySelector("")

//// this next line adds the drawn card's value to the player1.
//// having trouble adding the card's score into the player1.handScore
// console.log("player1.handScore", player1.handScore);
// console.log("adding to player1.handscore...");
// player1.handScore += (availableCards[nextCard]).lastIndexOf(integer);
// //// this is returning a -1
// console.log(player1.handScore);
///use map of the array and return pos[3]

// need to findScore()
// const player1TotalScore = () => {
  //   player1.hand.reverse
  //   console.log(player1.hand)
  //   ///totalScore - (find.(player.hand             ))
  //   ///math().length
  // }
  
  
  //stay or hit? break these up into seperate functions? 
  //doing this with buttons
  
  //hit with draw
  //check if bust
  // if hand > 21 => lose()
// win()
// log win in game history
// celebrate announcement


// house logic

//(ace) (basevalue=11 or 1) (low)

///////pick # of players (low)
// create a player object
// function player(name, hand,) {
  //   //player name
  //   this.name = ""
  //   //contains hand
  //   this.hand = []
  //   //player score (low)
  // }
  
//new game reset button
///newGame()
//// player1.score = 0;