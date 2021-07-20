// getting elements 
let user = document.getElementById("user");
let password = document.getElementById("password");

// onclick function: print user and password then clear fields.
function submit(){
    let userValue = document.getElementById("user").value;
    let passwordValue = password.value;
    console.log(userValue);
    console.log(passwordValue);
    user.value = "";
    password.value = "";
}