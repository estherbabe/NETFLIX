
function required() {
    let email = document.getElementById("email");
    if (email.value === "") {
     document.getElementById("email-error").innerHTML="Email is required!";
    } else {
        document.getElementById("email-error").innerHTML="";
    }
}
document.getElementById("get-started-button").addEventListener("click", required);