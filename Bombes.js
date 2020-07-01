const VICTOIRE = "Bravo ! Tu as gagné ! On recommence ?";
const DEFAITEBOMBE = "Oula ! Faut pas rester près d'une bombe, hein ! GAME OVER, on recommence ?";

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

let explosions = [];
for (var i = 0; i < 4; i++) {
let explosion = document.createElement("div");
explosion.style.width = GRID_SIZE + "px";
explosion.style.height = GRID_SIZE + "px";
explosion.style.position = "absolute";
explosion.style.backgroundRepeat = "no-repeat";
explosion.style.backgroundSize = "auto";
explosion.style.backgroundPosition = "center";
explosion.style.zIndex = "100";
explosion.style.backgroundImage = "url('img/zeldaExplosion.png')";
explosion.id = "explosion" + String(i);
explosions.push(explosion);
}

let trous = []; ///////////en cours


// Création des Bombes 1 puis 2 puis 3 (si celle d'avant existent) puis changement de couleur après 750 millisecondes puis explosion après 750 millisecondes puis disparition de la div
function creationBombes(blocGrid) {

  // var i = 0;
  //
  //   if (!document.getElementById("bombe" + String(i))) {
  //   let bombe = bombes[i];
  //   bombe.style.left = String(x) + 'px';
  //   bombe.style.top = String(y) + 'px';
  //
  //   bombe.x = x / GRID_SIZE;
  //   bombe.y = y / GRID_SIZE;
  //
  //   blocGrid[bombe.x ][bombe.y].traverser = false;
  //   blocGrid[bombe.x ][bombe.y].bombe = true;
  //   document.getElementById("plateau").appendChild(bombe);
  //   bombe.style.backgroundImage = "url('img/zeldaBombeBlue.png')";
  //   console.log(bombe);
  //   i++;
  //   setTimeout(changeCouleurBombe0, 750, i);
  //   }
  // }

// Bombe n°1
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

    setTimeout(function changeCouleurBombe0() {
      if (document.getElementById("bombe0")) {
        document.getElementById("bombe0").style.backgroundImage = "url('img/zeldaBombeRed.png')";
      }
      setTimeout(function explosionBombe0() {
        if (document.getElementById("bombe0")) {
          document.getElementById("bombe0").style.backgroundSize = "contain";
          document.getElementById("bombe0").style.backgroundImage = "url('img/zeldaExplosion.png')";

          var explosion0 = explosions[0];
          explosion0.style.left = String(bombe.x * GRID_SIZE + 40) + 'px';
          explosion0.style.top = String(bombe.y * GRID_SIZE) + 'px';
          var explosion1 = explosions[1];
          explosion1.style.left = String(bombe.x * GRID_SIZE) + 'px';
          explosion1.style.top = String(bombe.y *GRID_SIZE + 40) + 'px';
          var explosion2 = explosions[2];
          explosion2.style.left = String(bombe.x * GRID_SIZE - 40) + 'px';
          explosion2.style.top = String(bombe.y * GRID_SIZE) + 'px';
          var explosion3 = explosions[3];
          explosion3.style.left = String(bombe.x *GRID_SIZE) + 'px';
          explosion3.style.top = String(bombe.y *GRID_SIZE - 40) + 'px';

          if (!((bombe.x * GRID_SIZE - 40) < 0 )) {
            document.getElementById("plateau").appendChild(explosion2);
          }
          if (!((bombe.x * GRID_SIZE + 40) > 760 )) {
            document.getElementById("plateau").appendChild(explosion0);
          }
          if (!((bombe.y * GRID_SIZE - 40) < 0 )) {
            document.getElementById("plateau").appendChild(explosion3);
          }
          if (!((bombe.y * GRID_SIZE + 40) > 760 )) {
            document.getElementById("plateau").appendChild(explosion1);
          }
        }
        setTimeout(function disparitionBombe0() {
          if (document.getElementById("bombe0")) {
            blocGrid[bombe.x][bombe.y].traverser = true;
            blocGrid[bombe.x][bombe.y].bombe = false;
            document.getElementById("bombe0").style.backgroundSize = "auto";

            // Destruction du personnage
            var perso = document.getElementById('personnage');

            if (parseInt(bombe.style.left) == perso.offsetLeft && parseInt(bombe.style.top) == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) == perso.offsetLeft && parseInt(bombe.style.top) - GRID_SIZE == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) - GRID_SIZE == perso.offsetLeft && parseInt(bombe.style.top) == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) + GRID_SIZE == perso.offsetLeft && parseInt(bombe.style.top) == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) == perso.offsetLeft && parseInt(bombe.style.top) + GRID_SIZE == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }

            // Destruction des gardes
            for (var i = 0; i < gardes.length; i++) {
              if (parseInt(bombe.style.left) == gardes[i].offsetLeft && parseInt(bombe.style.top) == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) == gardes[i].offsetLeft && parseInt(bombe.style.top) - GRID_SIZE == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) - GRID_SIZE == gardes[i].offsetLeft && parseInt(bombe.style.top) == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) + GRID_SIZE == gardes[i].offsetLeft && parseInt(bombe.style.top) == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) == gardes[i].offsetLeft && parseInt(bombe.style.top) + GRID_SIZE == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
            }

            // Destruction ou modifiction des éléments du décor
            if (document.getElementById("explosion0")) {
              var idElement = blocGrid[(bombe.x) + 1][bombe.y].id;
              if (idElement === "pot") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'solSansPot';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'coffreOpen';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
              }
              else if (idElement === "feuBrasero") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) + 1][bombe.y].className = 'feuStop';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[(bombe.x) + 1][bombe.y].id = "trou" + String(i);
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
                trous.push()
              }
              document.getElementById("explosion0").remove();
            }
            if (document.getElementById("explosion1")) {
              var idElement = blocGrid[bombe.x][(bombe.y) + 1].id;
              if (idElement === "pot") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'solSansPot';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'coffreOpen';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
                }
              else if (idElement === "feuBrasero") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) + 1].className = 'feuStop';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'trou';
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion1").remove();
            }
            if (document.getElementById("explosion2")) {
              var idElement = blocGrid[(bombe.x) - 1][bombe.y].id;
              if (idElement === "pot") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'solSansPot';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'coffreOpen';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
                }
              else if (idElement === "feuBrasero") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) - 1][bombe.y].className = 'feuStop';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'trou';
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion2").remove();
            }
            if (document.getElementById("explosion3")) {
              var idElement = blocGrid[bombe.x][(bombe.y) - 1].id;
              if (idElement === "pot") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'solSansPot';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'coffreOpen';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
                }
              else if (idElement === "feuBrasero") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) - 1].className = 'feuStop';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'trou';
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion3").remove();
            }
            document.getElementById("bombe0").remove();
            var idElement = blocGrid[bombe.x][bombe.y].id;
            if (idElement === "fissure") {
              blocGrid[bombe.x][bombe.y].id = 'trou';
              blocGrid[bombe.x][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
            }
          }
        }, 250);
      }, 750);
    }, 750);
  }

