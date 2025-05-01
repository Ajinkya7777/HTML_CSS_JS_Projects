const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomColor = getRandom();
  document.body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});

function getRandom() {
  let random = Math.floor(Math.random() * colors.length);
  return random;
}
