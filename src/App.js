import React, { Component } from 'react';
import './App.css';

import GameBoard from './GameBoard';

class App extends Component {
  state = {
    discs: [],
    width: 7,
    height: 6,
    currentPlayer: 1
  };

  componentDidMount = () => {
    this.init();
  };

  init = () => {
    const { height, width } = this.state;
    const newDiscs = [];
    for (let i = 0; i < height; i++) {
      newDiscs.push([]);
      for (let j = 0; j < width; j++) {
        newDiscs[i].push(null);
      }
    }
    this.setState({ discs: newDiscs });
  };

  placeDisc(colIndex) {
    for (let i = this.state.height - 1; i >= 0; i--) {
      if (!this.state.discs[i][colIndex]) {
        this.setState(prevState => {
          const newDiscs = [...prevState.discs];
          newDiscs[i][colIndex] = prevState.currentPlayer;
          return {
            discs: newDiscs,
            currentPlayer: prevState.currentPlayer === 1 ? 2 : 1
          };
        });
        return;
      }
    }
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
          onPlaceDisc={this.placeDisc}
        />
      </div>
    );
  }
}

export default App;
