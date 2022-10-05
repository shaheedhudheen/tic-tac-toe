const Players = (name, sign) => {
  const getName = () => name;
  const getSign = () => sign;

  return { getName, getSign };
};

const gameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  function setBoard(index, sign) {
    gameboard[index] = sign;
  }

  function getBoard(index) {
    return gameboard[index];
  }

  return { getBoard, setBoard, gameboard };
})();

const gameController = (() => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  
})();

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
          if (currentPlayer.getSign() === playerX.getSign()) {
            gameBoard.setBoard(index, playerX.getSign());
          } else {
            gameBoard.setBoard(index, playerO.getSign());
          }
          box.textContent = gameBoard.getBoard(index);
          switchPlayers();
        },
        { once: true }
      );
    });
  }

  return { addMarker };
})();

displayController.addMarker();
