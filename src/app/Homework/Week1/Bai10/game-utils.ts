import { BOARD_SIZE } from "./constants";

export function isGameOver(board: Array < string[][] > ): boolean {
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (
      board[i][0][0] === board[i][1][0] &&
      board[i][1][0] === board[i][2][0] &&
      board[i][0][0] !== ""
    ) {
      return true;
    }

    if (
      board[0][i][0] === board[1][i][0] &&
      board[1][i][0] === board[2][i][0] &&
      board[0][i][0] !== ""
    ) {
      return true;
    }
  }

  if (
    board[0][0][0] === board[1][1][0] &&
    board[1][1][0] === board[2][2][0] &&
    board[0][0][0] !== ""
  ) {
    return true;
  }

  if (
    board[0][2][0] === board[1][1][0] &&
    board[1][1][0] === board[2][0][0] &&
    board[0][2][0] !== ""
  ) {
    return true;
  }

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j][0] === "") {
        return false;
      }
    }
  }

  return true;
}
