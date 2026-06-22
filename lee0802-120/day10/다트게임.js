function solution(dartResult) {
    const Bonus = {'S': 1, 'D': 2, 'T': 3};
    const result = dartResult.match(/\d+[SDT][#*]?/g);
    let answer = 0;

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
    cum.forEach(x => answer += x);

    return answer;
}