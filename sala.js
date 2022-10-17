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
    var ch =localStorage.getItem("sala");
    var ill =localStorage.getItem("nombre");

function ff() {
    var hola = document.getElementById("chat").value;
    firebase.database().ref(ch).push({
      nombre:ill,
      mensaje:hola,
      likes:0
    });
    document.getElementById("chat").value="";
}
function obtenerMensajes() {
  firebase.database().ref("/" + ch).on('value', function (snapshot) {
      document.getElementById("chats").innerHTML = ""; //añadir id 
      snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          childData = childSnapshot.val();
          if (childKey != "purpose") { //añadir propósito
              mensajeKey = childKey;
              messageData = childData;
              //Iniciar código
              nombre = messageData['nombre'];
              mensaje = messageData['mensaje'];
            likes = messageData['likes'];
            nombre1 = "<h4>"+nombre+"<img style='width:50px' src='tick.png'> </h4>";
            mensaje1 = "<p id='colortexto'>"+mensaje+"</p>";
            likes1 = "<button id='botonuwu' value="+likes+" onclick ='cantidadlikes()'>likes "+likes+"</button>";
            gg = nombre1+mensaje1+likes1;
            document.getElementById("chats").innerHTML+=gg;
              //Fi del código
          }
      });
  });
}
obtenerMensajes();
