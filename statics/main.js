/**
 * Select objects from DOM
 */

// Hero Section Navbar
const heroSection = document.querySelector("#hero"); // Select the hero section
const navBar = document.querySelector("nav"); // Seclect the navbar

// Contact me form
const userEmail = document.querySelector("#email");
const userName = document.querySelector("#name")
const btnGo = document.querySelector("#btnGo");
const form = document.querySelector("#contactForm");


const headeroptions = {
  root: null,
  threshold: 0,
  rootMargin: "-30px"
};
const heroSpecialObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => toggleUI(entry.isIntersecting)); // run toggle when intersecting changes.
  },
  headeroptions
);


const toggleUI = (isHeroSection) => {
  // navBar.classList.toggle("heroSpecial");
  if (isHeroSection) {
    navBar.classList.add("heroSpecial");
  } else {
    navBar.classList.remove("heroSpecial");
  }
};

heroSpecialObs.observe(heroSection); //Ask the heroSection observer to observe hero section

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnGo.disabled = true;
  btnGo.classList.remove("SENDERR");
  btnGo.innerHTML = "SENDING";
  const name = userName.value;
  const email = userEmail.value;
  console.log(`Name is ${name} and email is ${email}`);
  const dataPrepared = {
    name: name,
    mail: email
  };

  const contacturl = `https://api.crazydeveloper.fail/webactions/contactMeAction`;
  const contactoptions = {
    method: `POST`,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataPrepared)
  }
  fetch(contacturl, contactoptions)
    .then(
      ((result) => {
        console.log(result);
        btnGo.innerHTML = "SENT!";
        btnGo.classList.add("SENTCLR");
      })
    )
    .catch(
      (err) => {
        console.log(err);
        btnGo.disabled = false;
        btnGo.classList.add("SENDERR")
        btnGo.innerHTML = "<strong>Couldn't Send. Try again?</strong>";
      }
    );
});