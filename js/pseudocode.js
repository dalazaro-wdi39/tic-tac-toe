// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log( "ready!" );


//Initial board condition
  //create a variable turnNumber, initially set to 1.
  var turnNumber = 1;
  //each box in the board has a binary value
    // ___1_|___2_|___4_
    // ___8_|__16_|__32_
    // __64_|_128_|_256_


//Taking a turn
  //marker will show up as X or O depending on whose turn it is
  var marker = function(){
    if ( turnNumber === 1 || 3 || 5 || 7 || 9 ){
      marker = "X";
    } else if ( turnNumber === 2 || 4 || 6 || 8 ){
      marker = "O";
    }
  };

  //No initial text in box, but marker will display as X or O when player clicks anywhere in the box
  function turn(){

    $('#zero').click(function() {
      $('#marker-zero').html(marker);
    });

    $('#one').click(function() {
      $('#marker-one').html(marker);
    });

    $('#two').click(function() {
      $('#marker-two').html(marker);
    });

    $('#three').click(function() {
      $('#marker-three').html(marker);
    });

    $('#four').click(function() {
      $('#marker-four').html(marker);
    });

    $('#five').click(function() {
      $('#marker-five').html(marker);
    });

    $('#six').click(function() {
      $('#marker-six').html(marker);
    });

    $('#seven').click(function() {
      $('#marker-seven').html(marker);
    });

    $('#eight').click(function() {
      $('#marker-eight').html(marker);
    });

  };

  //at the end of the turn, 1 is added to the turnNumber and logged into the console
    return turnNumber++;
    console.log(turnNumber);

    turn();


//Track turns
  //create a score array for player 1 (X) and player 2 (O).
  //when a player clicks a box, log the id and value of the box in the player's array


//Claiming a box
  //When a player clicks a box, check if the box is empty.
    //If the box is empty, place an X or O in the box depending on the turn order.
    //If the box is not empty, nothing happens and the player must click a different box
  //When the box is claimed, use jQ to change the box's DOM element

//Style Xs and Os
  //use jQ to add a CSS class to the box on a move

//Check for win
  //check for a win at the end of each turn
  //conditions: 0,1,2 || 3,4,5 || 6,7,8 || 0,3,6 || 1,4,7 || 2,5,8 || 0,4,8 || 6,4,2
  //if one of these conditions is met, alert the user that that player has won!

//Detect a draw
  //max turns: 9
  //if turnNumber reaches 10 and no one has met a win condition, declare cat's game


  //Reset
  //when the reset button is clicked, change board to initial configuration
  //board cleared
  //turnNumber is back to 0
      $('#reset').click(function() {
        location.reload();
      });
          //Reload page when player hits reset button

});
