const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let next = 0;
let images = ["images/personal-logo.png", "images/logo.png"];
let words = ["SAI VISHNU", "THE UNCONCERNED APE"];
let motto = [
  `just a tech. <br> a small grain of sand from the beaches they left behind.`,
  `passionate tech enthusiast. <br> currently a student. <br> trying to figure out what i want to do with life.`,
];

const heroImage = document.querySelector("#hero-image");
const heroMotto = document.querySelector("#hero-about");

document.querySelector("#hack").onclick = (event) => {
  let iteration = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    if (next == 1) {
      event.target.style.fontSize = "2rem";
    } else {
      event.target.style.fontSize = "2.5rem";
    }
    event.target.innerText = words[next]
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return words[next][index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= words[next].length) {
      clearInterval(interval);
      if (event.target.innerText === words[0]) {
        next = 1;
      } else if (event.target.innerText === words[1]) {
        next = 0;
      }

      document.querySelector("#hack").setAttribute("data-value", words[next]);
    }

    iteration += 1 / 3;
  }, 30);
  if (document.getElementById("hack").getAttribute("data-value") == words[0]) {
    heroImage.animate(
      { opacity: 0 },
      { duration: 500, fill: "forwards" }
    ).onfinish = () => {
      document.querySelector(".hero").style.background = "black";
      heroImage.setAttribute("src", images[0]);
      heroImage.animate({ opacity: 1 }, { duration: 500, fill: "forwards" });
    };
    heroMotto.animate(
      { opacity: 0 },
      { duration: 500, fill: "forwards" }
    ).onfinish = () => {
      heroMotto.innerHTML = motto[0];
      heroMotto.animate({ opacity: 1 }, { duration: 500, fill: "forwards" });
    };
  } else {
    heroImage.animate(
      { opacity: 0 },
      { duration: 500, fill: "forwards" }
    ).onfinish = () => {
      document.querySelector(".hero").style.background = "#222222";
      heroImage.setAttribute("src", images[1]);
      heroImage.animate({ opacity: 1 }, { duration: 500, fill: "forwards" });
    };
    heroMotto.animate(
      { opacity: 0 },
      { duration: 500, fill: "forwards" }
    ).onfinish = () => {
      heroMotto.innerHTML = motto[1];
      heroMotto.animate({ opacity: 1 }, { duration: 500, fill: "forwards" });
    };
  }
};
