// Start Call Elements
let f_n = document.getElementById("f-n");
let l_n = document.getElementById("l-n");
let pass = document.getElementById("pass");
let show = document.getElementById("show");
let icon = document.getElementById("icon");
let age = document.getElementById("age");
let textmessege = document.getElementById("text-messege");
let mail = document.getElementById("e-mail");
let vfile = document.getElementById("vfile");
// End Call Variables
function vform() {
    if (f_n.value.length < 2) {
        alert("Enter the Valid First Name (Should have Two characters at least)");
        return false;
    }
    if (l_n.value.length < 2) {
        alert("Enter the Valid Last Name (Should have Two characters at least)");
        return false;
    }
    if (age.value < 18) {
        alert("The Age Must be greater than 18")
        return false;
    }
    if (textmessege.value.length < 20) {
        alert("The Minimum Characters in your Messege must be 20 characters at least.");
        return false;
    }
    return true;
}
function passW() {
    if (pass.value.length >= 10) {
        show.textContent = "Strong Password";
        show.classList.add("red");
    } else if (pass.value.length >= 6 && pass.value.length < 10) {
        show.textContent = "Medium Password";
        show.classList.remove("red");
        show.classList.add("green");
    } else if (pass.value.length > 0 && pass.value.length < 6) {
        show.innerHTML = "Weak Password";
        show.classList.remove("green");
        show.classList.add("yellow");
    } else if (pass.value.length == 0) {
        show.innerHTML = "Write Password";
        show.classList.remove("yellow");
    }
    else {
        return false;
    }
    return true;
}
function lastName() {
    if (f_n.value.length >= 2) {
        l_n.removeAttribute("disabled");
        return true;
    }
}
function validateMail() {
    let atindex = mail.value.indexOf("@");
    let dotindex = mail.value.lastIndexOf(".");
    if (atindex < 4 || (dotindex-atindex)<=2 || (mail.value.length-dotindex)<=2) {
        alert("Enter The Valid Email");
        return false;
    }
    return true;
}
function validateFile() {
    let slic = vfile.value.slice(-4);
    if (slic != ".pdf") {
        alert("Your CV Must be PDF Type");
        return false;
    }
    return true;
}
icon.onclick = function () {
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}


