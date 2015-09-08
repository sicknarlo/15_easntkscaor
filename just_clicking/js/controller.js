var JC = JC || {};

JC.controller = {
  init: function(){
          JC.view.init();
          JC.controller.gameLoop();
        },

  clickSquare: function(s){
    JC.model.scoreClick(s.data().x, s.data().y);
  },

  // Interval to add new squares to the board.
  gameLoop: function(){
              setInterval( function(){
                JC.model.pickSquare();
              }, 1000);
            }
}
