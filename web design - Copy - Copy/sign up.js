let username;
let email;
let password;
document.getElementById("submit").onclick = function () {
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    alert(`welcome ${username} ,save your password`);
};
