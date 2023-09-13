function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAndSetNumber() {
  randomNumber1 = getRandomNumber(1, 6);
  randomNumber2 = getRandomNumber(1, 6);
  localStorage.setItem("randomNumber1", randomNumber1);
  localStorage.setItem("randomNumber2", randomNumber2);
}

let randomNumber1 = localStorage.getItem("randomNumber1");
let randomNumber2 = localStorage.getItem("randomNumber2");

if (randomNumber1 === null || randomNumber2 === null) {
  getAndSetNumber();
} else {
  document
    .querySelector(".img1")
    .setAttribute("src", `./images/dice${randomNumber1}.png`);

  document
    .querySelector(".img2")
    .setAttribute("src", `./images/dice${randomNumber2}.png`);

  getAndSetNumber();
}

let title = document.querySelector("h1");
let savedTitle = localStorage.getItem("title");

function winnerTitle() {
  if (savedTitle === null) {
    localStorage.setItem("title", title.textContent);
  } else {
    if (randomNumber1 > randomNumber2) {
      title.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
      title.textContent = "Player 2 Wins! 🚩";
    } else {
      title.textContent = "Draw!";
    }
    localStorage.setItem("title", title.textContent);
  }
}

winnerTitle();
