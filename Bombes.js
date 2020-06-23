let bombe = document.createElement("div");
bombe.style.width = GRID_SIZE + "px";
bombe.style.height = GRID_SIZE + "px";
// bombe.style.display = "flex";
bombe.style.position = "absolute";
bombe.style.backgroundImage = "url('img/zeldaBombe.png')";
bombe.style.backgroundRepeat = "no-repeat";
bombe.style.backgroundSize = "contain";
bombe.style.backgroundPosition = "center";
bombe.style.zIndex = "40";
bombe.id = "bombe";

function creationBombe() {
  if (!document.getElementById("bombe")) {
    bombe.style.left = String(x) + 'px';
    bombe.style.top = String(y) + 'px';

    document.getElementById("plateau").appendChild(bombe);

    setTimeout(disparitionBombe, 2000);
    }
}


function disparitionBombe(){
  if (document.getElementById("bombe")) {
    document.getElementById("bombe").remove();
  }
}
