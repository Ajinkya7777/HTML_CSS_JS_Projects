let value = document.getElementById("value");
let btns = document.querySelectorAll(".btn");

let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let classes = event.currentTarget.classList;
    if (classes.contains("increase")) {
      count++;
    } else if (classes.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    value.textContent = count;

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
  });
});
