var JC = JC || {};

JC.view = {

  init: function(){
          this.fillClickZone();
          this.attachListeners();
        },

  // These three function put the board on the page.

  fillClickZone: function(){
                   for (var i = 0; i < 4; i++) {
                     this.addRowToClickZone(i);
                   }
                 },

  addRowToClickZone: function( y ){
                       $row = $( "<div class='row'></div>" )
                       $( '#click-zone' ).append( $row )
                       for (var i = 0; i < 4; i++) {
                         this.addClickerToRow( $row, i, y )
                       }
                     },

  addClickerToRow: function( row, x, y ){
                     row.append( "<div class='clicker' data-x='" + x + "' data-y='" + y + "'></div>" )
                   },

  updateScore: function(){
                 var $scoreSpan = $( "#score" )
                 $scoreSpan.text(JC.model.score);
  },

  // This sets up the click listener on each square.

  attachListeners: function(){
                     $( ".clicker" ).click( function(){
                       var $square = $( this )
                       $square.removeClass( "lit" );
                       JC.controller.clickSquare($square);
                       // JC.model.scoreClick($square.data().x, $square.data().y);
                   })},

  // This turns a square red.

  lightUpSquare: function( square ){
                   var $square = $( ".clicker[data-x='" + square.x + "'][data-y='" + square.y + "']" );
                   $square.addClass( "lit" );
                 }
};
