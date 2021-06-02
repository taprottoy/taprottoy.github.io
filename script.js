let emailEle = document.querySelector("#email");
let messageEle = document.querySelector("#message");
let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    let emailVal = emailEle.value;
    let messageVal = messageEle.value;

    if (emailVal.includes ("@")){
        alert("Thank you for your message. :)");
    } else {
        alert ("Oops, sorry. Looks like email has been entered incorrectly. Please try agian.");
    }
})