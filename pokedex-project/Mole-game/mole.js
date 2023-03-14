const holes = document.querySelectorAll(".hole");
let score = document.querySelector(".score");

let hitPosition;
let isGameFinished = false;
let scoreTotal = 0;
let randomTime = 0;

function printMole() {
  if (!isGameFinished) {
    holes.forEach((hole) => {
      hole.classList.remove("up");
    });

    let randomHole = holes[Math.floor(Math.random() * 6)];
    randomHole.classList.add("up");
    hitPosition = randomHole.classList[2];

  }
}


function randomTimer(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (randomTime = randomNumber);
}

function moveMole() {
  setInterval(printMole, randomTime);
}


const addEventListener = () =>{

holes.forEach((hole) => {
  hole.addEventListener("mousedown", () => {
    if (hole.classList[2] === hitPosition && hole.classList.contains("up")) {
      scoreTotal++;
      score.textContent = scoreTotal;
      hole.classList.remove("up");
    }
  });
})


}



function startGame() {
  score.textContent = 0;
  scoreTotal = 0;
  randomTimer(800, 1000);
  moveMole();
  addEventListener()
  setTimeout(() => {
    holes.forEach((hole) => {
      hole.classList.remove("up");
    });
    document.location.reload();
    return (isGameFinished = true);
  }, 15000);
}


