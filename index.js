// Import stylesheets
import "./style.css"; 

var cityElems = document.getElementsByClassName("città");
for (let elem of cityElems ) {
  elem.onclick = () => display(elem.innerHTML);
  elem.onmouseover = () => {
    elem.style.color="red";
    elem.style.fontStyle="italic";
  }
  elem.onmouseout = () => {
    elem.style.color="black";
    elem.style.fontStyle="inherit";
  }
}

var submit = document.getElementById("submit");
submit.onclick = () => {
  var add = document.getElementById("add").value;
  console.log(add);

}

// Funzione collegata ai bottoni
// "window" necessario in StackBlitz, può essere
// omesso altrimenti
function display(city) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"

  // Funzione callback invocata quando la request termina
  request.onload = function() {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      document.getElementById("risposta").innerHTML =
        "A " + city + " ci sono " + dataObject.main.temp + " gradi.               La pressione è di " + dataObject.main.pressure + "";
    } else {
      document.getElementById("risposta").innerText = "Errore";
    }
  };

  // Applico il metodo "open"
  request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
      city,
    true
  );
  // Applico il metodo send (al termine chiamerà il callback "onload")
  request.send();
};
