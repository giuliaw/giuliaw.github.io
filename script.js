function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/* Funktion für das Wetter von weatherwidget.io */ 
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

function myweatherFunction(id) {
var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }  
}

/* Initialisierung beim Laden der Seite
Weather Widget nicht anzeigen */
function myload () {
  var x1 = document.getElementById("cali-weather-id");
  var x2 = document.getElementById("torquay-weather-id");

  x1.style.display = "none";
  x2.style.display = "none";
}