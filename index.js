let mail = document.getElementById("email").value;
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let pass = document.getElementById("password").value;

let btn = document.querySelector(".btn");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
btn.addEventListener("click", function () {
  checkInputs();
});
function checkInputs() {
  if (!fname) {
    document.querySelectorAll(".icon")[0].style.opacity = "1";
    document.querySelectorAll(".input-text")[0].style.opacity = "1";
  }
  if (!lname) {
    document.querySelectorAll(".icon")[1].style.opacity = "1";
    document.querySelectorAll(".input-text")[1].style.opacity = "1";
  }
  if (!mail) {
    document.querySelectorAll(".icon")[2].style.opacity = "1";
    document.querySelectorAll(".input-text")[2].style.opacity = "1";
  }
  if (!pass) {
    document.querySelectorAll(".icon")[3].style.opacity = "1";
    document.querySelectorAll(".input-text")[3].style.opacity = "1";
  }
}
