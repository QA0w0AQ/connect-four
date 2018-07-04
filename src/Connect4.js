class Connect4 {
  constructor(rows, cols) {
    const discs = [];
    for (let i = 0; i < rows; i++) {
      discs.push([]);
      for (let j = 0; j < cols; j++) {
        discs[i].push(null);
      }
    }
    this.discs = discs;
    this.players = [1, 2];
    this.currPlayer = 0;
    this.isEnd = false;
    this.winner = null;
    this.connection = null;
    this.steps = [];
  }

  getDiscs() {
    return this.discs;
  }

  getPlayers() {
    return this.players;
  }

  getCurrPlayer() {
    return this.players[this.currPlayer];
  }

  isGameEnd() {
    return this.isEnd;
  }

  getWinner() {
    return this.winner;
  }

  getConnection() {
    return this.connection;
  }

  checkConnection(curRow, curCol, direction) {
    const [dirV, dirH] = direction;
    let [x, y] = [curRow, curCol];
    let current = this.discs[x][y];
    let count = 0;
    let head;

    while (this.discs[x] && this.discs[x][y] && this.discs[x][y] === current) {
      head = [x, y];
      count++;
      x -= dirV;
      y -= dirH;
    }

    [x, y] = [curRow + dirV, curCol + dirH];
    while (this.discs[x] && this.discs[x][y] && this.discs[x][y] === current) {
      count++;
      x += dirV;
      y += dirH;
    }

    if (count >= 4) {
      console.log({ head, direction });
      return { head, direction };
    }
  }

  checkGameState(rowIndex, colIndex) {
    const directions = [[1, 0], [0, 1], [1, 1], [-1, 1]];

    for (const direction of directions) {
      const connection = this.checkConnection(rowIndex, colIndex, direction);
      if (connection) {
        this.connection = connection;
      }
    }
  }

  placeDisc(colIndex) {
    for (let i = this.discs.length - 1; i >= 0; i--) {
      if (!this.discs[i][colIndex]) {
        this.discs[i][colIndex] = this.players[this.currPlayer];
        this.steps.push([i, colIndex]);
        this.checkGameState(i, colIndex);
        if (this.connection) {
          this.winner = this.players[this.currPlayer];
          this.isEnd = true;
        } else {
          this.currPlayer = Math.abs(this.currPlayer - 1);
        }
        return;
      }
    }
  }
}

export default Connect4;
