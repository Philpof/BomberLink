var personnageADeplacer = document.getElementById('personnage');
var x = personnageADeplacer.offsetLeft; // On récupère la position absolue initiale (gauche).
var y = personnageADeplacer.offsetTop; // On récupère la position absolue initiale (haut).
var persoDead = false;

document.onkeydown = function() {
  var event = event || window.event,
  zqsd = event.keyCode;

  if (persoDead) {
  return;
  }

  switch(zqsd) {
    case 38: // touche "Flèche Haut"
    case 90: // touche : Z
      // startAnimationHaut();
      if (y > 0 && blocGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      y = y - GRID_SIZE;
      break;

    case 39: // touche "Flèche Droite"
    case 68: // touche "D"
      // startAnimationDroite();
      if (x < WINDOW_WIDTH && blocGrid[x / GRID_SIZE +1][y / GRID_SIZE].traverser)
      x = x + GRID_SIZE;
      break;

    case 40: // touche "Flèche Bas"
    case 83: // touche "S"
      // startAnimationBas();
      if (y < WINDOW_HEIGHT && blocGrid[x / GRID_SIZE][y / GRID_SIZE +1].traverser)
      y = y + GRID_SIZE;
      break;

    case 37: // touche "Flèche Gauche"
    case 81: // touche "Q"
      // startAnimationGauche();
      if (x > 0 && blocGrid[x / GRID_SIZE -1][y / GRID_SIZE].traverser)
      x = x - GRID_SIZE;
      break;

    case 32: // touche "Espace"
      if (!blocGrid[x / GRID_SIZE][y / GRID_SIZE].bombe) {
        creationBombes(blocGrid);
      }
      break;

    default: return;
  }

  // Si le perso va sur un ennemi, il meurt
  for (var i = 0; i < gardes.length; i++) {
    if (x == gardes[i].offsetLeft && y == gardes[i].offsetTop) {
      personnageADeplacer.style.backgroundImage = "url('img/zeldaMort.png')";
      personnageADeplacer.style.backgroundRepeat = "no-repeat";
      personnageADeplacer.style.backgroundSize = "auto";
      personnageADeplacer.style.backgroundPosition = "center";
      persoDead = true;
      alert("Tu as foncé sur un garde ! C'est moche ! GAME OVER, on recommence ?");
      document.location.reload(true);
      break;
    }
  }

// Le Perso se déplace
  personnageADeplacer.style.left = String(x) + 'px';
  personnageADeplacer.style.top = String(y) + 'px';

  // Le Perso tombe s'il va sur un trou
  if (document.getElementById('trou')) {
    for (var i = 0; i < trous.length; i++) {
      console.log(trou[i]);
      if (trous[i].offsetLeft == x && trous[i].offsetTop == y) {
        personnageADeplacer.style.backgroundImage = "url('img/zeldaLinkTombe.gif')";
        personnageADeplacer.style.backgroundRepeat = "no-repeat";
        personnageADeplacer.style.backgroundSize = "auto";
        personnageADeplacer.style.backgroundPosition = "center";
        persoDead = true;
        setTimeout(function() {document.getElementById('personnage').remove();}, 500)
        alert("Attention où tu mets les pieds, il y a des trous par terre ! GAME OVER, On recommence ?");
        document.location.reload(true);
        break;
      }
    }
  }
}
