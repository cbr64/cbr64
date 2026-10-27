console.log("Hola mundo!");


const TOGGLE_BTN = document.getElementById("modoOscuro");
const ROOT = document.documentElement;
TOGGLE_BTN.addEventListener("click", function() {
  ROOT.classList.toggle("dark-mode");
});

/*
function saludar(nombre="mundo") {
alert("Hola " + nombre);
}

saludar();
saludar("Charly");
*/