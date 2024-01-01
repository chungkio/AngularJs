import { BOARD_SIZE } from "./constants";

export class Board {
  private board: Array<string[][]>;

  constructor() {
    this.board = Array.from({ length: BOARD_SIZE }, () =>
      Array.from({ length: BOARD_SIZE }, () => [""])
    );
  }

  getCell(x: number, y: number): string {
    return this.board[x][y][0];
  }

  setCell(x: number, y: number, value: string): void {
    this.board[x][y][0] = value;
  }

  isFull(): boolean {
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        if (this.board[i][j][0] === "") {
          return false;
        }
      }
    }

    return true;
  }
}