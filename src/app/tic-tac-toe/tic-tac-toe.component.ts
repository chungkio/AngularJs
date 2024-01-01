import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
  imports: [CommonModule]
})
export class TicTacToeComponent implements OnInit {

  // Biến lưu trữ trạng thái của game
  private board: Array<Array<string>> = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  currentPlayer: string = 'X';
  gameResult: string = '';

  constructor() {}

  ngOnInit() {}

  // Phương thức thực hiện việc luân phiên người chơi
  onMove(row: number, col: number) {
    // Kiểm tra xem ô đã được đặt dấu chưa
    if (this.board[row][col] !== '') {
      return;
    }

    // Đặt dấu cho ô được chọn
    this.board[row][col] = this.currentPlayer;

    // Chuyển lượt cho người chơi tiếp theo
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';

    // Kiểm tra kết quả thắng thua
    this.checkGameResult();
  }

  // Phương thức kiểm tra kết quả thắng thua
  private checkGameResult() {
    // Kiểm tra hàng dọc
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][0] !== '') {
        this.gameResult = this.board[i][0];
        return;
      }
    }

    // Kiểm tra hàng ngang
    for (let i = 0; i < 3; i++) {
      if (this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[0][i] !== '') {
        this.gameResult = this.board[0][i];
        return;
      }
    }

    // Kiểm tra đường chéo chính
    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0] !== '') {
      this.gameResult = this.board[0][0];
      return;
    }

    // Kiểm tra đường chéo phụ
    if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2] !== '') {
      this.gameResult = this.board[0][2];
      return;
    }

    // Nếu không có kết quả thắng thua, thì game vẫn tiếp tục
    const nonEmptyCells = this.board.flatMap(row => row.filter(cell => cell !== ''));
    if (nonEmptyCells.length !== 9) {
        this.gameResult = '';
    } else {
        this.gameResult = 'Hòa';
    }
  }

}
