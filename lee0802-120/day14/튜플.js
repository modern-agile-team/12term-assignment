// 문제 해설: 문자열에서 작은 객체를 확인하고 거기서 추가된 숫자를 배열에 담아서 리턴하는 문제.
function solution(s) {
    const result = s.match(/\{[^}]+\}/g)
        .map(s => s.replace(/[{}]/g, "").split(',').map(Number)).sort((a, b) => a.length - b.length);
    let answer = [];

    for (let i = 0; i < result.length; i++) {
        let as1 = result[i - 1];
        let as2 = result[i];

        answer.push(as2.filter(x => {
            if (as1 === undefined) {
                return as2[i];
            }
            return !as1.includes(x)
        }).join());
    }

    return answer.map(Number);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
