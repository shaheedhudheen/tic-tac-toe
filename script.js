const gameBoard = (() => {
  let board = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

  function addMarks(index, mark) {
    board[index] = mark;
  }

  function getMark(index){
    return board[index]
  }

  return { addMarks, getMark };
})();

const players = () => {

   ``
};

//display controller
const displayController = (() => {
  const boxContainer = document.querySelector(".container");
  const boxes = document.querySelectorAll(".box");
  

  //insert value of array to each box
  boxes.forEach((box, index) => {
    box.addEventListener(
      "click",
      (e) => {
        const index = box.getAttribute("data-index");
        gameBoard.addMarks(index, "X");
      },
      { once: true }
    );
  });

  return {  };
})();

const gameController = (() => {
  
  let currentPlayer = players.playerX

  function switchPlayer(currentPlayer) {
    if(currentPlayer = playerX){
      currentPlayer = players.playerO
    } else{
      return
    }
  }

  return { switchPlayer };
})();
