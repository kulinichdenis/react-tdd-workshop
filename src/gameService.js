export const gameStatus = board => {
  const isRows = symbol => {
    return board.reduce((acc, cells) => {
      return !acc ? cells.every(cell => cell === symbol) : acc;
    }, false);
  };

  const isColumns = symbol => {
    let result = false;
    for (let z = 0; z < board.length; z++) {
      if (board.every(row => row[z] === symbol)) {
        result = true;
        break;
      }
    }
    return result;
  };

  const fullAllCells = table => table.reduce((acc, row) => row.every(item => !!item), false);

  const isDialonalLeftRight = symbol => board.every((row, index) => row[index] === symbol);

  const isDialonalRightLeft = symbol => {
    return board.every((row, index) => row[row.length - 1 - index] === symbol);
  };

  if (isRows('X') || isColumns('X') || isDialonalLeftRight('X') || isDialonalRightLeft('X')) {
    return 'X';
  }

  if (isRows('Y') || isColumns('Y') || isDialonalLeftRight('Y') || isDialonalRightLeft('Y')) {
    return 'Y';
  }
  return fullAllCells(board) ? 'tie' : null;
};
