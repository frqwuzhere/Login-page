let button = document.getElementsByClassName("switch-btn")[0];
let body = document.getElementsByTagName("body")[0];
let form = document.getElementById("form-section");
let submit = form.getElementsByTagName("button")[0];
let forget = form.getElementsByClassName("form-check-forget")[0];
let bg1 = document.getElementsByClassName("bg-1")[0];
let bg2 = document.getElementsByClassName("bg-2")[0];

button.addEventListener("click", function () {
  body.classList.toggle("light");
  form.classList.toggle("light");
  submit.classList.toggle("light");
  forget.classList.toggle("light");
  bg1.classList.toggle("light");
  bg2.classList.toggle("light");

  setTimeout(function () {
    if (bg1.classList.contains("light") && bg2.classList.contains("light")) {
      bg1.src = "assets/wave-3.png";
      bg2.src = "assets/wave-4.png";
    } else {
      bg1.src = "assets/wave-1.png";
      bg2.src = "assets/wave-2.png";
    }
  }, 10);
});
