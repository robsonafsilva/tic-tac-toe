document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
})

function handleClick(event) {
  //console.log(event.target)

  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      let winner = document.querySelector(".winner")
      player = (playerTime == 0) ? "Winner: 🛡️" : "Winner: ⚔️"
      winner.innerText = player
      //alert("O jogo acabou! - O Vencedor foi " + playerTime)
    }, 10)
  }
  updateSquare(position);
}

function updateSquare(position){
  let square = document.getElementById(position.toString())
  //console.log(position)
  let symbol = board[position]
  square.innerHTML = `<div class='${symbol}'></div>`
}

function btnClick(){
  btn = document.querySelector(".button")
  btn.addEventListener("click", restart)
}

