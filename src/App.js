import React, { Component } from 'react';
import './App.css';

import GameBoard from './GameBoard';

class App extends Component {
  state = {
    discs: [],
    width: 7,
    height: 6
  };

  componentDidMount = () => {
    this.init();
    setTimeout(() => {
      console.log(this.state.discs);
    }, 100);
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Connect 4</h1>
        </header>
        <GameBoard discs={this.state.discs} />
      </div>
    );
  }
}

export default App;
