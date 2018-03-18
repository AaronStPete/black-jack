// variable storage:
const player1 = {
  name: "",
  hand: []
}

let cardDeck = [];

let availableCards = [];

//create environment logic

//creating a player
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

const testClick = () => {
  console.log("this button is working")
  console.log("player1.name = " + player1.name);
  console.log("player1's hand is: " + player1.hand);
  console.log("the available cards are " + availableCards)
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
      // console.log("this card is named: " + card.name);
      count++
      card.key = count;
      // console.log("this card's key is: " + card.key);
      card.suit = suits[j];
      // console.log("this card's suit is: " + card.suit);
      
      ///this generates the new card's value
      if (cardName[i].includes("jack") || cardName[i].includes("queen") || cardName[i].includes("king")) {
        card.value = 10;
      } else if (cardName[i].includes("ace")) {
        card.value = 11;
      } else {
        card.value = parseInt(cardName[i])
      };
      // console.log("this card's value is: " + card.value)
      
      // newCard = card;
      ///this pushes the new card into the card deck
      // cardDeck.push(newCard);
      cardDeck.push([card.key, card.name, card.suit, card.value])
      console.log(cardDeck);
    }
  }
  shuffleDeck();
}

const shuffleDeck = () => {
  // this function takes cardDeck and places it into available cards
  /// previously had (availableCards = cardDeck) but it seems to concatenate instead of adding an array
  availableCards = cardDeck.slice();
  console.log("The deck has been reshuffled")
  console.log("the deck contains: ")
  console.log(availableCards)
}

//////////////////INCOMPLETE LOGIC/////////////

///draw() isn't done
draw = () => {
  for (i=0; i <= 51; i++) {
  //pick a random number between 1-52
  randNum = Math.ceil((Math.random()*53));
  // console.log("the random number generated is: " + randNum)
  console.log("testing card: " + cardDeck.indexOf(0, randNum))
  //using indexOf the random number, => (check if availableCards[].includes(cardDeck.indexOf(randNum))
  if (availableCards.includes(cardDeck.indexOf(randNum))) {
    // => check if the card is available, if not re-draw
    ////(is available) => add available card to player1.hand
    (player1.hand).push(cardDeck.indexOf(randNum));
    console.log("dealer added " + newCard + "to player 1's hand")
    console.log("Player1's hand contains: " + player1.hand)
    ////remove card from availableCards[]
    availableCards.splice(randNum);
    console.log("removing card: " + cardDeck.indexOf(randNum))
    break;
    }
  }
}

//new hand reset
const dealNewHand = () => {
  draw()
  draw()
  //stay or hit? break these up into seperate functions?
}


//how to hit()
// if hit => addAvailableCard()
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
//newGame()