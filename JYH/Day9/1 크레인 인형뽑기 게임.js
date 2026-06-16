function solution(board, moves) {
    
    const basket = [];
    let count = 0;
    
    for (let move of moves) {
        const col = move - 1;
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] !== 0) {
                const doll = board[row][col];
                if (basket.at(-1) === doll) {
                    basket.pop();
                    count += 2;
                }
                else {
                    basket.push(doll);
                }
                board[row][col] = 0;
                break;
            }
        }
    }
    return count;
}