function solution(answers) {
    const supoja = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];

    const score = [0, 0, 0];

    answers.forEach((e, idx) => {
        if (e === supoja[0][idx % supoja[0].length]) score[0]++;
        if (e === supoja[1][idx % supoja[1].length]) score[1]++;
        if (e === supoja[2][idx % supoja[2].length]) score[2]++;
    })

    const max = Math.max(...score);

    const answer = [];
    score.forEach((s, i) => {
        if (s === max) answer.push(i + 1);
    })

    return answer;
}