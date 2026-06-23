function solution(dartResult) {
    const Bonus = {'S': 1, 'D': 2, 'T': 3};
    const result = dartResult.match(/\d+[SDT][#*]?/g);
    let cum = [];

    for (let i = 0; i < result.length; i++) {
        let sss = 0;
        cum.push(sss + parseInt(result[i]) ** Bonus[result[i].match(/[SDT]/)]);
        if (result[i].includes('#')) cum[i] *= -1;
        if (result[i].includes('*')) {
            cum[i] *= 2;
            if (i > 0) cum[i - 1] *= 2;
        }
    }
    return cum.reduce((x, v) => x + v, 0);
}

console.log(solution("1S2D*3T"))