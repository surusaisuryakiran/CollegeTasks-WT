const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let valid = true;

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const subject = document.getElementById("subject").value.trim();
const message = document.getElementById("message").value.trim();

document.getElementById("nameError").textContent = "";
document.getElementById("emailError").textContent = "";
document.getElementById("subjectError").textContent = "";
document.getElementById("messageError").textContent = "";

if(name===""){
document.getElementById("nameError").textContent =
"Name cannot be empty";
valid=false;
}

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
document.getElementById("emailError").textContent =
"Enter a valid email";
valid=false;
}

if(subject.length<5){
document.getElementById("subjectError").textContent =
"Minimum 5 characters required";
valid=false;
}

if(message.length<20){
document.getElementById("messageError").textContent =
"Message should contain at least 20 characters";
valid=false;
}

if(valid){

alert("Message Sent Successfully!");

form.reset();

}

});