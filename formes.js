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
