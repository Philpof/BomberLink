let animationDuPersonnage = [];
animationDuPersonnage.push("url('img/zeldaFeu1.png')");
animationDuPersonnage.push("url('img/zeldaFeu2.png')");
animationDuPersonnage.push("url('img/zeldaFeu3.png')");
animationDuPersonnage.push("url('img/zeldaFeu2.png')");


let iPerso = 0;

function persoBouge(){

    if (iPerso < animationDuPersonnage.length) {
      document.getElementById('personnage').style.backgroundImage = animationDuPersonnage[iPerso];
      iPerso++;
    }
    else {
      iPerso = 0;
    }
  window.setTimeout("persoBouge()", 75)
}

// Charge la fonction
window.onload = function(){
persoBouge();
}


// conflit avec animation du brasero
