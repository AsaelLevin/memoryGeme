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
let per = [];
let point1= 0
let point2= 0
function addCards(v, i, arr) {
  const element = document.createElement("div");
  element.innerHTML = v;
  element.id = i;
  element.className = "card";
  const board = document.getElementById("board");
  board.appendChild(element);
}
board.addEventListener("click", (i) => {
  i.target.style.color = "red";
  per.push(i.target); 
    console.log(i.target);
    if (per.length == 2) {
      if (per[0].innerHTML == per[1].innerHTML) {
        point1+=1
        alert("good job! your turn agein")
        per=[];
      } else {
        
        setTimeout(() => {
          per[1].style.color = "transparent";
          per[0].style.color = "transparent";
          per = [];
        }, 1000);
         if (per == [0]){
           setTimeout(() => {
              alert("next player!")
           }, 2000);
         
        }
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
