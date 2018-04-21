$(document).ready (function (){
    // on recupere les dimensions de la fenetre
    var windowWidth = $ (window).width();
    var windowHeight = $ (window).height();
    // on dimensionne la fenetre à 80% de larg et hauteur 
    $("#content").width(windowWidth*0.8);
    $("#content").height(windowHeight*0.8);                
    // on posionne au centre notre zone
    var contentWidth = $("#content").width();
    var contentHeight = $("#content").height();
    $("#content").css("left",(windowWidth-contentWidth)/2);
    $("#content").css("top",(windowHeight-contentHeight)/2);
   
});

$(document).resize (function (){
    // on recupere les dimensions de la fenetre
    var windowWidth = $ (window).width();
    var windowHeight = $ (window).height();
    // on dimensionne la fenetre à 80% de larg et hauteur 
    $("#content").width(windowWidth*0.8);
    $("#content").height(windowHeight*0.8);                
    // on posionne au centre notre zone
    var contentWidth = $("#content").width();
    var contentHeight = $("#content").height();
    $("#content").css("left",(windowWidth-contentWidth)/2);
    $("#content").css("top",(windowHeight-contentHeight)/2);
   
});
