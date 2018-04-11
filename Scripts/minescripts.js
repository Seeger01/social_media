// JavaScript Document


  $( function() {
    $( "#accordion" ).accordion();
  } );

  $( function() {
    $( "#dragbox" ).draggable();
    $( "#drop-target" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Godt gået!" );
      }
    });
  } );


