var cle = document.createElement("div");
cle.style.width = GRID_SIZE + "px";
cle.style.height = GRID_SIZE + "px";
cle.style.position = "absolute";
cle.style.backgroundRepeat = "no-repeat";
cle.style.backgroundSize = "auto";
cle.style.backgroundPosition = "75% 85%";
cle.style.zIndex = "100";
cle.id = "cle";
cle.style.backgroundImage = "url('img/zeldaCle.gif')";
// cle.style.top = H_GRID * GRID_SIZE - GRID_SIZE + "px";
// cle.style.left = V_GRID * GRID_SIZE - GRID_SIZE + "px";
cle.ramasse = false;
cle.passage = false;

function creationCle() {

    document.getElementById("plateau").appendChild(cle);

}
