// --- Animation du sprite --- //



// --- Déplacement du pion --- //

var pionADeplacer = document.getElementById('pion');
var stylePion = pionADeplacer.style; // Un petit raccourci
var directionX = pionADeplacer.offsetLeft; // On récupère la position absolue initiale (gauche).
var directionY = pionADeplacer.offsetTop; // On récupère la position absolue initiale (haut).

document.onkeydown = function(toucheClavier){
  var event = event || window.event;
  var keyCode = event.keyCode;

  // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
  switch(keyCode){
    case 90:
    case 38:
      directionY -= 40;
      if (directionY < 0) directionY = 0;
        break;

    case 83:
    case 40:
      directionY += 40;
      if (directionY > 760) directionY = 760;
        break;

    case 81:
    case 37:
      directionX -= 40;
      if (directionX < 0) directionX = 0;
        break;

    case 68:
    case 39:
      directionX += 40;
      if (directionX > 760) directionX = 760;
        break;
  }
  // Et enfin on applique les modifications :
  stylePion.top = String(directionY)+'px';
  stylePion.left = String(directionX)+'px';
}