// Bombe n°2
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

    setTimeout(function changeCouleurBombe1() {
      if (document.getElementById("bombe1")) {
        document.getElementById("bombe1").style.backgroundImage = "url('img/zeldaBombeRed.png')";
      }
      setTimeout(function explosionBombe1() {
        if (document.getElementById("bombe1")) {
          document.getElementById("bombe1").style.backgroundSize = "contain";
          document.getElementById("bombe1").style.backgroundImage = "url('img/zeldaExplosion.png')";

          var explosion0 = explosions[0];
          explosion0.style.left = String(bombe.x * GRID_SIZE + 40) + 'px';
          explosion0.style.top = String(bombe.y * GRID_SIZE) + 'px';
          var explosion1 = explosions[1];
          explosion1.style.left = String(bombe.x * GRID_SIZE) + 'px';
          explosion1.style.top = String(bombe.y *GRID_SIZE + 40) + 'px';
          var explosion2 = explosions[2];
          explosion2.style.left = String(bombe.x * GRID_SIZE - 40) + 'px';
          explosion2.style.top = String(bombe.y * GRID_SIZE) + 'px';
          var explosion3 = explosions[3];
          explosion3.style.left = String(bombe.x *GRID_SIZE) + 'px';
          explosion3.style.top = String(bombe.y *GRID_SIZE - 40) + 'px';

          if (!((bombe.x * GRID_SIZE - 40) < 0 )) {
            document.getElementById("plateau").appendChild(explosion2);
          }
          if (!((bombe.x * GRID_SIZE + 40) > 760 )) {
            document.getElementById("plateau").appendChild(explosion0);
          }
          if (!((bombe.y * GRID_SIZE - 40) < 0 )) {
            document.getElementById("plateau").appendChild(explosion3);
          }
          if (!((bombe.y * GRID_SIZE + 40) > 760 )) {
            document.getElementById("plateau").appendChild(explosion1);
          }
        }
        setTimeout(function disparitionBombe1() {
          if (document.getElementById("bombe1")) {
            blocGrid[bombe.x][bombe.y].traverser = true;
            blocGrid[bombe.x][bombe.y].bombe = false;
            document.getElementById("bombe1").style.backgroundSize = "auto";

            // Destruction du personnage
            var perso = document.getElementById('personnage');

            if (parseInt(bombe.style.left) == perso.offsetLeft && parseInt(bombe.style.top) == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) == perso.offsetLeft && parseInt(bombe.style.top) - GRID_SIZE == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) - GRID_SIZE == perso.offsetLeft && parseInt(bombe.style.top) == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) + GRID_SIZE == perso.offsetLeft && parseInt(bombe.style.top) == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) == perso.offsetLeft && parseInt(bombe.style.top) + GRID_SIZE == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }

            // Destruction des gardes
            for (var i = 0; i < gardes.length; i++) {
              if (parseInt(bombe.style.left) == gardes[i].offsetLeft && parseInt(bombe.style.top) == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) == gardes[i].offsetLeft && parseInt(bombe.style.top) - GRID_SIZE == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) - GRID_SIZE == gardes[i].offsetLeft && parseInt(bombe.style.top) == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) + GRID_SIZE == gardes[i].offsetLeft && parseInt(bombe.style.top) == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) == gardes[i].offsetLeft && parseInt(bombe.style.top) + GRID_SIZE == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
            }

            // Destruction ou modifiction des éléments du décor
            if (document.getElementById("explosion0")) {
              var idElement = blocGrid[(bombe.x) + 1][bombe.y].id;
              if (idElement === "pot") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'solSansPot';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'coffreOpen';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
              }
              else if (idElement === "feuBrasero") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) + 1][bombe.y].className = 'feuStop';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'trou';
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion0").remove();
            }
            if (document.getElementById("explosion1")) {
              var idElement = blocGrid[bombe.x][(bombe.y) + 1].id;
              if (idElement === "pot") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'solSansPot';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'coffreOpen';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
                }
              else if (idElement === "feuBrasero") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) + 1].className = 'feuStop';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'trou';
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion1").remove();
            }
            if (document.getElementById("explosion2")) {
              var idElement = blocGrid[(bombe.x) - 1][bombe.y].id;
              if (idElement === "pot") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'solSansPot';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'coffreOpen';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
                }
              else if (idElement === "feuBrasero") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) - 1][bombe.y].className = 'feuStop';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'trou';
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion2").remove();
            }
            if (document.getElementById("explosion3")) {
              var idElement = blocGrid[bombe.x][(bombe.y) - 1].id;
              if (idElement === "pot") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'solSansPot';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'coffreOpen';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
                }
              else if (idElement === "feuBrasero") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) - 1].className = 'feuStop';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'trou';
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion3").remove();
            }
            document.getElementById("bombe1").remove();
            var idElement = blocGrid[bombe.x][bombe.y].id;
            if (idElement === "fissure") {
              blocGrid[bombe.x][bombe.y].id = 'trou';
              blocGrid[bombe.x][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
            }
          }
        }, 250);
      }, 750);
    }, 750);
  }

