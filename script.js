let eye = document.getElementById('eye');
let password = document.getElementById('pswrd');

eye.onclick = ()=>{
    if(password.type == "password"){
        password.type = "text";
        eye.src = "assets/openEye.png";
    } else {
        password.type = "password";
        eye.src = "assets/closeEye.png";
    }

}