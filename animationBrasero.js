/* Animation en image par image avec une boucle > réaliser pour le défi personnel de le faire en javascript (mais un.gif aurait pu être utilisé) */

const FEUBRASERO = document.querySelectorAll('.feuBrasero');

// Un tableau qui va contenir toutes les images dans l'ordre
let imagesFeu = [];
imagesFeu.push("url('img/zeldaFeu1.png')");
imagesFeu.push("url('img/zeldaFeu2.png')");
imagesFeu.push("url('img/zeldaFeu3.png')");
imagesFeu.push("url('img/zeldaFeu2.png')");

let iFeu = 0;

function changerImageFeu() {

    if (iFeu < imagesFeu.length-1) {
      FEUBRASERO.forEach(flamme => {
        flamme.style.backgroundImage = imagesFeu[iFeu];
      });
      iFeu++;
    }
    else {
      FEUBRASERO.forEach(element => {
        element.style.backgroundImage = imagesFeu[3];
      });
      iFeu = 0;
    }
  window.setTimeout("changerImageFeu()", 75)
}
