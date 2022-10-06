const Players = (name, sign) => {
  const getName = () => name;
  const getSign = () => sign;

  return { getName, getSign };
};

const gameBoard = (() => {
  let board = [""];

  function setBoard(index, sign) {
    board[index] = sign;
  }

  function getBoard(index) {
    return board[index];
  }

  return { getBoard, setBoard, board };
})();

const displayController = (() => {

  let board = gameBoard.board;
  let boxes = document.querySelectorAll(".box");

  let playerX = Players("playerX", "X");
  let playerO = Players("playerO", "O");

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
          if (currentPlayer.getSign() === playerX.getSign()) {
            gameBoard.setBoard(index, playerX.getSign());
          } else {
            gameBoard.setBoard(index, playerO.getSign());
          }
          box.textContent = gameBoard.getBoard(index);
          checkWinner();
          switchPlayers();
        },
        { once: true }
      );
    });
  }

  const winningConditions = [
    [0, 1, 2], //horizontals
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //verticals
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //diagonals
    [2, 4, 6],
  ];

function checkWinner() {
  const scoreUpdate = document.querySelector('.score')
        winningConditions.forEach((item, index) => { // [0, 1, 2, 3, 4, 5, 6, 7]
            if (gameBoard.board[item[0]] === currentPlayer.getSign() && gameBoard.board[item[1]] === currentPlayer.getSign() && gameBoard.board[item[2]] === currentPlayer.getSign()) {
                const button = document.querySelector('.button')
                scoreUpdate.textContent = `Player ${currentPlayer.getSign()} Won`;  
                button.textContent = "Restart"
            }
        })
        if (gameBoard.board.length > 8) {
          scoreUpdate.textContent = `Tie`;
        }
    }

  return { addMarker };
})();

// const gameController = (() => {

// })();

displayController.addMarker();
// displayController.resetGame();
