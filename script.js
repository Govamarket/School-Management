
// The following are the navigation manipulations
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-lists");
  const navLinks = document.querySelectorAll(".nav-lists li");
  const container = document.querySelector(".container");
  // the toggle navigation
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
        container.style.opacity = "1";
      } else {
        container.style.opacity = "0";
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Working on the local storage to secure individual data structures

const localStore = () => {
  const checkResult = document.querySelector(".checkresult");

  // Working on the boolean properties
  if (checkResult == 0) {
    window.location.href = "index.html";
    style.display.background = "red";
  }
}

localStore();


// Using mathRandom to generate student Id (number)  I don't know how efficient or effective it will be...