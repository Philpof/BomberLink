const FEUBRASERO = document.querySelectorAll('.feuBrasero');

// Un tableau qui va contenir toutes les images dans l'ordre
var imagesFeu = [];
imagesFeu.push("url('img/zeldaFeu1.png')");
imagesFeu.push("url('img/zeldaFeu2.png')");
imagesFeu.push("url('img/zeldaFeu3.png')");
imagesFeu.push("url('img/zeldaFeu2.png')");
imagesFeu.push("url('img/zeldaFeu2.png')");

var iFeu = 0;

function changerImageFeu(){

    if (iFeu < imagesFeu.length -1) {
      FEUBRASERO.forEach(element => {
        element.style.backgroundImage = imagesFeu[iFeu]});
      iFeu++;
    }
    else {
      iFeu = 0;
    }
  window.setTimeout("changerImageFeu()", 75)
}

// Charge la fonction
window.onload = function(){
changerImageFeu();
}
