var gardes = [];
for (var i = 0; i < 10; i++) {
  let garde = document.createElement("div");

  let x = 0;
  let y = 0;

  while (!blocGrid[x][y].traverser || (x === 0 && y === 0) || /* Exclusion des positions ci-après pour la position de x et y */(x >= 0 && x <= 1 && y >= 0 && y <= 1 || x >= (H_GRID - 2)  && x < H_GRID && y >= 0 && y <= 1 || x >= 0  && x <= 1 && y >= (V_GRID - 2) && y < V_GRID || x >= (H_GRID - 2)  && x < H_GRID && y >= (V_GRID - 2) && y < V_GRID)) {
      x = Math.floor(Math.random() * (H_GRID));
      y = Math.floor(Math.random() * (V_GRID));
  }

  blocGrid[x][y].traverser = false;
  garde.gardeX = x;
  garde.gardeY = y;
  garde.direction = "bas";
  garde.style.width = GRID_SIZE + "px";
  garde.style.height = GRID_SIZE + "px";
  garde.style.display = "flex";
  garde.style.position = "absolute";
  garde.style.backgroundRepeat = "no-repeat";
  garde.style.backgroundSize = "contain";
  garde.style.backgroundPosition = "center";
  garde.style.backgroundImage = "url('img/zeldaGarde.png')";
  garde.style.zIndex = "95";
  garde.id = "garde" + String(i);
  garde.style.left = String(garde.gardeX * GRID_SIZE) + "px";
  garde.style.top = String(garde.gardeY * GRID_SIZE) + "px";
  plateau.appendChild(garde);
  gardes.push(garde);
}

var frame = 0;

function rondeGarde() {

  if (frame === 30) {

    for (var i = 0; i < gardes.length; i++) {
      let garde = gardes[i];
      let gardeX = garde.gardeX;
      let gardeY = garde.gardeY;
      let direction = garde.direction;
      blocGrid[gardeX][gardeY].traverser = true;

    switch (direction) {
      case "gauche":
        if (gardeY > 0 && blocGrid[gardeX][gardeY - 1].traverser) {
          gardeY--;
        }
        break;
      case "droite":
        if (gardeX < H_GRID - 1 && blocGrid[gardeX + 1][gardeY].traverser) {
          gardeX++;
        }
        break;
      case "haut":
        if (gardeY < H_GRID - 1 && blocGrid[gardeX][gardeY + 1].traverser) {
          gardeY++;
        }
        break;
      case "bas":
        if (gardeX > 0 && blocGrid[gardeX - 1][gardeY].traverser) {
          gardeX--;
        }
        break;
    }

    garde.style.left = String(gardeX * GRID_SIZE) + "px";
    garde.style.top = String(gardeY * GRID_SIZE) + "px";

    let random = random100();
    console.log(random100());

      if (random < 25) {
        direction = "haut";
      }
      if (random >= 25 && random < 50) {
        direction = "bas";
      }
      if (random >= 50 && random < 75) {
        direction = "gauche";
      }
      if (random > 75) {
        direction = "droite";
      }

      garde.gardeX = gardeX;
      garde.gardeY = gardeY;
      garde.direction = direction;
      blocGrid[gardeX][gardeY].traverser = false;
    }

    frame = 0;
  }

frame++;

// On crée l'animation - 60 x / seconde
window.requestAnimationFrame(rondeGarde);

}

window.requestAnimationFrame(rondeGarde);
