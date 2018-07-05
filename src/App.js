import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import Connect4 from './Connect4';

let GAME;

class App extends Component {
  state = {
    discs: [],
    cols: 7,
    rows: 6,
    currentPlayer: 1,
    isEnd: false,
    winner: null,
    connection: null
  };

  componentDidMount = () => {
    this.resetGame();
  };

  resetGame = () => {
    const { rows, cols } = this.state;
    GAME = new Connect4(rows, cols);
    this.updateGame();
  };

  updateGame = () => {
    this.setState({
      discs: GAME.getDiscs(),
      currentPlayer: GAME.getCurrPlayer(),
      isEnd: GAME.isGameEnd(),
      winner: GAME.getWinner(),
      connection: GAME.getConnection()
    });
  };

  placeDisc = (colIndex) => {
    GAME.placeDisc(colIndex);
    this.updateGame();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Connect 4</h1>
        </header>
        <GameBoard
          discs={this.state.discs}
          currentPlayer={this.state.currentPlayer}
          isEnd = {this.state.isEnd}
          connection = {this.state.connection}
          winner = {this.state.winner}
          onPlaceDisc={this.placeDisc}
        />
      </div>
    );
  }
}

export default App;
