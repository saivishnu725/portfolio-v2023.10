const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let next = 1;

document.querySelector("#hack").onclick = (event) => {
  let iteration = 0;
  let words = ["SAI VISHNU", "THE UNCONCERNED APE"];
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
};
