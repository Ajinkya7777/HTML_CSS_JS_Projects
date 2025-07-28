/* WHY WE USE EVENT DELEGATIONS IN JAVASCRIPT -> REAL EXAMPLE 

const parentEl = document.getElementById("parent");
// console.dir(parentEl.childNodes);

document.querySelectorAll(".child").forEach((item) => {
  item.addEventListener("click", function () {
    console.log("You clicked " + item.textContent);
  });
});

let listEl = document.createElement("li");
listEl.classList.add("child");
let textNode = document.createTextNode("Item 4");
listEl.appendChild(textNode);
parentEl.appendChild(listEl);
console.log(parentEl);

*/

//JAVASCRIPT WITH EVENT DELEGATION
/*
const listsss = document.querySelectorAll("li.child");
console.log(listsss);

document.getElementById("parent").addEventListener("click", (event) => {
  if (event.target && event.target.matches("li.child")) {
    console.log("You clicked " + event.target.textContent);
  }
});

const parentEl = document.getElementById("parent");
console.dir(parentEl);
let listEl = document.createElement("li");
listEl.classList.add("child");
let textNode = document.createTextNode("Item 4");
listEl.appendChild(textNode);
parentEl.appendChild(listEl);
console.log(parentEl);

//we can use forEach on childNodes
const nodes = parentEl.childNodes;
console.log(nodes);

nodes.forEach((item) => console.log(item));

//we can't use forEach on children method but we can use it using spread operator
const childs = parentEl.children;
console.log(childs);
// childs.forEach((child) => console.log(child)); this line will not work bcz we have to convert HTMLCollection into array
const childsList = [...childs];
childsList.forEach((child) => console.log(child));

*/

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const items = document.querySelectorAll(".child");
btn.addEventListener("click", () => {
  btn.style.color = "yellow";
  btn.style.background = "red";
  body.style.background = "black";
  items.forEach((item) => {
    item.style.color = "blue";
  });
});

/*
const parent = document.querySelector("#parent");
console.log(parent);

const newItem = document.createElement("li");
newItem.textContent = "item4";
newItem.classList.add = "child";
console.log(newItem);
parent.appendChild(newItem);

parent.addEventListener("click", (e) => {
  console.log(e.currentTarget);
});

*/

const childs = document.querySelectorAll(".child");
console.log(childs);

const parent = document.querySelector("#parent");
console.log(parent);

const newItem = document.createElement("li");
newItem.textContent = "item4";
newItem.classList.add = "child";
console.log(newItem);
parent.appendChild(newItem);

childs.forEach((child) => {
  child.addEventListener("click", (event) => console.log(event.target));
});

console.log(parent.parentElement);

childs.forEach((child) => {
  child.addEventListener("click", () => console.log(child.closest(".parent")));
});
