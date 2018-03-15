//create environment logic
  //pick # of players (low)

// create a player object
  //player name
  //player score (low)
  //contains hand

// house logic

// create game logic
  //create a deck
    //card values
      //(1-9)*4
      //(10,jack,queen,king)*4
      //(aces)*4 (basevalue=11)
        //(ace) (basevalue=11 or 1) (low)
    // [deck > [card] > [value, suit, playedThisRound]]
  //how to hit
    // if hit => addAvailableCard()
  //check if bust
  // if hand > 21 => lose()
  // win()
    // log win in game history
    // celebrate announcement

//new hand reset
  //dealNewHand()

//new game reset
  //newGame()