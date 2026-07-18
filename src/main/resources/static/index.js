// alert("...");
console.log("Hello from js");

var users = [
    {
        "name" : "John Doe",
        "gender" : "Male",
        "img" : "john.png"
    },
    {
        "name" : "Po",
        "gender" : "Panda",
        "img" : "WhatsApp Image 2026-07-18 at 11.31.20 AM.jpeg"
    },
]

var id = 0;

function toggleUser(){
    id = (id +1)%2

    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;
    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;


}