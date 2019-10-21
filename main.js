const heroSection = document.querySelector("#hero"); // Select the hero section
const navBar = document.querySelector("nav"); // Seclect the navbar
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-30px"
};
const heroSpecialObs = new IntersectionObserver(
  (entries) => {
    entries.forEach(() => toggleUI()); // run toggle when intersecting changes.
  },
  options
);

heroSpecialObs.observe(heroSection); //Ask the heroSection observer to observe hero section

const toggleUI = () => {
  navBar.classList.toggle("heroSpecial");
};