// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let image = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

let prvBtn = document.querySelector(".prev-btn");
let nxtBtn = document.querySelector(".next-btn");
let rndBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", setPerson(currentItem));

function setPerson(person) {
  let item = reviews[person];
  image.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nxtBtn.addEventListener("click", () => {
  if (currentItem > reviews.length - 1) currentItem = 0;
  else currentItem++;
  setPerson(currentItem);
});
prvBtn.addEventListener("click", () => {
  if (currentItem < 0) currentItem = reviews.length - 1;
  else currentItem--;
  setPerson(currentItem);
});
rndBtn.addEventListener("click", () => setPerson(getRandomReview()));

const getRandomReview = () => Math.floor(Math.random() * reviews.length);
