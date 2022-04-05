const cards = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
];

function addCards(v, i, arr) {
  const element = document.createElement("div");
  element.innerHTML = v;
  element.id = i;
  element.className= "card"
  const board = document.getElementById("board");
  board.appendChild(element);
}
shuffleCards(cards);
cards.forEach(addCards);

function shuffleCards(v, i, arr) {
  cards.sort(() => (Math.random() > 0.5 ? 1 : -1));
}