// Bombe n°3
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

    setTimeout(function changeCouleurBombe2() {
      if (document.getElementById("bombe2")) {
        document.getElementById("bombe2").style.backgroundImage = "url('img/zeldaBombeRed.png')";
      }
      setTimeout(function explosionBombe2() {
        if (document.getElementById("bombe2")) {
          document.getElementById("bombe2").style.backgroundSize = "contain";
          document.getElementById("bombe2").style.backgroundImage = "url('img/zeldaExplosion.png')";

          var explosion0 = explosions[0];
          explosion0.style.left = String(bombe.x * GRID_SIZE + 40) + 'px';
          explosion0.style.top = String(bombe.y * GRID_SIZE) + 'px';
          var explosion1 = explosions[1];
          explosion1.style.left = String(bombe.x * GRID_SIZE) + 'px';
          explosion1.style.top = String(bombe.y *GRID_SIZE + 40) + 'px';
          var explosion2 = explosions[2];
          explosion2.style.left = String(bombe.x * GRID_SIZE - 40) + 'px';
          explosion2.style.top = String(bombe.y * GRID_SIZE) + 'px';
          var explosion3 = explosions[3];
          explosion3.style.left = String(bombe.x *GRID_SIZE) + 'px';
          explosion3.style.top = String(bombe.y *GRID_SIZE - 40) + 'px';

          if (!((bombe.x * GRID_SIZE - 40) < 0 )) {
            document.getElementById("plateau").appendChild(explosion2);
          }
          if (!((bombe.x * GRID_SIZE + 40) > 760 )) {
            document.getElementById("plateau").appendChild(explosion0);
          }
          if (!((bombe.y * GRID_SIZE - 40) < 0 )) {
            document.getElementById("plateau").appendChild(explosion3);
          }
          if (!((bombe.y * GRID_SIZE + 40) > 760 )) {
            document.getElementById("plateau").appendChild(explosion1);
          }
        }
        setTimeout(function disparitionBombe2() {
          if (document.getElementById("bombe2")) {
            blocGrid[bombe.x][bombe.y].traverser = true;
            blocGrid[bombe.x][bombe.y].bombe = false;
            document.getElementById("bombe2").style.backgroundSize = "auto";

            // Destruction du personnage
            var perso = document.getElementById('personnage');

            if (parseInt(bombe.style.left) == perso.offsetLeft && parseInt(bombe.style.top) == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) == perso.offsetLeft && parseInt(bombe.style.top) - GRID_SIZE == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) - GRID_SIZE == perso.offsetLeft && parseInt(bombe.style.top) == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) + GRID_SIZE == perso.offsetLeft && parseInt(bombe.style.top) == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }
            if (parseInt(bombe.style.left) == perso.offsetLeft && parseInt(bombe.style.top) + GRID_SIZE == perso.offsetTop) {
              perso.style.backgroundImage = "url('img/zeldaLinkMort.png')";
              perso.style.backgroundRepeat = "no-repeat";
              perso.style.backgroundSize = "auto";
              perso.style.backgroundPosition = "center";
              persoDead = true;
              alert(DEFAITEBOMBE);
              document.location.reload(true);
            }

            // Destruction des gardes
            for (var i = 0; i < gardes.length; i++) {
              if (parseInt(bombe.style.left) == gardes[i].offsetLeft && parseInt(bombe.style.top) == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) == gardes[i].offsetLeft && parseInt(bombe.style.top) - GRID_SIZE == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) - GRID_SIZE == gardes[i].offsetLeft && parseInt(bombe.style.top) == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) + GRID_SIZE == gardes[i].offsetLeft && parseInt(bombe.style.top) == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
              if (parseInt(bombe.style.left) == gardes[i].offsetLeft && parseInt(bombe.style.top) + GRID_SIZE == gardes[i].offsetTop) {
                gardes[i].traverser = true;
                gardes[i].style.backgroundImage = "url('img/zeldaMort.png')";
                gardes[i].style.backgroundSize = "auto";
                gardes[i].style.zIndex = "50";
                gardes.splice(i, 1);
                if (gardes.length == 0) {
                  alert(VICTOIRE);
                  document.location.reload(true);
                  return;
                }
              }
            }

            // Destruction ou modifiction des éléments du décor
            if (document.getElementById("explosion0")) {
              var idElement = blocGrid[(bombe.x) + 1][bombe.y].id;
              if (idElement === "pot") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'solSansPot';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'coffreOpen';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
              }
              else if (idElement === "feuBrasero") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) + 1][bombe.y].className = 'feuStop';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) + 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[(bombe.x) + 1][bombe.y].id = 'trou';
                blocGrid[(bombe.x) + 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion0").remove();
            }
            if (document.getElementById("explosion1")) {
              var idElement = blocGrid[bombe.x][(bombe.y) + 1].id;
              if (idElement === "pot") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'solSansPot';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'coffreOpen';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
                }
              else if (idElement === "feuBrasero") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) + 1].className = 'feuStop';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) + 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[bombe.x][(bombe.y) + 1].id = 'trou';
                blocGrid[bombe.x][(bombe.y) + 1].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion1").remove();
            }
            if (document.getElementById("explosion2")) {
              var idElement = blocGrid[(bombe.x) - 1][bombe.y].id;
              if (idElement === "pot") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'solSansPot';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'coffreOpen';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
                }
              else if (idElement === "feuBrasero") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) - 1][bombe.y].className = 'feuStop';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = false;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'feuStop';
                blocGrid[(bombe.x) - 1][bombe.y].traverser = true;
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[(bombe.x) - 1][bombe.y].id = 'trou';
                blocGrid[(bombe.x) - 1][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion2").remove();
            }
            if (document.getElementById("explosion3")) {
              var idElement = blocGrid[bombe.x][(bombe.y) - 1].id;
              if (idElement === "pot") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'solSansPot';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaSolSansPot.png')";
              }
              else if (idElement === "coffreClose") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'coffreOpen';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
                }
              else if (idElement === "feuBrasero") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) - 1].className = 'feuStop';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = false;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaFeu0.png')";
              }
              else if (idElement === "feuStop") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'feuStop';
                blocGrid[bombe.x][(bombe.y) - 1].traverser = true;
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaSolChateauPierres.png')";
              }
              else if (idElement === "fissure") {
                blocGrid[bombe.x][(bombe.y) - 1].id = 'trou';
                blocGrid[bombe.x][(bombe.y) - 1].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
              }
              document.getElementById("explosion3").remove();
            }
            document.getElementById("bombe2").remove();
            var idElement = blocGrid[bombe.x][bombe.y].id;
            if (idElement === "fissure") {
              blocGrid[bombe.x][bombe.y].id = 'trou';
              blocGrid[bombe.x][bombe.y].style.backgroundImage = "url('img/zeldaSolChateauTrou.png')";
            }
          }
        }, 250);
      }, 750);
    }, 750);
  }
}
