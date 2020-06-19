document.onkeydown = function(event){
  var event = event || window.event,
  keyCode = event.keyCode;


case 32: // touche "Espace"
  let bombe = = document.createElement("div");
  coffre.style.width = "40px";
  coffre.style.height = "40px";
  coffre.style.display = "flex";
  coffre.style.position = "absolute";
  coffre.style.backgroundImage = "url('img/zeldaCoffreOpen.png')";
  coffre.style.backgroundRepeat = "no-repeat";
  coffre.style.backgroundSize = "contain";
  coffre.style.backgroundPosition = "center";
  coffre.style.zIndex = "40";
  break;
