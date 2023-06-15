
var firebaseConfig = {
      apiKey: "AIzaSyCK5lJWgTMsUMdgrd1e4yxxa39_BlzKbyc",
      authDomain: "eville-9d190.firebaseapp.com",
      projectId: "eville-9d190",
      storageBucket: "eville-9d190.appspot.com",
      messagingSenderId: "227224587911",
      appId: "1:227224587911:web:aa0caae8f49996f16ef222"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";
function addRoom(){
      Room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
purpose:"adding room name"
      });
      localStorage.setItem("room_name",Room_name);
      window.location="eville_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name-"+Room_names);
             //Start code
             row="<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
             document.getElementById("output").innerHTML +=row;

      //End code
      });
});
}
getData();
function redirectToRoomName(name){
      console.log(name);
localStorage.setItem("room_name",name);
window.location="eville_page.html";
}
function logout(){
      localStorage.removeItem("username_input");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
