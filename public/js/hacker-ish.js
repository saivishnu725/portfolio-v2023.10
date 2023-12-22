// TODO: replace with a better solution. this is just a hacky solution to get the job done.
// TODO (REPEAT): add a better solution for the hero image and motto change.
// TODO: make use of data from json and make it scalable and not limited to two types of names.

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const dataLocation = window.location.origin + "/data/home-info.json";
const dataLocation = "data/home-info.json";
// fetch the json and parse it
let info = null;

function fetchData() {
  fetch(dataLocation)
    .then(
      (response) =>
        console.log(response.status) || console.log(response) || response
    )
    .then((response) => response.text)
    .then((body) => (info = JSON.parse(body)));
}
// .then((response) => console.log(response.body) || response.text)

fetchData();
// info = await fetchData();
// console.log(info);
let interval = null;
let total = null;
let current = 0;
let next = 1;

// TODO: remove these after replacing them with the data from json
let images = ["images/personal-logo-nobg.png", "images/logo.png"];
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
    // event.target.style.fontSize = info[current].fontSize;
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
