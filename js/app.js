// wait for the DOM to finish loading
$(document).ready(function() {
  console.log( "Ready!" );
    // all code to manipulate the DOM
    // goes inside this function

    // create array of boxes to record moves
    // let board = [["","",""],["","",""],["","",""]];

    // initialize moves counter to 0
    let moves = 0;

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

    //function that detects a winner
    // function win(){
    //   for (i = 0; i <= 2; i++) {
    //     //horizontal wins
    //     if ( board[i][0] === whoseTurn && board[i][1] === whoseTurn && board[i][2] === whoseTurn ) {
    //       alert(`${whoseTurn} wins!`);
    //     //vertical wins
    //     } else if ( board[0][i] === whoseTurn && board[1][i] === whoseTurn && board[2][i] === whoseTurn ) {
    //       alert(`${whoseTurn} wins!`);
    //     //diagonal win bottom to top
    //     } else if ( board[2][0] === whoseTurn && board[1][1] === whoseTurn && board[0][2] === whoseTurn ) {
    //       alert(`${whoseTurn} wins!`);
    //     //diagonal win top to bottom
    //     } else if ( board[0][0] === whoseTurn && board[1][1] === whoseTurn && board[2][2] === whoseTurn ) {
    //       alert(`${whoseTurn} wins!`);
    //     } else {
    //     }
    //   }
    // };

    //TURN FUNCTION
    //when a box is clicked, it returns an X or O to the chosen box based on whose turn it is
    $('.box').click(function(){

    //check to see if the box is empty
    //if the box is already occupied, nothing happens; let player choose again
      if ( $(this).hasClass("X") || $(this).hasClass("O") ) {
        return;
      }

    //if the box is empty, add span element to the box with the current player's letter
      $(this).html('<span>'+whoseTurn+'</span>');
    //marks the box as belonging to the current player
      $(this).addClass(whoseTurn);

    //grabs row of box played
      // let arrRow = $(this).id[3];
      // let numRow = parseInt(arrRow);
    //grabs column of box played
      // let arrCol = $(this).id[4];
      // let numCol = parseInt(arrCol);

    //record location of box played to the board array
      // board[numRow][numCol] = whoseTurn;

    // detect a winning condition
      // win();

    //add one to the move counter
      moves += 1;

    //checks for a cat's game
      if (moves === 9) {
        alert("Cat's game!");
      }

    //switch to next player's turn
      changeTurn();

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
