//create environment logic
//pick # of players (low)

// create a player object
function player(name, hand,) {
  //player name
  this.name = ""
  //contains hand
  this.hand = []
  //player score (low)
}

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
}

// const card = {
//   key: "";
//   value: "" ;
//   suit: ;
// }



// house logic

draw = () => {
  card
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

//new hand reset
const dealNewHand = () => {
  draw()
  draw()
  //stay or hit?
}

//new game reset
  //newGame()