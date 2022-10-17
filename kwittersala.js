usuarionombre = localStorage.getItem("nombre");
document.getElementById("bienvenida").innerHTML="BIENVENID@ "+ usuarionombre;
console.log(usuarionombre);
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyD_ueMF_FB4DbdpFwYm4tmfMyakO2pDsnw",
      authDomain: "dsad-dd0d6.firebaseapp.com",
      databaseURL: "https://dsad-dd0d6-default-rtdb.firebaseio.com/",
      projectId: "dsad-dd0d6",
      storageBucket: "dsad-dd0d6.appspot.com",
      messagingSenderId: "469005258577",
      appId: "1:469005258577:web:f3760a3ab6022620118d70"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("sala1").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      sa = "<div id="+Room_names+" onclick='tb(this.id)'>"+Room_names+"</div> <hr>";
      document.getElementById("sala1").innerHTML+=sa;
      //Final del código
      });});}
getData();

function crear() {
      var f = document.getElementById("nombresala").value;
      firebase.database().ref("/").child(f).update({
            purpose:"añadirsala"
      });
      localStorage.setItem("sala",f);
      window.location.replace("sala.html"); 
} 
 function tb(Room_names) {
      localStorage.setItem("sala",Room_names);
      window.location="sala.html";

 }
 function salirde() {
      localStorage.removeItem("nombre");
      localStorage.removeItem("sala");
      window.location.replace("index.html");
 }