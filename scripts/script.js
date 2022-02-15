let toggleButton = document.querySelector(".toggle-button");
let navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  console.log("clicked");
  navbarLinks.style.display = "unset";
});

let close = document.querySelector(".res");
close.addEventListener("click", () => {
  navbarLinks.style.display = "none";
});
