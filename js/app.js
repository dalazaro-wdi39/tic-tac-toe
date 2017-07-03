// wait for the DOM to finish loading
$(document).ready(function() {
  console.log( "Ready!" );
    // all code to manipulate the DOM
    // goes inside this function

    //initialize moves counter to 0
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

    //when a box is clicked, it returns an X or O to the chosen box based on whose turn it is
    $('.box').click(function(){
      $(this).html('<span class="marker">'+whoseTurn+'</span>');
      changeTurn();
    });








});
