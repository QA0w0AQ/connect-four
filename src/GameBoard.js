import React, { Component } from 'react';
import GameInfo from './GameInfo'

class GameBoard extends Component {

  isEndSelection = (num)=> {
    if (!this.props.isEnd) {
      return this.props.onPlaceDisc(num)
    }
  }
  
  render() {
    const { discs,currentPlayer,onRetract } = this.props 
    
    return (
      <div className='container'>
      <GameInfo currentPlayer={currentPlayer} onRetract={onRetract}/>
      <div className="game-board">
        <div className="button">
          {discs[0] && discs[0].map((_, index)=>(
            <button key={index} onClick={() => this.isEndSelection(index)}>🡻</button> 
          ))}
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
        {this.props.isEnd ? "Yeah~! You Win!" : ""}
      </div>
    </div>
    );
  }
}

export default GameBoard;