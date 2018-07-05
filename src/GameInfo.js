import React, { Component } from 'react';

class GameInfo extends Component {
    
  
  render() {    
    const { currentPlayer } = this.props 
    return (
      <div>
          <i className="material-icons">
              perm_identity
          </i>
          <span>VS</span>
          <i className="material-icons">
              perm_identity
          </i>
          <span className='one' style={{backgroundColor: currentPlayer ? currentPlayer === 2 ? 'blue': 'red' : 'red'}}></span>
      </div>
    )
  }
}

export default GameInfo;