function solution(answers) {
    
    //수포자 패턴 정리
    const answerSheets = {
        1: [1, 2, 3, 4, 5],
        2: [2, 1, 2, 3, 2, 4, 2, 5],
        3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    };

    const scores = [0, 0, 0];

    //정답과 각 수포자의 반복 패턴을 비교하여 점수 계산
    answers.forEach((answer, i) => {
        //i % length : 패턴 반복
        if (answer === answerSheets[1][i % answerSheets[1].length]) scores[0]++;
        if (answer === answerSheets[2][i % answerSheets[2].length]) scores[1]++;
        if (answer === answerSheets[3][i % answerSheets[3].length]) scores[2]++;
    });

    //최고 점수 계산
    const maxScore = Math.max(...scores);
    //최고 점수 수포자 저장
    const result = [];

    //최고 점수와 같은 사람만 결과 배열에 추가
    scores.forEach((score, i) => {
        if (score === maxScore) result.push(i + 1);
    });

    return result;
}