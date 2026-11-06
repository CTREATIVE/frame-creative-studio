let backToTop= document.getElementById("backtoup")
backToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});  
})
window.addEventListener("scroll", function() {
   if(window.scrollY>300){
    backToTop.style.opacity= "1"
    backToTop.style.visibility="visible"
}else{
      backToTop.style.opacity= "0"
    backToTop.style.visibility="hidden" 
} 
});


emailjs.init({
    publicKey: "m28Ez9xcbLpEpw7GD"
});


let formStatus = document.getElementById("form-status");
let sendButton = document.getElementById("senmes");

let contactForm=document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event){
 event.preventDefault() 
sendButton.disabled = true;
sendButton.textContent = "Sending...";

formStatus.className = "form-status loading";
formStatus.textContent = "Sending your message...";

emailjs.sendForm(
        "service_ylsu8yl",
        "template_rcsz8gt",
        contactForm
 )

 .then(function(){
formStatus.className = "form-status success";
formStatus.textContent = "Message sent successfully!";

contactForm.reset();
})

.catch(function(error){
formStatus.className = "form-status error";
formStatus.textContent = "Message failed to send. Please try again.";

console.log(error);
})

.finally(function() {
    sendButton.disabled = false;
    sendButton.textContent = "Send Message";
});

});


