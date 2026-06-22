function solution(board, moves) {
    const result = [];
    let answer = 0;

    for (const move of moves) {

        for (let i = 0; i < board.length; i++) {
            if (board[i][move - 1] > 0) {
                const pick = board[i][move - 1];
                board[i][move - 1] = 0;

                if (result[result.length - 1] === pick) {
                    result.pop()
                    answer += 2;
                } else {
                    result.push(pick);
                }
                break;
            }
        }
    }

    return answer;
}