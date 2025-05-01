const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

/*
// Normal Function for adding event listner replaced with arrow function
btn.addEventListener("click", function () {
  let concat = "#";
  for (let i = 0; i < 6; i++) {
    let random = getRandom();
    concat += hex[random];
  }

  document.body.style.backgroundColor = concat;
  color.textContent = concat;
});

//Normal Function for GetRandom()
 function getRandom() {
  return Math.floor(Math.random() * hex.length);
 }

 */

btn.addEventListener("click", () => {
  let concat = "#";
  for (let i = 0; i < 6; i++) concat += hex[getRandom()];
  document.body.style.backgroundColor = concat;
  color.textContent = concat;
});

const getRandom = () => Math.floor(Math.random() * hex.length);
