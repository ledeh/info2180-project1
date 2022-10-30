/* Add your JavaScript to this file */
function validate(){
    let email = document.querySelector("newsletter.container.form-group input[name='email]")
    if (email ===''){
    alert("Please fill in email!");
    return false;
    }
    else{
        document.querySelector("form#email").classList.add("email");
        document.querySelector("form#email").innerHTML = ` ${sqr.innerHTML} has been added to the email list!`;
    }
}