
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY1W3AbaPv8yXikBKSCguev2yPsl2dN6I",
    authDomain: "lets-chat-bf299.firebaseapp.com",
    databaseURL: "https://lets-chat-bf299-default-rtdb.firebaseio.com",
    projectId: "lets-chat-bf299",
    storageBucket: "lets-chat-bf299.appspot.com",
    messagingSenderId: "1070908926199",
    appId: "1:1070908926199:web:787236f8a953920dd28bf2"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("room_name",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
        }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
