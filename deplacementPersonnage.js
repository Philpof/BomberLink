const VICTOIRE = "Bravo ! Tu as sauvé Hyrule ! On recommence ?";
const DEFAITEBOMBE = "Oula ! Faut pas rester près d'une bombe, hein ! GAME OVER, on recommence ?";

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

  switch (zqsd) {
    case 38: // touche "Flèche Haut"
    case 90: // touche : Z
      // startAnimationHaut();
      if (y > 0 && blocGrid[x / GRID_SIZE][y / GRID_SIZE - 1].traverser)
        y = y - GRID_SIZE;
      break;

    case 39: // touche "Flèche Droite"
    case 68: // touche "D"
      // startAnimationDroite();
      if (x < WINDOW_WIDTH && blocGrid[x / GRID_SIZE + 1][y / GRID_SIZE].traverser)
        x = x + GRID_SIZE;
      break;

    case 40: // touche "Flèche Bas"
    case 83: // touche "S"
      // startAnimationBas();
      if (y < WINDOW_HEIGHT && blocGrid[x / GRID_SIZE][y / GRID_SIZE + 1].traverser)
        y = y + GRID_SIZE;
      break;

    case 37: // touche "Flèche Gauche"
    case 81: // touche "Q"
      // startAnimationGauche();
      if (x > 0 && blocGrid[x / GRID_SIZE - 1][y / GRID_SIZE].traverser)
        x = x - GRID_SIZE;
      break;

    case 32: // touche "Espace"
      if (!blocGrid[x / GRID_SIZE][y / GRID_SIZE].bombe) {
        creationBombes(blocGrid);
      }
      break;

    default:
      return;
  }

  // Si le perso va sur un ennemi, il meurt
  for (var i = 0; i < gardes.length; i++) {
    if (x == gardes[i].offsetLeft && y == gardes[i].offsetTop) {
      personnageADeplacer.style.backgroundImage = "url('img/zeldaLinkMortEpee.png')";
      personnageADeplacer.style.backgroundRepeat = "no-repeat";
      personnageADeplacer.style.backgroundSize = "contain";
      personnageADeplacer.style.backgroundPosition = "center";
      persoDead = true;
      setTimeout(function() {
        alert("Tu as foncé sur un garde ! C'est moche ! GAME OVER, on recommence ?");
        document.location.reload(true);
      }, 3000);
      break;
    }
  }

  // Le Perso se déplace
  personnageADeplacer.style.left = String(x) + 'px';
  personnageADeplacer.style.top = String(y) + 'px';


  // Si le perso va sur la clé, il ramasse la clé
  if (personnage.offsetLeft == cle.offsetLeft && personnage.offsetTop == cle.offsetTop) {
    document.getElementById("imageCle").src = "img/zeldaLinkAvecCle.png";
    cle.ramasse = true;
    document.getElementById("cle").remove();
  }

  // Si le perso va devant le coffre, il ouvre le coffre et c'est gagné !
  var devantCoffre = document.getElementById("solRed3F");
  devantCoffre.x = devantCoffre.offsetLeft;
  devantCoffre.y = devantCoffre.offsetTop;

  if (personnage.offsetLeft == devantCoffre.x && personnage.offsetTop == devantCoffre.y && cle.ramasse) {
    document.getElementById("coffreClose").style.backgroundImage = "url('img/zeldaCoffreOpen3F.gif')";
    setTimeout(function() {
      alert(VICTOIRE);
      document.location.reload(true);
    }, 1500)
    return;
  }


  // Le Perso tombe s'il va sur un trou
  if (document.getElementById('trou')) {

    // for (var i = 0; i < trous.length; i++) {

    if (trou.offsetLeft == x && trou.offsetTop == y) {
      personnageADeplacer.style.backgroundImage = "url('img/zeldaLinkTombe.gif')";
      personnageADeplacer.style.backgroundRepeat = "no-repeat";
      personnageADeplacer.style.backgroundSize = "contain";
      personnageADeplacer.style.backgroundPosition = "center";
      persoDead = true;
      setTimeout(function() {
        document.getElementById('personnage').remove();
        alert("Attention où tu mets les pieds, il y a des trous par terre ! GAME OVER, On recommence ?");
        document.location.reload(true);
      }, 2000);
      return;
    }
    // }
  }

}
