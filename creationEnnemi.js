let garde = document.getElementById('garde');
garde.style.width = GRID_SIZE + "px";
garde.style.height = GRID_SIZE + "px";
garde.style.position = "absolute";
garde.style.backgroundRepeat = "no-repeat";
garde.style.backgroundSize = "contain";
garde.style.backgroundPosition = "center";

function random100() {
  // return Math.floor(Math.random() * 100);
}


garde.style.marginLeft = (i * GRID_SIZE) + "px";
garde.style.marginTop = (j * GRID_SIZE) + "px";

document.getElementById("plateau").appendChild(garde);
