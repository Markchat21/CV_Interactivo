let flag = false;

/*
Funcion para generar infromacion al hacer click
*/
function newInfo(id, row, info){
  var onClick = document.getElementById(id);
  var newElement = document.createElement("information")
  var rowInfo = document.getElementById(row);
  onClick.addEventListener('click', function(){
    if(!flag){
      newElement.innerHTML = info;
      rowInfo.appendChild(newElement);
      flag = true;
    }else{
      newElement.innerHTML = "";
      flag = false;
    }
    });
}

/*
Funcion para mostrar informacion al pasar el mouse encima
*/
function mouseOver(id, newText){
  var myElement = document.getElementById(id);
  var oldText = document.getElementById(id).textContent;
  myElement.addEventListener("mouseover", () => {myElement.innerHTML = newText;});
  myElement.addEventListener("mouseout", () => {myElement.innerHTML = oldText;});

}

/*
Funcion para minimizar las filas y resaltarlas
*/
function Bar(showBar, fila){
  var showBar = document.getElementById(showBar);
  var fila = document.getElementById(fila);
  showBar.addEventListener('click', function(){
    if(!flag){
      fila.style.display = "none";
      flag = true;
    }else{
      fila.style.display = "flex";
      flag = false;
    }
    });
  //resaltador
  showBar.addEventListener("mouseover", () => {showBar.style.color = 'grey';});
  showBar.addEventListener("mouseout", () => {showBar.style.color = 'white';});
  }

var rowInformation =  "Amplia trayectoria academica en la UBA me ha otorgado el hábito del estudio constante.";
var rowInformation1 = "Destacable carrera en Empresas de primer nivel me han dotado de una gran experiencia liderando equipos.";
newInfo("educacion", "eduCol", rowInformation);
newInfo("experiencia", "expCol", rowInformation1);

mouseOver("promedio", "Promedio general: 8.6");
mouseOver("mercadoLibre", "Empleado del mes 5 veces consecutivas");
mouseOver("ingles", "Certifiación C1 de Cambridge");

Bar("bar", "row");
Bar("bar1", "row1");
Bar("bar2", "row2");
Bar("bar3", "row3");





