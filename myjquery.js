

///for acordian code......................


// $(function() {  
//     $( "#accordion" ).accordion();  
//   });  



  // for the hidden/activ class..................

// $(".active-1").click(function(){
//   $(".hidden-1").hide()
  
// })

var flip = 0;
$( ".active-1" ).on( "click", function() {
  $( ".hidden-1" ).toggle(flip++ % 2 === 0 );
} );$( ".active-2" ).on( "click", function() {
  $( ".hidden-2" ).toggle(flip++ % 2 === 0 );
} );


$( ".active-3" ).on( "click", function() {
  $( ".hidden-3" ).toggle(flip++ % 2 === 0 );
} );


