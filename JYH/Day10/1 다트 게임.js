function solution(dartResult) {
    const rounds = dartResult.match(/\d{1,2}[SDT][*#]?/g);
    const scores = [];

    rounds.forEach((round) => {
        const number = Number(round.match(/\d{1,2}/)[0]);
        const bonus = round.match(/[SDT]/)[0];
        const option = round.match(/[*#]/)?.[0];

        let score = number;

        if (bonus === "D") score = number ** 2;
        if (bonus === "T") score = number ** 3;

        if (option === "*") {
            score *= 2;

            if (scores.length > 0) {
                scores[scores.length - 1] *= 2;
            }
        }

        if (option === "#") score *= -1;

        scores.push(score);
    });

    return scores.reduce((sum, num) => sum + num, 0);
}