var JC = JC || {};

JC.model = {

  // Holds squares that are currently lit up on the board.

  activeSquares: [],
  score: 0,

  // Randomly generates a pair of coordinates.

  pickSquare: function(){
                var square = {
                      x: Math.floor(Math.random() * 4),
                      y: Math.floor(Math.random() * 4)
                    };
                JC.model.activeSquares.push( square );
                JC.view.lightUpSquare( square );
              },

  // Checks to see if a click was on an active square.
  scoreClick: function(x, y){
                for( var i = 0; i < this.activeSquares.length; i++ ){
                  var testSquare = this.activeSquares[i];
                  if( testSquare.x === x && testSquare.y === y ) {
                    this.incrementUpScore();
                    this.activeSquares.splice(i, 1);
                    break;
                  };
                  break;
                };
              },

  // Adds a random number between 5 and 15 to the score.
  incrementUpScore: function(){
                      // var $scoreSpan = $( "#score" )
                      // var score = parseInt( $scoreSpan.text() );
                      this.score += ( Math.floor(Math.random() * 15) + 5);
                      JC.view.updateScore();
                      // $scoreSpan.text( score );
                    }
};
