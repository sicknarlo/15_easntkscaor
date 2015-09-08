var JC = JC || {};

JC.controller = {
  init: function(){
          JC.view.init();
          JC.controller.gameLoop();
        },

  // Interval to add new squares to the board.
  gameLoop: function(){
              setInterval( function(){
                JC.model.pickSquare();
              }, 1000);
            }
}
