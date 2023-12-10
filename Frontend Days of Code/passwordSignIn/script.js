function seePass() {
    const pass = document.getElementById("pass");
    const eye = document.getElementById("eye");
    if (pass.type === "password") {
        pass.type = "text";
        eye.setAttribute("src", "images/eye-off-outline.svg");
    }
    else {
        pass.type = "password";
        eye.setAttribute("src", "images/eye-outline.svg");
    }
}