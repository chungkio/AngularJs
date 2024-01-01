import { Board } from "./board";
import { PLAYER_X, PLAYER_O } from "./constants";
import { isGameOver } from "./game-utils"

export class Game {
  private board: Board;
  private currentPlayer: string;

  constructor() {
    this.board = new Board();
    this.currentPlayer = PLAYER_X;
  }

  isGameOver(): boolean {
    return isGameOver(this.board);
  }

  getCurrentPlayer(): string {
    return this.currentPlayer;
  }

  addMove(x: number, y: number): void {
    if (!this.isGameOver() && this.board.getCell(x, y) === "") {
      this.board.setCell(x, y, this.currentPlayer);
      this.currentPlayer = this.currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    }
  }

  getBoard(): Array<string[][]> {
    return this.board;
  }
}
