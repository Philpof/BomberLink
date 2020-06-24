const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;

const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

// Charge la fonction pour l'animation des Braseros
window.onload = function(){
changerImageFeu();
}

// création du plateau de jeu
var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH + "px";
plateau.style.height = WINDOW_HEIGHT + "px";
plateau.style.border = "64px solid";
plateau.style.borderImage = "url('img/zeldaMurChateau.png') 64 round";

// dimension du personnage
var personnage = document.getElementById('personnage');
personnage.style.width = GRID_SIZE + "px";
personnage.style.height = GRID_SIZE + "px";

// Création des bloc aléatoire
var blocGrid = [];
for(var i = 0; i < H_GRID; i++){
  blocGrid.push([]);
  for(var j = 0; j < V_GRID; j++){

    let bloc = document.createElement("div");
    bloc.style.width = GRID_SIZE + "px";
    bloc.style.height = GRID_SIZE + "px";
    bloc.style.display = "flex";
    bloc.style.position = "absolute";
    bloc.style.backgroundRepeat = "no-repeat";
    bloc.style.backgroundSize = "contain";
    bloc.style.backgroundPosition = "center";

    if (random100() > 80){
      bloc.className = "feuBrasero";
      bloc.traverser = false;
    }
    else if (random100() > 60 && random100() <= 80 ) {
      bloc.style.backgroundImage = "url('img/zeldaSolEtPot.png')";
      bloc.className = "pot";
      bloc.traverser = false;
    }
    else {
      bloc.style.backgroundImage = "url('img/zeldaSolChateau.png')";
      bloc.className = "sol";
      bloc.traverser = true;
    }

    bloc.style.marginLeft = (i * GRID_SIZE) + "px";
    bloc.style.marginTop = (j * GRID_SIZE) + "px";

    document.getElementById("plateau").appendChild(bloc);
    blocGrid[i].push(bloc);
  }
}

// Exclusion des positions ci-dessous pour le random
blocGrid[0][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[0][0].traverser = true;
blocGrid[0][0].className = "sol";
blocGrid[1][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[1][0].traverser = true;
blocGrid[1][0].className = "sol";
blocGrid[0][1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[0][1].traverser = true;
blocGrid[0][1].className = "sol";
blocGrid[H_GRID - 1][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 1][0].traverser = true;
blocGrid[H_GRID - 1][0].className = "sol";
blocGrid[H_GRID - 2][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 2][0].traverser = true;
blocGrid[H_GRID - 2][0].className = "sol";
blocGrid[H_GRID - 1][1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 1][1].traverser = true;
blocGrid[H_GRID - 1][1].className = "sol";
blocGrid[0][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[0][V_GRID - 1].traverser = true;
blocGrid[0][V_GRID - 1].className = "sol";
blocGrid[0][V_GRID - 2].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[0][V_GRID - 2].traverser = true;
blocGrid[0][V_GRID - 2].className = "sol";
blocGrid[1][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[1][V_GRID - 1].traverser = true;
blocGrid[1][V_GRID - 1].className = "sol";
blocGrid[H_GRID - 1][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 1][V_GRID - 1].traverser = true;
blocGrid[H_GRID - 1][V_GRID - 1].className = "sol";
blocGrid[H_GRID - 2][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 2][V_GRID - 1].traverser = true;
blocGrid[H_GRID - 2][V_GRID - 1].className = "sol";
blocGrid[H_GRID - 1][V_GRID - 2].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 1][V_GRID - 2].traverser = true;
blocGrid[H_GRID - 1][V_GRID - 2].className = "sol";

// Le "div" au centre du plateau deveint un "coffre"
var testH_GRID = (H_GRID / 2);
var testV_GRID = (V_GRID / 2);
if (Number.isInteger(testH_GRID) && Number.isInteger(testV_GRID)) {
  blocGrid[H_GRID / 2][V_GRID / 2].style.backgroundImage = "url('img/zeldaCoffreClose.png')";
  blocGrid[H_GRID / 2][V_GRID / 2].traverser = false;
  blocGrid[H_GRID / 2][V_GRID / 2].style.zIndex = "60";
  blocGrid[H_GRID / 2][V_GRID / 2].className = "coffreClose";
}
else if (Number.isInteger(testH_GRID)) {
  blocGrid[(H_GRID / 2)][(V_GRID / 2)+0.5].style.backgroundImage = "url('img/zeldaCoffreClose.png')";
  blocGrid[(H_GRID / 2)][(V_GRID / 2)+0.5].traverser = false;
  blocGrid[(H_GRID / 2)][(V_GRID / 2)+0.5].style.zIndex = "60";
  blocGrid[(H_GRID / 2)][(V_GRID / 2)+0.5].className = "coffreClose";
}
else if (Number.isInteger(testV_GRID)) {
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)].style.backgroundImage = "url('img/zeldaCoffreClose.png')";
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)].traverser = false;
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)].style.zIndex = "60";
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)].className = "coffreClose";
}
else {
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)+0.5].style.backgroundImage = "url('img/zeldaCoffreClose.png')";
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)+0.5].traverser = false;
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)+0.5].style.zIndex = "60";
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)+0.5].className = "coffreClose";
}

function random100() {
  return Math.floor(Math.random() * 100);
}
