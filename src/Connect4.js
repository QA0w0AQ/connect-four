class Connect4 {
  constructor(rows, cols){
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

  checkState() {
    
  }

  placeDisc(colIndex) {
    for (let i = this.discs.length - 1; i >= 0; i--) {
      if (!this.discs[i][colIndex]) {
        this.discs[i][colIndex] = this.players[this.currPlayer];
        this.currPlayer = Math.abs(this.currPlayer - 1);
        return;
      }
    }
  }
}

export default Connect4;