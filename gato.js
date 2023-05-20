document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
  
    cells.forEach(function (cell) {
      cell.addEventListener('click', handleCellClick);
    });
  
    function handleCellClick() {
      if (this.textContent !== '') return;
      this.textContent = currentPlayer;
      this.classList.add(currentPlayer);
  
      if (checkWin(currentPlayer)) {
        alert('Player ' + currentPlayer + ' wins!');
        resetGame();
        return;
      }
  
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  
      if (checkDraw()) {
        alert('It\'s a draw!');
        resetGame();
        return;
      }
    }
  
    function checkWin(player) {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      return winningCombinations.some(combination => {
        return combination.every(index => {
          return cells[index].textContent === player;
        });
      });
    }
  
    function checkDraw() {
      return [...cells].every(cell => {
        return cell.textContent !== '';
      });
    }
  
    function resetGame() {
      cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
      });
      currentPlayer = 'X';
    }
  });
  