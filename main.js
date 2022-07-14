const cards = [
  "aba",
  "ima",
  "hallel",
  "ori",
  "yarden",
  "nave",
  "yedaya",
  "elisheva",
  "meir",
  "mali",
  "aba",
  "ima",
  "hallel",
  "ori",
  "yarden",
  "nave",
  "yedaya",
  "elisheva",
  "meir",
  "mali",
];
let pair = [];
let point1 = 0;
let point2 = 0;
let player1 = prompt("hi player 1! enter your name:");
document.getElementById("score1").innerHTML = `${player1}: ${point1}`;
let player2 = prompt("hi player 2! enter your name:");
document.getElementById("score2").innerHTML = `${player2}: ${point2}`;
let pointPair = document.getElementById("score1");
let pointPair2 = document.getElementById("score2");
let isTurn = document.getElementById("isTurn");
let playNaw = player1
isTurn.innerHTML = `now ${playNaw}'s turn to play`
let win = 0

function addCards(v, i, arr) {
  const element = document.createElement("div");
  element.innerHTML = v;
  element.id = i;
  element.className = "card";
  const board = document.getElementById("board");
  board.appendChild(element);
}

board.addEventListener("click", (i) => {
  console.log(i.target.className);
  if (i.target.id == "board") {
    console.log("ooooops");
    return;
  }
  if (pair.length == 1) {
    if (i.target.id == pair[0].id) {
      return;
    }
  }
  i.target.style.color = "red";
  pair.push(i.target);
  if (pair.length == 2) {
    if (pair[0].innerHTML == pair[1].innerHTML) {
      win += 1
      if (playNaw == player1) {
        point1 += 1;
        pointPair.innerHTML = `${player1}: ${point1}`;
      }
      else {
        point2 += 1
        pointPair2.innerHTML = `${player2}: ${point2}`;
      }
      if (win == 10) {
        if (point1 > point2) {
          isTurn.innerHTML = `The winner is: ${player1} you got ${point1} points!`
          alert(`The winner is: ${player1} you got ${point1} points!`)
        }
        else if (point2 > point1) {
          isTurn.innerHTML = `The winner is: ${player2} you got ${point2} points!`
          alert(`The winner is: ${player2} you got ${point2} points!`)
        }
        else {
          isTurn.innerHTML = "you all winners!!"
          alert(`you all winners!!`)

        }
      }
      else {
        setTimeout(() => {
          alert("good job! your turn again");
        }, 200);

        pair = [];
      }
    }
    else {
      setTimeout(() => {
        pair[1].style.color = "transparent";
        pair[0].style.color = "transparent";
        pair = [];
      }, 500);
      if (playNaw == player1) {
        playNaw = player2
      }
      else {
        playNaw = player1
      }
      isTurn.innerHTML = `naw ${playNaw} turn to play`
      setTimeout(() => {
        alert("next player!");
      }, 500);

    }
  }
});
shuffleCards(cards);
cards.forEach(addCards);

function shuffleCards(v, i, arr) {
  cards.sort(() => (Math.random() > 0.5 ? 1 : -1));
}
function try1(e) {
  cards.onclick("click");
  return console.log("work");
}
