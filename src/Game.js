import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ p1Name, p2Name, board, onCellClicked, currentPlayer }) => {
  return (
    <div>
      <div>
        <span>First Player (X):</span>
        <span className={currentPlayer === 'X' ? 'activePlayer' : ''} data-hook="p1-name">
          {`${p1Name}`}
        </span>
      </div>
      <span>Second Player (Y):</span>
      <span className={currentPlayer === 'O' ? 'activePlayer' : ''} data-hook="p2-name">
        {`${p2Name}`}
      </span>
      {p1Name &&
        p2Name && (
          <table role="grid">
            <tbody>
              {board.map((row, rIndex) => (
                <tr key={rIndex}>
                  {row.map((cell, cIndex) => (
                    <td
                      key={cIndex}
                      role="gridcell"
                      data-hook="cell"
                      onClick={() => onCellClicked(rIndex, cIndex)}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
};

Game.propTypes = {
  p1Name: PropTypes.string.isRequired,
  p2Name: PropTypes.string.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onCellClicked: PropTypes.func.isRequired,
};

export default Game;
