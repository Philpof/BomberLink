
// Bombe 0
let bombe0 = document.createElement("div");
bombe0.style.width = GRID_SIZE + "px";
bombe0.style.height = GRID_SIZE + "px";
bombe0.style.position = "absolute";
bombe0.style.backgroundRepeat = "no-repeat";
bombe0.style.backgroundSize = "auto";
bombe0.style.backgroundPosition = "center";
bombe0.style.zIndex = "100";
bombe0.id = "bombe0";

// Bombe 1
let bombe1 = document.createElement("div");
bombe1.style.width = GRID_SIZE + "px";
bombe1.style.height = GRID_SIZE + "px";
bombe1.style.position = "absolute";
bombe1.style.backgroundRepeat = "no-repeat";
bombe1.style.backgroundSize = "auto";
bombe1.style.backgroundPosition = "center";
bombe1.style.zIndex = "100";
bombe1.id = "bombe1";

// Bombe 2
let bombe2 = document.createElement("div");
bombe2.style.width = GRID_SIZE + "px";
bombe2.style.height = GRID_SIZE + "px";
bombe2.style.position = "absolute";
bombe2.style.backgroundRepeat = "no-repeat";
bombe2.style.backgroundSize = "auto";
bombe2.style.backgroundPosition = "center";
bombe2.style.zIndex = "100";
bombe2.id = "bombe2";

// Création des Bombes 1 puis 2 puis 3 (si celle d'avant existent)
function creationBombes() {
  if (!document.getElementById("bombe0")) {
    bombe0.style.left = String(x) + 'px';
    bombe0.style.top = String(y) + 'px';

    document.getElementById("plateau").appendChild(bombe0);
    bombe0.style.backgroundImage = "url('img/zeldaBombeBlue.png')";

    setTimeout(changeCouleurBombe0, 750);
    }
  else if (document.getElementById("bombe0") && !document.getElementById("bombe1")) {
    bombe1.style.left = String(x) + 'px';
    bombe1.style.top = String(y) + 'px';

    document.getElementById("plateau").appendChild(bombe1);
    bombe1.style.backgroundImage = "url('img/zeldaBombeBlue.png')";

    setTimeout(changeCouleurBombe1, 750);
    }
  else if (document.getElementById("bombe0") && document.getElementById("bombe1") && !document.getElementById("bombe2")) {
    bombe2.style.left = String(x) + 'px';
    bombe2.style.top = String(y) + 'px';

    document.getElementById("plateau").appendChild(bombe2);
    bombe2.style.backgroundImage = "url('img/zeldaBombeBlue.png')";

    setTimeout(changeCouleurBombe2, 750);
    }
  }

// Fonctions pour changement de couleur et explosion des différentes bombes
// Bombe 0
function changeCouleurBombe0() {
  if (document.getElementById("bombe0")) {
    document.getElementById("bombe0").style.backgroundImage = "url('img/zeldaBombeRed.png')";
  }
  setTimeout(explosionBombe0, 750);
}

function explosionBombe0() {
  if (document.getElementById("bombe0")) {
    document.getElementById("bombe0").style.backgroundImage = "url('img/zeldaExplosion.png')";
  }
  setTimeout(disparitionBombe0, 250);
}

function disparitionBombe0() {
  if (document.getElementById("bombe0")) {
    document.getElementById("bombe0").remove();
  }
}

// Bombe 1
function changeCouleurBombe1() {
  if (document.getElementById("bombe1")) {
    document.getElementById("bombe1").style.backgroundImage = "url('img/zeldaBombeRed.png')";
  }
  setTimeout(explosionBombe1, 750);
}

function explosionBombe1() {
  if (document.getElementById("bombe1")) {
    document.getElementById("bombe1").style.backgroundImage = "url('img/zeldaExplosion.png')";
  }
  setTimeout(disparitionBombe1, 250);
}


function disparitionBombe1() {
  if (document.getElementById("bombe1")) {
    document.getElementById("bombe1").remove();
  }
}

// Bombe 2
function changeCouleurBombe2() {
  if (document.getElementById("bombe2")) {
    document.getElementById("bombe2").style.backgroundImage = "url('img/zeldaBombeRed.png')";
  }
  setTimeout(explosionBombe2, 750);
}

function explosionBombe2() {
  if (document.getElementById("bombe2")) {
    document.getElementById("bombe2").style.backgroundImage = "url('img/zeldaExplosion.png')";
  }
  setTimeout(disparitionBombe2, 250);
}


function disparitionBombe2() {
  if (document.getElementById("bombe2")) {
    document.getElementById("bombe2").remove();
  }
}
