import React, { Component } from 'react';

class GameBoard extends Component {
    
  
  render() {
    const { discs,onPlaceDisc } = this.props 
    
    return (
      <div className="game-board">
        <button onClick={() => onPlaceDisc(0)}>🡻</button>
        <button onClick={() => onPlaceDisc(1)}>🡻</button>
        <button onClick={() => onPlaceDisc(2)}>🡻</button>
        <button onClick={() => onPlaceDisc(3)}>🡻</button>
        <button onClick={() => onPlaceDisc(4)}>🡻</button>
        <button onClick={() => onPlaceDisc(5)}>🡻</button>
        <button onClick={() => onPlaceDisc(6)}>🡻</button>
        <table className="table">
          <tbody>
            {discs.map((unit,index)=>(
              <tr key={index} className="tr">
               {unit.map((disc, index)=>(
                 <td className="unit" style={{backgroundColor: disc ? disc === 1 ? 'red': 'blue' : 'white'}} key={index}>O</td>
               ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GameBoard;