const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", (event) =>
    button.parentNode.classList.toggle("active")
  );
});
