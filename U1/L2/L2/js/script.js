// Globala variabler
var input1Elem, input2Elem , msgElem, selFruitsElem, selFruitNr;



// ------------------------------
// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
	
    input1Elem = document.getElementById("input1");
    input2Elem = document.getElementById("input2");
    msgElem = document.getElementById("message");
    selFruitsElem = document.getElementById("selectedFruits");

    document.getElementById("btn1").onclick = showFruit;
    document.getElementById("btn2").onclick = addFruits;

    selFruitNr = 0;



} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
// ------------------------------

// funktionen låter avändaren bestämma vilken vild som skall visas på hemsidan genom att ange ett tal.
function showFruit() {

    //Variablen sparar användarens valda värde för bilden som skall visas
    let nr = checkNr(input1Elem.value,5);
    //Variablen sparar värdet för filvägen samt namnet på den bild som skall användas 
    let url;

   
    input1Elem.value = nr;
//    msgElem.innerHTML = "Värdet som användes för att bestämma bild var " + nr;


    
    
document.getElementById("fruitImg").src=getUrl(nr);


}

function checkNr(nr , high) {

    if(isNaN(nr)){
        msgElem.innerHTML = "Du måste skriva ett tal med siffror";
        return null;

    }

    if( nr < 1 || nr > high) {
        msgElem.innerHTML = "Du måste skriva ett tal mellan 1 och "+high;
        return null;

    }
    nr = parseInt(nr);

    selFruitNr = nr;

    msgElem.innerHTML = "";

return nr;


} 

function getUrl(nr){

    let url;

    switch (nr) {
        case 1:
          url = "img/apple.png";
          break;
        case 2:
          url = "img/banana.png"; 
          break;
          case 3:
              url =  "img/orange.png"; 
              break;        
        case 4:
          url = "img/pear.png"; 
          break;
          case 5:
              url = "img/pineapple.png"; 
              break;
  
        default:
          url = "No value found";
      }
      return url;


}


function addFruits() {


    if(5<selFruitNr && selFruitNr<1){
            return;
    }

    let amount = checkNr(input2Elem.value,9);

    if( amount == null){
        return;
    }


    let fruitUrl = getUrl(selFruitNr);
    let imgList = "";


    for ( let i = 0; i< amount; i++ ){

        imgList += "<img src='" + fruitUrl + "' alt='frukt'>";

    }


    selFruitsElem.innerHTML += imgList;

    return;

}