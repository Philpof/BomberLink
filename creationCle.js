var cle = document.createElement("div");
cle.style.width = GRID_SIZE + "px";
cle.style.height = GRID_SIZE + "px";
cle.style.position = "absolute";
cle.style.backgroundRepeat = "no-repeat";
cle.style.backgroundSize = "auto";
cle.style.backgroundPosition = "center";
cle.style.zIndex = "100";
cle.id = "cle";
cle.style.backgroundImage = "url('img/zeldaCle.png')";
cle.style.top = GRID_SIZE + "px";
cle.style.left = "0px";
cle.ramasse = false;


function creationCle() {
  document.getElementById("plateau").appendChild(cle);
}
