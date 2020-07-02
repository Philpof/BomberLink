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
  bombe.libre = true;
  bombes.push(bombe);
}

//check

function createBombe(blockGrid) {
  let bombeset = false
  for (var i = 0; i < bombes.length; i++) {
    if (bombes[i].libre && !bombeset) {

      var bombe = bombes[i];
      bombe.libre = false;
      bombeset = true;

      bombe.style.left = String(x * GRID_SIZE) + "px";
      bombe.style.top = String(y * GRID_SIZE) + "px";
      bombe.x = x;
      bombe.y = y;

      blockGrid[bombe.x][bombe.y].traverser = false;
      blockGrid[bombe.x][bombe.y].bombe = true;
      document.getElementById('plateau').appendChild(bombe);

      setTimeout(function explose() {
        if (bombe.x < H_GRID - 1) {

          blockGrid[bombe.x + 1][bombe.y].traverser = true;
          blockGrid[bombe.x + 1][bombe.y].style.backgroundColor = "green";
        }
        if (bombe.x > 0) {

          blockGrid[bombe.x - 1][bombe.y].traverser = true;
          blockGrid[bombe.x - 1][bombe.y].style.backgroundColor = "green";
        }
        if (bombe.y < V_GRID - 1) {

          blockGrid[bombe.x][bombe.y + 1].traverser = true;
          blockGrid[bombe.x][bombe.y + 1].style.backgroundColor = "green";
        }
        if (bombe.y > 0) {

          blockGrid[bombe.x][bombe.y - 1].traverser = true;
          blockGrid[bombe.x][bombe.y - 1].style.backgroundColor = "green";
        }

        bombe.remove();
        blockGrid[bombe.x][bombe.y].traverser = true;
        blockGrid[bombe.x][bombe.y].bombe = false;
        bombe.libre = true;
        blockGrid[bombe.x][bombe.y].style.backgroundColor = "green";
      }, 2000);

    }
  }
}
