let board = [];

function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "0";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "0";
    board[clickedId] = "0";
  }

  console.log(board);

  const topLeft = board[0];
  const topMid = board[1];
  const topRight = board[2];
  const midLeft = board[3];
  const midMid = board[4];
  const midRight = board[5];
  const botLeft = board[6];
  const botMid = board[7];
  const botRight = board[8];

  if (topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    afterWinner();
  }
  if (midLeft !== undefined && midLeft === midMid && midLeft === midRight) {
    alert(`${midLeft} is the winner`);
    afterWinner();
  }
  if (botLeft !== undefined && botLeft === botMid && botLeft === botRight) {
    alert(`${botLeft} is the winner`);
    afterWinner();
  }
  if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
    alert(`${topLeft} is the winner`);
    afterWinner();
  }
  if (topMid !== undefined && topMid === midMid && topMid === botMid) {
    alert(`${topMid} is the winner`);
    afterWinner();
  }
  if (
    topRight !== undefined &&
    topRight === midRight &&
    topRight === botRight
  ) {
    alert(`${topRight} is the winner`);
    afterWinner();
  }
  if (topLeft !== undefined && topLeft === midMid && topLeft === botRight) {
    alert(`${topLeft} is the winner`);
    afterWinner();
  }
  if (botLeft !== undefined && botLeft === midMid && botLeft === topRight) {
    alert(`${botLeft} is the winner`);
    afterWinner();
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner!");
  }
}

function afterWinner() {
  board = [];
  for (let i = 0; i <= 8; i++) {
    document.getElementById(i).innerHTML = "";
  }
}
