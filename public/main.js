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
}

const player1 = {
  name: "",
  hand: []
}

const cardDeck = {
  key: "",
  value: "",
  suit: "",
}

const shuffleDeck = () => {
  // this function takes cardDeck and places it into available cards
availableCards = cardDeck
console.log("The deck has been reshuffled")
}

let availableCards = [];

draw = () => {
  //add available card to player1.hand
}
  
//new hand reset
const dealNewHand = () => {
  draw()
  draw()
  //stay or hit?
}
  
  //create a deck
  // const deck 
  // = Math.ceil((Math.random()*53));
  //#'s 1-13 spades
  //#'s 14-26 hearts
  //#'s 27-39 diamonds
  //#'s 40-52 clubs
  //card values
  //(1-9)*4
  //(10,jack,queen,king)*4
  //(aces)*4 (basevalue=11)
  //(ace) (basevalue=11 or 1) (low)
  // [deck > [card] > [key, value, suit, playedThisRound]] - unavailable cards
  //how to hit()
  // if hit => addAvailableCard()
  //check if bust
  // if hand > 21 => lose()
  // win()
  // log win in game history
  // celebrate announcement
  
  
  // house logic
  
  
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