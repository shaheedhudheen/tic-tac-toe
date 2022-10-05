const Players = (name, sign) => {
  const getName = () => name;
  const getSign = () => sign;

  return { getName, getSign };
};

const gameBoard = (() => {
  let gameboard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

  function setBoard(index, sign) {
    gameboard[index] = sign;
  }

  function getBoard(index) {
    return gameboard[index];
  }

  return { getBoard, setBoard, gameboard };
})();

const gameController = (()=> {
  
})()

const displayController = (() => {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {});

  let playerX = Players("ahammed", "X");
  let playerO = Players("Shaheedhudheen", "O");

  let currentPlayer = playerX;

  function switchPlayers() {
     if (currentPlayer.getSign() === playerX.getSign()) {
      currentPlayer = playerO;
     } else {
       currentPlayer = playerX;
     }
  }

  function addMarker() {
    boxes.forEach((box) => {

      box.addEventListener(
        "click",
        (e) => {
          let index = box.getAttribute("data-index");
          console.log(currentPlayer.getSign());
          if ((currentPlayer.getSign() === playerX.getSign())) {
            gameBoard.setBoard(index, playerX.getSign())
          } else {
            gameBoard.setBoard(index, playerO.getSign());
          }
          box.textContent = gameBoard.getBoard(index)
          switchPlayers();
        },
        { once: true }
      );
    });
  }

  return { addMarker };
})();




displayController.addMarker();