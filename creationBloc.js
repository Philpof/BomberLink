const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;

const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

var plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH.toString()+"px";
plateau.style.height = WINDOW_HEIGHT.toString()+"px";
plateau.style.border = "64px solid";
plateau.style.borderImage = "url('img/zeldaMurChateau.png') 64 round";

var blocGrid = [];
for(var i = 0; i < H_GRID; i++){
  blocGrid.push([]);
  for(var j = 0; j < V_GRID; j++){

// Création du coffre au centre du plateau
    // let coffre = document.createElement("div");
    // coffre.style.width = "40px";
    // coffre.style.height = "40px";
    // coffre.style.display = "flex";
    // coffre.style.position = "absolute";
    // coffre.style.backgroundImage = "url('img/zeldaCoffreClose.png')";
    // coffre.style.backgroundRepeat = "no-repeat";
    // coffre.style.backgroundSize = "contain";
    // coffre.style.backgroundPosition = "center";
    // coffre.style.zIndex = "60";
    // coffre.style.boxShadow = "5px 5px 5px #404040";
    // coffre.traverser = false;

// Création des bloc aléatoire
    let bloc = document.createElement("div");
    bloc.style.width = "40px";
    bloc.style.height = "40px";
    bloc.style.display = "flex";
    bloc.style.position = "absolute";
    bloc.style.backgroundRepeat = "no-repeat";
    bloc.style.backgroundSize = "contain";
    bloc.style.backgroundPosition = "center";

    if (random100() > 80){

      bloc.style.backgroundImage = "url('img/zeldaFeu1.png')";
      bloc.className = "feuBrasero";
      bloc.style.boxShadow = "5px 5px 5px #404040";
      bloc.style.zIndex = "50";
      bloc.traverser = false;
    }
    else if (random100() > 50 && random100() <= 80 ) {
      bloc.style.backgroundImage = "url('img/zeldaSolEtPot.png')";
      bloc.style.zIndex = "50";
      bloc.traverser = false;
    }
    else {
      bloc.style.backgroundImage = "url('img/zeldaSolChateau.png')";
      bloc.traverser = true;
    }

    bloc.style.marginLeft = (i * GRID_SIZE).toString()+"px";
    bloc.style.marginTop = (j * GRID_SIZE).toString()+"px";

    document.getElementById("plateau").appendChild(bloc);
    blocGrid[i].push(bloc);
  }
}

// Exclusion des position ci-dessous pour le random
blocGrid[0][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[0][0].traverser = true;
blocGrid[0][0].style.boxShadow = "";
blocGrid[1][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[1][0].traverser = true;
blocGrid[1][0].style.boxShadow = "";
blocGrid[0][1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[0][1].traverser = true;
blocGrid[0][1].style.boxShadow = "";
blocGrid[H_GRID - 1][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 1][0].traverser = true;
blocGrid[H_GRID - 1][0].style.boxShadow = "";
blocGrid[H_GRID - 2][0].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 2][0].traverser = true;
blocGrid[H_GRID - 2][0].style.boxShadow = "";
blocGrid[H_GRID - 1][1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 1][1].traverser = true;
blocGrid[H_GRID - 1][1].style.boxShadow = "";
blocGrid[0][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[0][V_GRID - 1].traverser = true;
blocGrid[0][V_GRID - 1].style.boxShadow = "";
blocGrid[0][V_GRID - 2].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[0][V_GRID - 2].traverser = true;
blocGrid[0][V_GRID - 2].style.boxShadow = "";
blocGrid[1][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[1][V_GRID - 1].traverser = true;
blocGrid[1][V_GRID - 1].style.boxShadow = "";
blocGrid[H_GRID - 1][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 1][V_GRID - 1].traverser = true;
blocGrid[H_GRID - 1][V_GRID - 1].style.boxShadow = "";
blocGrid[H_GRID - 2][V_GRID - 1].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 2][V_GRID - 1].traverser = true;
blocGrid[H_GRID - 2][V_GRID - 1].style.boxShadow = "";
blocGrid[H_GRID - 1][V_GRID - 2].style.backgroundImage = "url('img/zeldaSolChateau.png')";
blocGrid[H_GRID - 1][V_GRID - 2].traverser = true;
blocGrid[H_GRID - 1][V_GRID - 2].style.boxShadow = "";

// Positionnement du coffre
var testH_GRID = (H_GRID / 2);
var testV_GRID = (V_GRID / 2);
if (Number.isInteger(testH_GRID) && Number.isInteger(testV_GRID)) {
  blocGrid[H_GRID / 2][V_GRID / 2].style.backgroundImage = "url('img/zeldaCoffreClose.png')";
  blocGrid[H_GRID / 2][V_GRID / 2].traverser = false;
  blocGrid[H_GRID / 2][V_GRID / 2].style.boxShadow = "";
  blocGrid[H_GRID / 2][V_GRID / 2].style.zIndex = "60";
}
else if (Number.isInteger(testH_GRID)) {
  blocGrid[(H_GRID / 2)][(V_GRID / 2)+0.5].style.backgroundImage = "url('img/zeldaCoffreClose.png')";
  blocGrid[(H_GRID / 2)][(V_GRID / 2)+0.5].traverser = false;
  blocGrid[(H_GRID / 2)][(V_GRID / 2)+0.5].style.boxShadow = "";
  blocGrid[(H_GRID / 2)][(V_GRID / 2)+0.5].style.zIndex = "60";
}
else if (Number.isInteger(testV_GRID)) {
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)].style.backgroundImage = "url('img/zeldaCoffreClose.png')";
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)].traverser = false;
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)].style.boxShadow = "";
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)].style.zIndex = "60";
}
else {
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)+0.5].style.backgroundImage = "url('img/zeldaCoffreClose.png')";
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)+0.5].traverser = false;
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)+0.5].style.boxShadow = "";
  blocGrid[(H_GRID / 2)+0.5][(V_GRID / 2)+0.5].style.zIndex = "60";
}

function random100() {
  return Math.floor(Math.random() * 100);
}
