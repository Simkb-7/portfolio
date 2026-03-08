
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if(hamburger){
hamburger.addEventListener("click", () => {
navLinks.classList.toggle("show");
});
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault();
const target = document.querySelector(this.getAttribute("href"));
if(target){
target.scrollIntoView({behavior:"smooth"});
}
});
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const msg = document.getElementById("message").value.trim();

if(name === "" || email === "" || msg === ""){
message.textContent = "Please fill all fields.";
message.style.color = "red";
}else{
message.textContent = "Message sent successfully!";
message.style.color = "green";
form.reset();
}
});
}
