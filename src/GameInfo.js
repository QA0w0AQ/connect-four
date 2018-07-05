import React, { Component } from 'react';

class GameInfo extends Component {
    
  
  render() {    
    const { currentPlayer,onRetract,isEnd } = this.props 
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
          <button onClick={!isEnd ? onRetract:null} style={{padding:"1px"}}><i className="material-icons" style={{fontSize:"17px"}}>restore</i></button>
      </div>
    )
  }
}

export default GameInfo;