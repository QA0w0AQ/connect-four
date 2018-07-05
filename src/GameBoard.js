import React, { Component } from 'react';
import GameInfo from './GameInfo'

class GameBoard extends Component {
    
  
  render() {
    const { discs,onPlaceDisc } = this.props 
    
    return (
      <div className='container'>
      <GameInfo />
      <div className="game-board">
        <div className="button">
          <button onClick={() => onPlaceDisc(0)}>🡻</button>
          <button onClick={() => onPlaceDisc(1)}>🡻</button>
          <button onClick={() => onPlaceDisc(2)}>🡻</button>
          <button onClick={() => onPlaceDisc(3)}>🡻</button>
          <button onClick={() => onPlaceDisc(4)}>🡻</button>
          <button onClick={() => onPlaceDisc(5)}>🡻</button>
          <button onClick={() => onPlaceDisc(6)}>🡻</button>
        </div>
        <table className="table">
          <tbody>
            {discs.map((unit,index)=>(
              <tr key={index} className="tr">
               {unit.map((disc, index)=>(
                 <td className="unit" style={{backgroundColor: disc ? disc === 1 ? 'red': 'blue' : 'white'}} key={index}></td>
               ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
  }
}

export default GameBoard;