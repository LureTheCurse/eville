var firebaseConfig = {
    apiKey: "AIzaSyCpFBWKn28kOOFRUwusY4m8tR5DW4vhKpY",
    authDomain: "eville-c7a07.firebaseapp.com",
    databaseURL: "https://eville-c7a07-default-rtdb.firebaseio.com",
    projectId: "eville-c7a07",
    storageBucket: "eville-c7a07.appspot.com",
    messagingSenderId: "673377084827",
    appId: "1:673377084827:web:d959a0587fabf464f9ad3e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
