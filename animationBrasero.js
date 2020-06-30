/* Animation en image par image avec une boucle > réaliser pour le défi personnel de le faire en javascript (mais un.gif aurait pu être utilisé) */

let feuBrasero = document.querySelectorAll('.feuBrasero');

// Un tableau qui va contenir toutes les images dans l'ordre
let imagesFeu = [];
imagesFeu.push("url('img/zeldaFeu1.png')");
imagesFeu.push("url('img/zeldaFeu2.png')");
imagesFeu.push("url('img/zeldaFeu3.png')");
imagesFeu.push("url('img/zeldaFeu2.png')");

let iFeu = 0;



function changerImageFeu() {

    if (iFeu < imagesFeu.length-1) {
      feuBrasero.forEach(flamme => {
        if (flamme.className === "feuBrasero") {
          flamme.style.backgroundImage = imagesFeu[iFeu];
        }
      });
      iFeu++;
    }
    else {
      feuBrasero.forEach(flamme => {
        if (flamme.className === "feuBrasero") {
          flamme.style.backgroundImage = imagesFeu[3];
        }
      });
      iFeu = 0;
    }
  window.setTimeout("changerImageFeu()", 75)
}
