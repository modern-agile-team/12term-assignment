function solution(numbers, hand) {
    const pos = {
        1:[0,0], 2:[0,1], 3:[0,2],
        4:[1,0], 5:[1,1], 6:[1,2],
        7:[2,0], 8:[2,1], 9:[2,2],
        '*':[3,0], 0:[3,1], '#':[3,2]
    }

    let left = '*';
    let right = '#';
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        const temp = numbers[i];
        const [r, c] = pos[temp];
        const [lr, lc] = pos[left];
        const [rr, rc] = pos[right];

        if (c === 0) {
            answer.push('L');
            left = temp;
        } else if (c === 2) {
            answer.push('R');
            right = temp;
        } else {
            const leftDist = Math.abs(r - lr) + Math.abs(c - lc);
            const rightDist = Math.abs(r - rr) + Math.abs(c - rc);

            if (leftDist < rightDist) {
                answer.push('L')
                left = temp;
            } else if (leftDist > rightDist) {
                answer.push('R')
                right = temp;
            } else {
                if (hand === 'left') {
                    answer.push('L')
                    left = temp;
                } else {
                    answer.push('R')
                    right = temp;
                }
            }
        }
    }

    return answer.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")) // 정답 "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")) // 정답 "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")) // 정답 "LLRLLRLLRL"
