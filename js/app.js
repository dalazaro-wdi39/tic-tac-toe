// wait for the DOM to finish loading
$(document).ready(function() {
  console.log( "Ready!" );
    // all code to manipulate the DOM
    // goes inside this function

    arr = [["","",""],["","",""],["","",""]];

    // initialize moves counter to 0
    // let moves = 0;

    //X goes first
    let whoseTurn = "X";

    //function that switches to the next player's turn
    let changeTurn = function() {
      if (whoseTurn === "X") {
        whoseTurn = "O";
      } else {
        whoseTurn = "X";
      }
    };

    //when a box is clicked, it returns an X or O to the chosen box based on whose turn it is
    $('.box').click(function(){
    //check to see if the box is empty
      if ( $(this).hasClass("X") || $(this).hasClass("O") ) {
        return;
      }

      $(this).html('<span>'+whoseTurn+'</span>');
    //marks the box as belonging to the player
      $(this).addClass(whoseTurn);
    //next player's turn
      changeTurn();

    //detect a winning condition
      win();

    //add one to the move counter
      // moves += 1;

      // if (moves === 9) {
        // alert("Cat's game!");
      // }

    });

      //Reset
      //when the reset button is clicked, change board to initial configuration
      //board cleared
      //turnNumber is back to 0
          $('#reset').click(function() {
              $('.box').removeClass("X");
              $('.box').removeClass("O");
              $('.box').html("");
              whoseTurn = "X";
          });










});
