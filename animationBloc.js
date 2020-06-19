// Un tableau qui va contenir toutes les images dans l'ordre

  var imagesFeu = Array();
  imagesFeu.push("img/zeldaFeu1.png");
  imagesFeu.push("img/zeldaFeu2.png");
  imagesFeu.push("img/zeldaFeu3.png");
  imagesFeu.push("img/zeldaFeu2.png");

  var iFeu = 0;

  function changerImage(){
    // document.getElementById("feu").src = imagesFeu[iFeu];
    // block.style.backgroundImage = imagesFeu[iFeu];
    if(iFeu< imagesFeu.length - 1){
      iFeu++;
    }
    else {
      iFeu = 0;
    }

  window.setTimeout("changerImage()", 75)
  }

  // Charge la fonction
  window.onload = function(){
  changerImage();
  }
