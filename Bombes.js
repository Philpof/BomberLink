// // Bombe 0
// let bombe0 = document.createElement("div");
// bombe0.style.width = GRID_SIZE + "px";
// bombe0.style.height = GRID_SIZE + "px";
// bombe0.style.position = "absolute";
// bombe0.style.backgroundRepeat = "no-repeat";
// bombe0.style.backgroundSize = "auto";
// bombe0.style.backgroundPosition = "center";
// bombe0.style.zIndex = "100";
// bombe0.id = "bombe0";
//
// // Bombe 1
// let bombe1 = document.createElement("div");
// bombe1.style.width = GRID_SIZE + "px";
// bombe1.style.height = GRID_SIZE + "px";
// bombe1.style.position = "absolute";
// bombe1.style.backgroundRepeat = "no-repeat";
// bombe1.style.backgroundSize = "auto";
// bombe1.style.backgroundPosition = "center";
// bombe1.style.zIndex = "100";
// bombe1.id = "bombe1";
//
// // Bombe 2
// let bombe2 = document.createElement("div");
// bombe2.style.width = GRID_SIZE + "px";
// bombe2.style.height = GRID_SIZE + "px";
// bombe2.style.position = "absolute";
// bombe2.style.backgroundRepeat = "no-repeat";
// bombe2.style.backgroundSize = "auto";
// bombe2.style.backgroundPosition = "center";
// bombe2.style.zIndex = "100";
// bombe2.id = "bombe2";

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

// Création des Bombes 1 puis 2 puis 3 (si celle d'avant existent)
function creationBombes(blocGrid) {
    for (var i = 0; i < bombes.length; i++) {
      let bombe = bombes[i];
      if (!document.getElementById("bombe" + String(i))) {
      bombe.style.left = String(x) + 'px';
      bombe.style.top = String(y) + 'px';

      bombe.x = x / GRID_SIZE;
      bombe.y = y / GRID_SIZE;

      blocGrid[bombe.x ][bombe.y].traverser = false;
      blocGrid[bombe.x ][bombe.y].bombe = true;

      document.getElementById("plateau").appendChild(bombe);
      bombe.style.backgroundImage = "url('img/zeldaBombeBlue.png')";
      setTimeout(changeCouleurBombe, 750, i);
      }

    }
}
  // else if (document.getElementById("bombe0") && !document.getElementById("bombe1")) {
  //   bombe1.style.left = String(x) + 'px';
  //   bombe1.style.top = String(y) + 'px';
  //
  //   bombe1.x = x / GRID_SIZE;
  //   bombe1.y = y / GRID_SIZE;
  //
  //   blocGrid[x / GRID_SIZE][y / GRID_SIZE].traverser = false;
  //
  //   document.getElementById("plateau").appendChild(bombe1);
  //   bombe1.style.backgroundImage = "url('img/zeldaBombeBlue.png')";
  //
  //   setTimeout(changeCouleurBombe1, 750);
  //   }
  // else if (document.getElementById("bombe0") && document.getElementById("bombe1") && !document.getElementById("bombe2")) {
  //   bombe2.style.left = String(x) + 'px';
  //   bombe2.style.top = String(y) + 'px';
  //
  //   bombe2.x = x / GRID_SIZE;
  //   bombe2.y = y / GRID_SIZE;
  //
  //   blocGrid[x / GRID_SIZE][y / GRID_SIZE].traverser = false;
  //
  //   document.getElementById("plateau").appendChild(bombe2);
  //   bombe2.style.backgroundImage = "url('img/zeldaBombeBlue.png')";
  //
  //   setTimeout(changeCouleurBombe2, 750);
  //   }


// Fonctions pour changement de couleur et explosion des différentes bombes

function changeCouleurBombe(i) {
    let bombe = bombes[i];
    if (document.getElementById("bombe" + String(i))) {
      document.getElementById("bombe" + String(i)).style.backgroundImage = "url('img/zeldaBombeRed.png')";
    }
  setTimeout(explosionBombe, 750, i);
}

function explosionBombe(i) {
    let bombe = bombes[i];
    if (document.getElementById("bombe" + String(i))) {
      document.getElementById("bombe" + String(i)).style.backgroundImage = "url('img/zeldaExplosion.png')";
    }
  setTimeout(disparitionBombe, 250, i);
}

function disparitionBombe(i) {
    let bombe = bombes[i];
    if (document.getElementById("bombe" + String(i))) {
      blocGrid[bombe.x][bombe.y].traverser = true;
      blocGrid[bombe.x][bombe.y].bombe = false;
      document.getElementById("bombe" + String(i)).remove();
    }
}

// Bombe 0
// function changeCouleurBombe1() {
//   if (document.getElementById("bombe" + String(i))) {
//     document.getElementById("bombe" + String(i)).style.backgroundImage = "url('img/zeldaBombeRed.png')";
//   }
//   setTimeout(explosionBombe1, 750);
// }
//
// function explosionBombe1() {
//   if (document.getElementById("bombe" + String(i))) {
//     document.getElementById("bombe" + String(i)).style.backgroundImage = "url('img/zeldaExplosion.png')";
//   }
//   setTimeout(disparitionBombe1, 250);
// }
//
// function disparitionBombe1() {
//   if (document.getElementById("bombe" + String(i))) {
//     blocGrid[bombe1.x][bombe1.y].traverser = true;
//     blocGrid[bombe.x][bombe.y].bombe = false;
//     document.getElementById("bombe" + String(i)).remove();
//   }
// }
//
// // Bombe 1
// function changeCouleurBombe1() {
//   if (document.getElementById("bombe1")) {
//     document.getElementById("bombe1").style.backgroundImage = "url('img/zeldaBombeRed.png')";
//   }
//   setTimeout(explosionBombe1, 750);
// }
//
// function explosionBombe1() {
//   if (document.getElementById("bombe1")) {
//     document.getElementById("bombe1").style.backgroundImage = "url('img/zeldaExplosion.png')";
//   }
//   setTimeout(disparitionBombe1, 250);
// }
//
// function disparitionBombe1() {
//   if (document.getElementById("bombe1")) {
//     blocGrid[bombe1.x][bombe1.y].traverser = true;
//     document.getElementById("bombe1").remove();
//   }
// }
//
// // Bombe 2
// function changeCouleurBombe2() {
//   if (document.getElementById("bombe2")) {
//     document.getElementById("bombe2").style.backgroundImage = "url('img/zeldaBombeRed.png')";
//   }
//   setTimeout(explosionBombe2, 750);
// }
//
// function explosionBombe2() {
//   if (document.getElementById("bombe2")) {
//     document.getElementById("bombe2").style.backgroundImage = "url('img/zeldaExplosion.png')";
//   }
//   setTimeout(disparitionBombe2, 250);
// }
//
// function disparitionBombe2() {
//   if (document.getElementById("bombe2")) {
//     blocGrid[bombe2.x][bombe2.y].traverser = true;
//     document.getElementById("bombe2").remove();
//   }
// }
