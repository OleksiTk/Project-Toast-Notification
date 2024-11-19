let buttons = document.querySelectorAll(".button--body button");
let notifationButton = document.querySelector(".notifation");

buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    NotifationGet(button);
  });
});

function NotifationGet(button) {
  let p = document.createElement("p");
  let span = document.createElement("span");

  if (button.textContent === "Success") {
    // Перевіряємо текст кнопки
    span.innerHTML = `<div class="fa-check"></div>     <img class="img__notifaction" width="50" height="40" src="img/check.png" alt="" /> Success clicked`;
  } else if (button.textContent === "Error") {
    // Перевіряємо текст кнопки
    span.innerHTML = `<div class="fa-xmark">  <img src="img/file.png"  width="40" height="40" alt="" /></div>  Error clicked`;
  } else if (button.textContent === "Invalid") {
    // Перевіряємо текст кнопки
    span.innerHTML = `<div class="fa-exclamation"> <img src="img/caution.png"  width="50" height="50"alt=""></div>Invalid clicked`;
  } else {
    console.log("Unknown button clicked");
  }
  p.classList.add("notifation--show");
  notifationButton.appendChild(p);
  span.classList.add("notifation--show-span");
  p.appendChild(span);

  setTimeout(() => {
    p.remove();
    span.remove();
  }, 5000);
}
