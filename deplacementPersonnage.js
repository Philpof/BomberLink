var personnageADeplacer = document.getElementById('personnage'),
  x = personnageADeplacer.offsetLeft, // On récupère la position absolue initiale (gauche).
  y = personnageADeplacer.offsetTop; // On récupère la position absolue initiale (haut).

document.onkeydown = function(deplacePersonnage){
  var event = event || window.event,
  zqsd = event.keyCode;
  switch(zqsd){
    case 38: // touche "Flèche Haut"
    case 90: // touche : Z
      if (y > 0 && blocGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      y = y - GRID_SIZE; // ou y-=40;
      break;

    case 39: // touche "Flèche Droite"
    case 68: // touche "D"
      if (x < WINDOW_WIDTH && blocGrid[x / GRID_SIZE +1][y / GRID_SIZE].traverser)
      x = x + GRID_SIZE;
      break;

    case 40: // touche "Flèche Bas"
    case 83: // touche "S"
      if (y < WINDOW_HEIGHT && blocGrid[x / GRID_SIZE][y / GRID_SIZE +1].traverser)
      y = y + GRID_SIZE;
      break;

    case 37: // touche "Flèche Gauche"
    case 81: // touche "Q"
      if (x > 0 && blocGrid[x / GRID_SIZE -1][y / GRID_SIZE].traverser)
      x = x - GRID_SIZE;
      break;
  }
  personnageADeplacer.style.left = String(x) + 'px';
  personnageADeplacer.style.top = String(y) + 'px';
}