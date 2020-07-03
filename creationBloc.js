// Constante avec valeur à modifier si besoin
const H_GRID = 20;
const V_GRID = 20;
const NOMBREGARDE = 10;
const GRID_SIZE = 40;

// Constante à ne pas modifier
const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

// Chargement des fonctions
window.onload = function() {
  changerImageFeu(); // fonction pour l'animation des Braseros
}

// Création du plateau de jeu
var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH + "px";
plateau.style.minWidth = H_GRID * GRID_SIZE + "px";
plateau.style.height = WINDOW_HEIGHT + "px";
plateau.style.minHeight = V_GRID * GRID_SIZE + "px";
plateau.style.border = "64px solid";
plateau.style.borderImage = "url('img/zeldaMurChateau.png') 64 round";

// Dimensions du personnage
var personnage = document.getElementById('personnage');
personnage.style.width = GRID_SIZE + "px";
personnage.style.height = GRID_SIZE + "px";

// Test et correction des coordonnées pour quelles soient des entiers afin de positionner un élémenet au milieu de la future grille
var testH_GRID = (H_GRID / 2);
var testV_GRID = (V_GRID / 2);

if (Number.isInteger(testH_GRID) && Number.isInteger(testV_GRID)) {
  var okH_GRID = testH_GRID;
  var okV_GRID = testV_GRID;
} else if (Number.isInteger(testH_GRID)) {
  var okH_GRID = testH_GRID;
  var okV_GRID = testV_GRID - 0.5;
} else if (Number.isInteger(testV_GRID)) {
  var okH_GRID = testH_GRID - 0.5;
  var okV_GRID = testV_GRID;
} else {
  var okH_GRID = testH_GRID - 0.5;
  var okV_GRID = testV_GRID - 0.5;
}

// Création des bloc aléatoire
var blocGrid = [];
for (var i = 0; i < H_GRID; i++) {
  blocGrid.push([]);
  for (var j = 0; j < V_GRID; j++) {

    let bloc = document.createElement("div");
    bloc.style.width = GRID_SIZE + "px";
    bloc.style.height = GRID_SIZE + "px";
    bloc.style.display = "flex";
    bloc.style.position = "absolute";
    bloc.style.backgroundRepeat = "no-repeat";
    bloc.style.backgroundSize = "contain";
    bloc.style.backgroundPosition = "center";

    if (i === (okH_GRID) && j === (okV_GRID)) { // Le "div" au centre du plateau devient un "coffre fermé"
      bloc.style.backgroundImage = "url('img/zeldaCoffreClose.png')";
      bloc.traverser = false;
      bloc.style.zIndex = "60";
      bloc.id = "coffreClose";
    }
    else if (i === (okH_GRID) && j === (okV_GRID + 1)) {
      bloc.style.backgroundImage = "url('img/zeldaSolChateauRed3F.png')";
      bloc.id = "solRed3F";
      bloc.traverser = true;
    }
    else if (i === (okH_GRID + 1) && j === (okV_GRID) || i === (okH_GRID - 1) && j === (okV_GRID) || i === (okH_GRID) && j === (okV_GRID - 1) || i === (okH_GRID + 1) && j === (okV_GRID + 1) || i === (okH_GRID + 1) && j === (okV_GRID - 1) || i === (okH_GRID - 1) && j === (okV_GRID + 1) || i === (okH_GRID - 1) && j === (okV_GRID - 1)) {
      bloc.style.backgroundImage = "url('img/zeldaSolChateauRed.png')";
      bloc.id = "solRed";
      bloc.traverser = true;
    }
    else if (random100() > 85 && /* Exclusion des positions ci-après pour le random */ !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2) && i < H_GRID && j >= 0 && j <= 1 || i >= 0 && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2) && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)) {
      bloc.className = "feuBrasero";
      bloc.id = "feuBrasero";
      bloc.traverser = false;
    }
    else if (random100() > 84 && random100() <= 85 && /* Exclusion des positions ci-après pour le random */ !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2) && i < H_GRID && j >= 0 && j <= 1 || i >= 0 && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2) && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)) {
      bloc.style.backgroundImage = "url('img/zeldaSolChateauFissure.png')";
      bloc.id = "fissure";
      bloc.traverser = true;
    }
    else if (random100() > 60 && random100() <= 84 && /* Exclusion des positions ci-après pour le random */ !(i >= 0 && i <= 1 && j >= 0 && j <= 1 || i >= (H_GRID - 2) && i < H_GRID && j >= 0 && j <= 1 || i >= 0 && i <= 1 && j >= (V_GRID - 2) && j < V_GRID || i >= (H_GRID - 2) && i < H_GRID && j >= (V_GRID - 2) && j < V_GRID)) {
      bloc.style.backgroundImage = "url('img/zeldaSolEtPot.png')";
      bloc.id = "pot";
      bloc.traverser = false;
    }
    else {
      bloc.style.backgroundImage = "url('img/zeldaSolChateau.png')";
      bloc.id = "sol";
      bloc.traverser = true;
    }

    bloc.style.marginLeft = (i * GRID_SIZE) + "px";
    bloc.style.marginTop = (j * GRID_SIZE) + "px";

    document.getElementById("plateau").appendChild(bloc);
    blocGrid[i].push(bloc);
  }
}

function random100() {
  return Math.floor(Math.random() * 100);
}


// // Exclusion des positions ci-dessous pour le random >> a été intégré dans les if et else if de la fonction précédente
// blocGrid[0][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[0][0].traverser = true;
// blocGrid[0][0].className = "sol";
// blocGrid[1][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[1][0].traverser = true;
// blocGrid[1][0].className = "sol";
// blocGrid[0][1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[0][1].traverser = true;
// blocGrid[0][1].className = "sol";
// blocGrid[H_GRID - 1][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[H_GRID - 1][0].traverser = true;
// blocGrid[H_GRID - 1][0].className = "sol";
// blocGrid[H_GRID - 2][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[H_GRID - 2][0].traverser = true;
// blocGrid[H_GRID - 2][0].className = "sol";
// blocGrid[H_GRID - 1][1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[H_GRID - 1][1].traverser = true;
// blocGrid[H_GRID - 1][1].className = "sol";
// blocGrid[0][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[0][V_GRID - 1].traverser = true;
// blocGrid[0][V_GRID - 1].className = "sol";
// blocGrid[0][V_GRID - 2].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[0][V_GRID - 2].traverser = true;
// blocGrid[0][V_GRID - 2].className = "sol";
// blocGrid[1][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[1][V_GRID - 1].traverser = true;
// blocGrid[1][V_GRID - 1].className = "sol";
// blocGrid[H_GRID - 1][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[H_GRID - 1][V_GRID - 1].traverser = true;
// blocGrid[H_GRID - 1][V_GRID - 1].className = "sol";
// blocGrid[H_GRID - 2][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[H_GRID - 2][V_GRID - 1].traverser = true;
// blocGrid[H_GRID - 2][V_GRID - 1].className = "sol";
// blocGrid[H_GRID - 1][V_GRID - 2].style.backgroundImage = "url('img/zeldaSolChateau.png')";
// blocGrid[H_GRID - 1][V_GRID - 2].traverser = true;
// blocGrid[H_GRID - 1][V_GRID - 2].className = "sol";
