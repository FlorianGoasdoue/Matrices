// pour colorer
$(document).ready(function(){
    $("#un").click(function(){
        $(".couleur").addClass("color");
    });
});

// enlever la couleur
$(document).ready(function(){
    $("#deux").click(function(){
        $(".couleur").removeClass("color");
    });
});

// interupteur sur un élément
$(document).ready(function(){
    $(".rond").click(function(){
        $(this).toggleClass("color");
    });
});

// niveau 2
// quand on clique sur un carré c'est toute la ligne qui se colore
$(".carre").click(function(){
  if ($(this).hasClass("ligne1") ) $(".ligne1").toggleClass('color');
  if ($(this).hasClass("ligne2") ) $(".ligne2").toggleClass('color');
  if ($(this).hasClass("ligne3") ) $(".ligne3").toggleClass('color');
  if ($(this).hasClass("ligne4") ) $(".ligne4").toggleClass('color');
  if ($(this).hasClass("ligne5") ) $(".ligne5").toggleClass('color');

});


//$(".losange").click(function(){
//  $(".ligne3, #l").toggleClass('color');
//});

//});
