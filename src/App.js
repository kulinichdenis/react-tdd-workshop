import React from 'react';
import Registration from './Registration';
import Game from './Game';
import Winners from './Winners';
import { gameStatus } from './gameService';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      p1Name: '',
      p2Name: '',
      board: [['', '', ''], ['', '', ''], ['', '', '']],
      winner: '',
      currentPlayer: 'X',
    };
  }

  onNewGame = ({ p1Name, p2Name }) => {
    this.setState({
      p1Name,
      p2Name,
      board: [['', '', ''], ['', '', ''], ['', '', '']],
    });
  };

  handleCellClick = (rIndex, cIndex) => {
    const board = this.state.board.map(row => [...row]);
    if (board[rIndex][cIndex] !== '') return;

    board[rIndex][cIndex] = this.state.currentPlayer;
    if (gameStatus(board) === this.state.currentPlayer) {
      this.name = this.state.p1Name;
      this.setState({ winner: this.state.currentPlayer });
      console.log('write winner');
      // localStorage.setItem();
    }
    if (gameStatus(board) === 'tie') {
      this.setState({ winner: `It's a tie!` });
    }

    const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({ board, currentPlayer: nextPlayer });
  };
  render() {
    const { winner, p1Name, p2Name, currentPlayer } = this.state;
    return (
      <div className="App">
        {(!p1Name || !p2Name) && <Registration onNewGame={this.onNewGame} />}
        <Game
          onCellClicked={this.handleCellClick}
          board={this.state.board}
          p1Name={p1Name}
          p2Name={p2Name}
          currentPlayer={currentPlayer}
        />
        {winner && (
          <div data-hook="winner-message">
            {winner !== `It's a tie!` && `${winner === 'X' ? p1Name : p2Name} won!`}
            {winner === `It's a tie!` && `It's a tie!`}
          </div>
        )}
        <Winners />
      </div>
    );
  }
}
export default App;
