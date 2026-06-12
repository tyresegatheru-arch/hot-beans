function validateForm(){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let role = document.getElementById("role").value;
let qualification = document.getElementById("qualification").value;
let skills = document.getElementById("skills").value.trim();

let message = document.getElementById("message");

// validation checks
if(name === ""){
message.innerHTML = "Enter full name";
return false;
}

if(!email.includes("@")){
message.innerHTML = "Enter valid email";
return false;
}

if(skills.length < 10){
message.innerHTML = "Add more skills detail";
return false;
}

// success output
message.innerHTML =
"Application submitted ✔<br>" +
"Role: " + role + "<br>" +
"Qualification: " + qualification;

return false;
}
