function iniciosesion() {
var nombre = document.getElementById("entradadetexto").value;
localStorage.setItem("nombre",nombre);
window.location="kwitter_room.html";

}