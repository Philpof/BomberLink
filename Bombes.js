let bombes = [];
for (var i = 0; i < 3; i++) {
  let bombe = document.createElement("div");
  bombe.style.width = GRID_SIZE + "px";
  bombe.style.height = GRID_SIZE + "px";
  bombe.style.position = "absolute";
  bombe.style.backgroundRepeat = "no-repeat";
  bombe.style.backgroundSize = "auto";
  bombe.style.backgroundPosition = "center";
  bombe.style.zIndex = "100";
  bombe.id = "bombe" + String(i);
  bombes.push(bombe);
}

let explosion = document.createElement("div");
explosion.style.width = GRID_SIZE + "px";
explosion.style.height = GRID_SIZE + "px";
explosion.style.position = "absolute";
explosion.style.backgroundRepeat = "no-repeat";
explosion.style.backgroundSize = "auto";
explosion.style.backgroundPosition = "center";
explosion.style.zIndex = "100";
explosion.style.backgroundImage = "url('img/zeldaExplosion.png')";
explosion.id = "explosion";


// Création des Bombes 1 puis 2 puis 3 (si celle d'avant existent)
function creationBombes(blocGrid) {
//    for (var i = 0; i < bombes.length; i++) {
//       let bombe = bombes[i];
//       if (!document.getElementById("bombe" + String(i))) {
//       bombe.style.left = String(x) + 'px';
//       bombe.style.top = String(y) + 'px';
//
//       bombe.x = x / GRID_SIZE;
//       bombe.y = y / GRID_SIZE;
//
//       blocGrid[bombe.x ][bombe.y].traverser = false;
//       blocGrid[bombe.x ][bombe.y].bombe = true;
//
//       document.getElementById("plateau").appendChild(bombe);
//       bombe.style.backgroundImage = "url('img/zeldaBombeBlue.png')";
//       console.log(bombe);
//       setTimeout(changeCouleurBombe, 750, i);
//       }
//     }
// }

  if (!document.getElementById("bombe0")) {
    var bombe = bombes[0];

    bombe.style.left = String(x) + 'px';
    bombe.style.top = String(y) + 'px';

    bombe.x = x / GRID_SIZE;
    bombe.y = y / GRID_SIZE;

    blocGrid[bombe.x ][bombe.y].traverser = false;
    blocGrid[bombe.x ][bombe.y].bombe = true;

    document.getElementById("plateau").appendChild(bombe);
    bombe.style.backgroundImage = "url('img/zeldaBombeBlue.png')";

    setTimeout(changeCouleurBombe0, 750);
    }

  else if (document.getElementById("bombe0") && !document.getElementById("bombe1")) {
    var bombe = bombes[1];

    bombe.style.left = String(x) + 'px';
    bombe.style.top = String(y) + 'px';

    bombe.x = x / GRID_SIZE;
    bombe.y = y / GRID_SIZE;

    blocGrid[bombe.x ][bombe.y].traverser = false;
    blocGrid[bombe.x ][bombe.y].bombe = true;

    document.getElementById("plateau").appendChild(bombe);
    bombe.style.backgroundImage = "url('img/zeldaBombeBlue.png')";

    setTimeout(changeCouleurBombe1, 750);
    }

  else if (document.getElementById("bombe0") && document.getElementById("bombe1") && !document.getElementById("bombe2")) {
    var bombe = bombes[2];

    bombe.style.left = String(x) + 'px';
    bombe.style.top = String(y) + 'px';

    bombe.x = x / GRID_SIZE;
    bombe.y = y / GRID_SIZE;

    blocGrid[bombe.x ][bombe.y].traverser = false;
    blocGrid[bombe.x ][bombe.y].bombe = true

    document.getElementById("plateau").appendChild(bombe);
    bombe.style.backgroundImage = "url('img/zeldaBombeBlue.png')";

    setTimeout(changeCouleurBombe2, 750);
    }
}

// Fonctions pour changement de couleur et explosion des différentes bombes

// function changeCouleurBombe() {
//     // let bombe = bombes[i];
//     if (document.getElementById("bombe" + String(i))) {
//       document.getElementById("bombe"  + String(i)).style.backgroundImage = "url('img/zeldaBombeRed.png')";
//     }
//   setTimeout(explosionBombe, 750);
// }
//
// function explosionBombe() {
//     // let bombe = bombes[i];
//     if (document.getElementById("bombe" + String(i))) {
//       document.getElementById("bombe" + String(i)).style.backgroundImage = "url('img/zeldaExplosion.png')";
//     }
//   setTimeout(disparitionBombe, 250);
// }
//
// function disparitionBombe() {
//     // let bombe = bombes[i];
//     if (document.getElementById("bombe" + String(i))) {
//       blocGrid[bombe.x][bombe.y].traverser = true;
//       blocGrid[bombe.x][bombe.y].bombe = false;
//       document.getElementById("bombe" + String(i)).remove();
//     }
// }

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

    // function creationExplosion(blocGrid) {
    // explosion.style.left = String(x+40) + 'px';
    // explosion.style.top = String(y+40) + 'px';
    //
    // document.getElementById("plateau").appendChild(explosion);
    // }

  }
  setTimeout(disparitionBombe0, 250);
}

function disparitionBombe0() {
  if (document.getElementById("bombe0")) {
    blocGrid[bombe0.x][bombe0.y].traverser = true;
    blocGrid[bombe0.x][bombe0.y].bombe = false;
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
    blocGrid[bombe1.x][bombe1.y].traverser = true;
    blocGrid[bombe1.x][bombe1.y].bombe = false;
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
    blocGrid[bombe2.x][bombe2.y].traverser = true;
    blocGrid[bombe2.x][bombe2.y].bombe = false;
    document.getElementById("bombe2").remove();
  }
}
