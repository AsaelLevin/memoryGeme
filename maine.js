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
  const board = document.getElementById("board");
  board.appendChild(element);
}
cards.forEach(addCards);
