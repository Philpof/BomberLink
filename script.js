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
      if (directionY >= 40) {
        directionY -= 40;
        break;
      }
      else {
        directionY -= 0;
        break;
      }

  case 83:
      if (directionY <= 720) {
        directionY += 40;
        break;
      }
      else {
        directionY += 0;
        break;
      }
  case 81:
      if (directionX >= 40) {
        directionX -= 40;
        break;
      }
      else {
        directionY -= 0;
        break;
      }
  case 68:
      if (directionX <= 720) {
        directionX += 40;
        break;
      }
      else {
        directionY += 0;
        break;
      }
  }
  // Et enfin on applique les modifications :
  stylePion.top = String(directionY)+'px';
  stylePion.left = String(directionX)+'px';
}
