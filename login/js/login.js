document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if(username === savedUser &&
       password === savedPass){

        alert("Login berhasil!");

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "../index.html";

    } else {

        alert("Username atau password salah!");

    }
 
});
