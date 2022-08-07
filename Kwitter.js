function addUser(){
user_name =document.getElementById("user_name").value;
console.log("user"+user_name);
if(user_name != ""){ console.log("inside ff");
localStorage.setItem("user_name" , user_name);
window.location = "kwitter_room.html";

}

}