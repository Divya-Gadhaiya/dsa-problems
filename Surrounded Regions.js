/** Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
* A region is captured by flipping all 'O's into 'X's in that surrounded region.
Input:                
X X X X
X O O X
X X O X
X O X X
Output:
X X X X
X X X X
X X X X
X O X X
* Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. 
* Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. 
* Two cells are connected if they are adjacent cells connected horizontally or vertically.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
   if (board === null || board.length <= 2 || board[0] === null || board[0].length <= 2) {
            return;
    }
        
    let rows = board.length;
    let cols = board[0].length;
    
	    // Start from first and last column, turn 'O' to '*' and start infection
        for (let i = 0; i < rows; i++) {
            if (board[i][0] === 'O') {
                updateBoard(board, i, 0);
            }
            if (board[i][cols - 1] === 'O') {
                updateBoard(board, i, cols - 1);
            }
        }
        // Start from first and last row, turn '0' to '*' and start infection
        for (let j = 0; j < cols; j++) {
            if (board[0][j] === 'O') {
                updateBoard(board, 0, j);
            }
            if (board[rows - 1][j] === 'O') {
                updateBoard(board, rows - 1, j);
            }
        }
        
        // turn 'O' to 'X', '*' back to 'O', keep 'X' intact.
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (board[i][j] === '*') {
                    board[i][j] = 'O';
                } else if (board[i][j] === 'O') {
                    board[i][j] = 'X';
                }
            }
        }
    
    function updateBoard(board,  i, j) {
        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== 'O') {
            return;
        }
        board[i][j] = '*'; 
        updateBoard(board, i + 1, j);
        updateBoard(board, i - 1, j);
        updateBoard(board, i, j + 1);
        updateBoard(board, i, j - 1);
    }
};
